export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      blocked_dates: {
        Row: {
          blocked_date: string
          booking_id: string | null
          created_at: string
          id: string
          service_type: string
        }
        Insert: {
          blocked_date: string
          booking_id?: string | null
          created_at?: string
          id?: string
          service_type: string
        }
        Update: {
          blocked_date?: string
          booking_id?: string | null
          created_at?: string
          id?: string
          service_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "blocked_dates_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings: {
        Row: {
          add_ons: Json | null
          add_ons_total: number
          city: string | null
          created_at: string
          email: string
          event_date: string
          event_type: string
          first_name: string
          guest_count: string | null
          hours: string
          id: string
          last_name: string | null
          notes: string | null
          package_name: string
          package_price: number
          paypal_order_id: string | null
          paypal_status: string | null
          phone: string
          status: string
          total_price: number
          updated_at: string
          venue: string | null
        }
        Insert: {
          add_ons?: Json | null
          add_ons_total?: number
          city?: string | null
          created_at?: string
          email: string
          event_date: string
          event_type: string
          first_name: string
          guest_count?: string | null
          hours: string
          id?: string
          last_name?: string | null
          notes?: string | null
          package_name: string
          package_price: number
          paypal_order_id?: string | null
          paypal_status?: string | null
          phone: string
          status?: string
          total_price: number
          updated_at?: string
          venue?: string | null
        }
        Update: {
          add_ons?: Json | null
          add_ons_total?: number
          city?: string | null
          created_at?: string
          email?: string
          event_date?: string
          event_type?: string
          first_name?: string
          guest_count?: string | null
          hours?: string
          id?: string
          last_name?: string | null
          notes?: string | null
          package_name?: string
          package_price?: number
          paypal_order_id?: string | null
          paypal_status?: string | null
          phone?: string
          status?: string
          total_price?: number
          updated_at?: string
          venue?: string | null
        }
        Relationships: []
      }
      booths: {
        Row: {
          active: boolean | null
          booth_name: string
          booth_type: string
          created_at: string | null
          id: string
          ideal_for: string | null
          one_hour_flat_rate: number | null
          personality: string | null
          premium_level: string | null
          short_description: string | null
        }
        Insert: {
          active?: boolean | null
          booth_name: string
          booth_type: string
          created_at?: string | null
          id?: string
          ideal_for?: string | null
          one_hour_flat_rate?: number | null
          personality?: string | null
          premium_level?: string | null
          short_description?: string | null
        }
        Update: {
          active?: boolean | null
          booth_name?: string
          booth_type?: string
          created_at?: string | null
          id?: string
          ideal_for?: string | null
          one_hour_flat_rate?: number | null
          personality?: string | null
          premium_level?: string | null
          short_description?: string | null
        }
        Relationships: []
      }
      business_settings: {
        Row: {
          booking_link: string | null
          business_name: string | null
          created_at: string | null
          id: string
          instagram: string | null
          service_area: string | null
          setup_policy: string | null
          sms_from_number: string | null
          support_phone: string | null
        }
        Insert: {
          booking_link?: string | null
          business_name?: string | null
          created_at?: string | null
          id?: string
          instagram?: string | null
          service_area?: string | null
          setup_policy?: string | null
          sms_from_number?: string | null
          support_phone?: string | null
        }
        Update: {
          booking_link?: string | null
          business_name?: string | null
          created_at?: string | null
          id?: string
          instagram?: string | null
          service_area?: string | null
          setup_policy?: string | null
          sms_from_number?: string | null
          support_phone?: string | null
        }
        Relationships: []
      }
      chatbot_backdrops: {
        Row: {
          active: boolean | null
          addon_price: number | null
          backdrop_name: string
          category: string | null
          created_at: string | null
          description: string | null
          id: string
          included_with: string | null
          premium_notes: string | null
          size: string | null
          style: string | null
        }
        Insert: {
          active?: boolean | null
          addon_price?: number | null
          backdrop_name: string
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          included_with?: string | null
          premium_notes?: string | null
          size?: string | null
          style?: string | null
        }
        Update: {
          active?: boolean | null
          addon_price?: number | null
          backdrop_name?: string
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          included_with?: string | null
          premium_notes?: string | null
          size?: string | null
          style?: string | null
        }
        Relationships: []
      }
      faq_items: {
        Row: {
          active: boolean | null
          answer: string
          category: string | null
          created_at: string | null
          id: string
          question: string
        }
        Insert: {
          active?: boolean | null
          answer: string
          category?: string | null
          created_at?: string | null
          id?: string
          question: string
        }
        Update: {
          active?: boolean | null
          answer?: string
          category?: string | null
          created_at?: string | null
          id?: string
          question?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          backdrop_interest: boolean | null
          created_at: string | null
          email: string | null
          event_date: string | null
          event_type: string | null
          full_name: string | null
          guest_count: string | null
          id: string
          location: string | null
          notes: string | null
          phone: string | null
          preferred_booth: string | null
          recommendation: string | null
          requested_hours: string | null
          sms_sent: boolean | null
          source: string | null
          vibe_preference: string | null
        }
        Insert: {
          backdrop_interest?: boolean | null
          created_at?: string | null
          email?: string | null
          event_date?: string | null
          event_type?: string | null
          full_name?: string | null
          guest_count?: string | null
          id?: string
          location?: string | null
          notes?: string | null
          phone?: string | null
          preferred_booth?: string | null
          recommendation?: string | null
          requested_hours?: string | null
          sms_sent?: boolean | null
          source?: string | null
          vibe_preference?: string | null
        }
        Update: {
          backdrop_interest?: boolean | null
          created_at?: string | null
          email?: string | null
          event_date?: string | null
          event_type?: string | null
          full_name?: string | null
          guest_count?: string | null
          id?: string
          location?: string | null
          notes?: string | null
          phone?: string | null
          preferred_booth?: string | null
          recommendation?: string | null
          requested_hours?: string | null
          sms_sent?: boolean | null
          source?: string | null
          vibe_preference?: string | null
        }
        Relationships: []
      }
      packages: {
        Row: {
          active: boolean | null
          booth_id: string | null
          created_at: string | null
          features: Json | null
          hours: number
          id: string
          package_name: string
          price: number
        }
        Insert: {
          active?: boolean | null
          booth_id?: string | null
          created_at?: string | null
          features?: Json | null
          hours: number
          id?: string
          package_name: string
          price: number
        }
        Update: {
          active?: boolean | null
          booth_id?: string | null
          created_at?: string | null
          features?: Json | null
          hours?: number
          id?: string
          package_name?: string
          price?: number
        }
        Relationships: [
          {
            foreignKeyName: "packages_booth_id_fkey"
            columns: ["booth_id"]
            isOneToOne: false
            referencedRelation: "booths"
            referencedColumns: ["id"]
          },
        ]
      }
      sms_templates: {
        Row: {
          active: boolean | null
          created_at: string | null
          id: string
          template_body: string
          template_name: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          template_body: string
          template_name: string
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          template_body?: string
          template_name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
