import { corsHeaders } from '@supabase/supabase-js/cors'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const clientId = Deno.env.get('PAYPAL_CLIENT_ID')
  if (!clientId) {
    return new Response(JSON.stringify({ error: 'PayPal not configured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ clientId }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})
