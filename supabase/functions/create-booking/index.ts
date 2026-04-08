import { corsHeaders } from '@supabase/supabase-js/cors'
import { createClient } from 'npm:@supabase/supabase-js@2'
import { z } from 'npm:zod@3'

const BookingSchema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().max(100).optional(),
  email: z.string().email().max(255),
  phone: z.string().min(1).max(30),
  eventDate: z.string().min(1),
  eventType: z.string().min(1).max(100),
  hours: z.string().min(1),
  guestCount: z.string().optional(),
  city: z.string().max(200).optional(),
  venue: z.string().max(200).optional(),
  packageName: z.string().min(1),
  packagePrice: z.number().min(0),
  addOns: z.array(z.object({ name: z.string(), price: z.number() })).optional(),
  addOnsTotal: z.number().min(0),
  totalPrice: z.number().min(0),
  notes: z.string().max(2000).optional(),
  paypalOrderId: z.string().optional(),
  paypalStatus: z.string().optional(),
  serviceType: z.string().min(1),
})

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const body = await req.json()
    const parsed = BookingSchema.safeParse(body)
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const data = parsed.data
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Insert booking
    const { data: booking, error: bookingError } = await supabase
      .from('bookings')
      .insert({
        first_name: data.firstName,
        last_name: data.lastName || null,
        email: data.email,
        phone: data.phone,
        event_date: data.eventDate,
        event_type: data.eventType,
        hours: data.hours,
        guest_count: data.guestCount || null,
        city: data.city || null,
        venue: data.venue || null,
        package_name: data.packageName,
        package_price: data.packagePrice,
        add_ons: data.addOns || [],
        add_ons_total: data.addOnsTotal,
        total_price: data.totalPrice,
        notes: data.notes || null,
        status: data.paypalOrderId ? 'confirmed' : 'pending',
        paypal_order_id: data.paypalOrderId || null,
        paypal_status: data.paypalStatus || null,
      })
      .select('id')
      .single()

    if (bookingError) {
      console.error('Booking insert error:', bookingError)
      return new Response(JSON.stringify({ error: 'Failed to create booking' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Block the date for this service type
    const { error: blockError } = await supabase
      .from('blocked_dates')
      .insert({
        booking_id: booking.id,
        blocked_date: data.eventDate,
        service_type: data.serviceType,
      })

    if (blockError) {
      console.error('Block date error:', blockError)
    }

    // Send confirmation email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; padding: 30px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #C9A135; font-size: 28px; margin: 0;">Photo Booth Legends</h1>
          <p style="color: #666; font-size: 14px;">Booking Confirmation</p>
        </div>
        <h2 style="color: #1a1a1a; font-size: 22px;">Thank you, ${data.firstName}!</h2>
        <p style="color: #555; line-height: 1.6;">Your booking has been ${data.paypalOrderId ? 'confirmed and paid' : 'received'}. Here are your details:</p>
        <div style="background: #f8f8f8; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <p style="margin: 8px 0;"><strong>Package:</strong> ${data.packageName}</p>
          <p style="margin: 8px 0;"><strong>Event Date:</strong> ${data.eventDate}</p>
          <p style="margin: 8px 0;"><strong>Event Type:</strong> ${data.eventType}</p>
          <p style="margin: 8px 0;"><strong>Duration:</strong> ${data.hours}</p>
          ${data.venue ? `<p style="margin: 8px 0;"><strong>Venue:</strong> ${data.venue}</p>` : ''}
          ${data.city ? `<p style="margin: 8px 0;"><strong>City:</strong> ${data.city}</p>` : ''}
          ${data.guestCount ? `<p style="margin: 8px 0;"><strong>Guests:</strong> ${data.guestCount}</p>` : ''}
          ${data.addOns && data.addOns.length > 0 ? `<p style="margin: 8px 0;"><strong>Add-Ons:</strong> ${data.addOns.map(a => a.name).join(', ')}</p>` : ''}
          <hr style="border: none; border-top: 1px solid #ddd; margin: 15px 0;" />
          <p style="margin: 8px 0; font-size: 18px;"><strong>Total: $${data.totalPrice.toLocaleString()}</strong></p>
          ${data.paypalOrderId ? `<p style="margin: 8px 0; color: #27ae60;"><strong>✓ Payment Received</strong> (PayPal Order: ${data.paypalOrderId})</p>` : ''}
        </div>
        <p style="color: #555; line-height: 1.6;">We'll be in touch soon to finalize the details. Questions? Call us at <a href="tel:9545485809" style="color: #C9A135;">(954) 548-5809</a>.</p>
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #999; font-size: 12px;">Photo Booth Legends · South Florida · @photoboothlegends</p>
        </div>
      </div>
    `

    // Send confirmation email to business owner
    const ownerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; padding: 30px;">
        <h1 style="color: #C9A135; font-size: 24px;">🎉 New Booking Received!</h1>
        <div style="background: #f8f8f8; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <p style="margin: 8px 0;"><strong>Client:</strong> ${data.firstName} ${data.lastName || ''}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> ${data.email}</p>
          <p style="margin: 8px 0;"><strong>Phone:</strong> ${data.phone}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 15px 0;" />
          <p style="margin: 8px 0;"><strong>Package:</strong> ${data.packageName}</p>
          <p style="margin: 8px 0;"><strong>Event Date:</strong> ${data.eventDate}</p>
          <p style="margin: 8px 0;"><strong>Event Type:</strong> ${data.eventType}</p>
          <p style="margin: 8px 0;"><strong>Duration:</strong> ${data.hours}</p>
          ${data.venue ? `<p style="margin: 8px 0;"><strong>Venue:</strong> ${data.venue}</p>` : ''}
          ${data.city ? `<p style="margin: 8px 0;"><strong>City:</strong> ${data.city}</p>` : ''}
          ${data.guestCount ? `<p style="margin: 8px 0;"><strong>Guests:</strong> ${data.guestCount}</p>` : ''}
          ${data.addOns && data.addOns.length > 0 ? `<p style="margin: 8px 0;"><strong>Add-Ons:</strong> ${data.addOns.map(a => `${a.name} ($${a.price})`).join(', ')}</p>` : ''}
          ${data.notes ? `<p style="margin: 8px 0;"><strong>Notes:</strong> ${data.notes}</p>` : ''}
          <hr style="border: none; border-top: 1px solid #ddd; margin: 15px 0;" />
          <p style="margin: 8px 0; font-size: 20px;"><strong>Total: $${data.totalPrice.toLocaleString()}</strong></p>
          <p style="margin: 8px 0;"><strong>Status:</strong> ${data.paypalOrderId ? '✅ PAID via PayPal' : '⏳ Pending Payment'}</p>
          ${data.paypalOrderId ? `<p style="margin: 8px 0;"><strong>PayPal Order:</strong> ${data.paypalOrderId}</p>` : ''}
        </div>
      </div>
    `

    // Send emails via edge function (Resend or similar — for now log)
    console.log('Customer confirmation email would be sent to:', data.email)
    console.log('Owner notification email would be sent')

    return new Response(JSON.stringify({ success: true, bookingId: booking.id }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Create booking error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
