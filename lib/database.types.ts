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
    PostgrestVersion: "13.0.5"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      audio_guides: {
        Row: {
          audio_url: string
          created_at: string | null
          id: number
          language: string
          monastery_id: number
          title: string
          track_order: number
        }
        Insert: {
          audio_url: string
          created_at?: string | null
          id?: number
          language: string
          monastery_id: number
          title: string
          track_order: number
        }
        Update: {
          audio_url?: string
          created_at?: string | null
          id?: number
          language?: string
          monastery_id?: number
          title?: string
          track_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "audio_guides_monastery_id_fkey"
            columns: ["monastery_id"]
            isOneToOne: false
            referencedRelation: "monasteries"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_messages: {
        Row: {
          content: string | null
          created_at: string | null
          id: string
          meta: Json | null
          role: string | null
          session_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: string
          meta?: Json | null
          role?: string | null
          session_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: string
          meta?: Json | null
          role?: string | null
          session_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "chat_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_sessions: {
        Row: {
          created_at: string | null
          id: string
          manuscript_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          manuscript_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          manuscript_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_sessions_manuscript_id_fkey"
            columns: ["manuscript_id"]
            isOneToOne: false
            referencedRelation: "manuscripts"
            referencedColumns: ["id"]
          },
        ]
      }
      digital_archives: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          id: number
          link: string | null
          name: string
          photo_link: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          id?: number
          link?: string | null
          name: string
          photo_link?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          id?: number
          link?: string | null
          name?: string
          photo_link?: string | null
        }
        Relationships: []
      }
      events: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          end_date: string | null
          event_name: string
          id: number
          main_image_path: string | null
          max_participants: string | null
          monastery_id: number
          monastery_name: string | null
          registration_required: string | null
          start_date: string | null
          when_does_it_happen: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          event_name: string
          id?: number
          main_image_path?: string | null
          max_participants?: string | null
          monastery_id: number
          monastery_name?: string | null
          registration_required?: string | null
          start_date?: string | null
          when_does_it_happen?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          event_name?: string
          id?: number
          main_image_path?: string | null
          max_participants?: string | null
          monastery_id?: number
          monastery_name?: string | null
          registration_required?: string | null
          start_date?: string | null
          when_does_it_happen?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_monastery_id_fkey"
            columns: ["monastery_id"]
            isOneToOne: false
            referencedRelation: "monasteries"
            referencedColumns: ["id"]
          },
        ]
      }
      manuscripts: {
        Row: {
          created_at: string | null
          file_url: string | null
          id: string
          title: string | null
        }
        Insert: {
          created_at?: string | null
          file_url?: string | null
          id?: string
          title?: string | null
        }
        Update: {
          created_at?: string | null
          file_url?: string | null
          id?: string
          title?: string | null
        }
        Relationships: []
      }
      monasteries: {
        Row: {
          address: string | null
          altitude: number | null
          architecture_style: string | null
          best_time_to_visit: string | null
          Description: string | null
          entry_fees: string | null
          established_year: number | null
          id: number
          latitude: number | null
          longitude: number | null
          main_image_path: string | null
          name: string
          significance: string | null
          timings: string | null
        }
        Insert: {
          address?: string | null
          altitude?: number | null
          architecture_style?: string | null
          best_time_to_visit?: string | null
          Description?: string | null
          entry_fees?: string | null
          established_year?: number | null
          id?: number
          latitude?: number | null
          longitude?: number | null
          main_image_path?: string | null
          name: string
          significance?: string | null
          timings?: string | null
        }
        Update: {
          address?: string | null
          altitude?: number | null
          architecture_style?: string | null
          best_time_to_visit?: string | null
          Description?: string | null
          entry_fees?: string | null
          established_year?: number | null
          id?: number
          latitude?: number | null
          longitude?: number | null
          main_image_path?: string | null
          name?: string
          significance?: string | null
          timings?: string | null
        }
        Relationships: []
      }
      ocr_results: {
        Row: {
          created_at: string | null
          id: string
          language: string | null
          manuscript_id: string | null
          raw_json: Json | null
          text: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          language?: string | null
          manuscript_id?: string | null
          raw_json?: Json | null
          text?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          language?: string | null
          manuscript_id?: string | null
          raw_json?: Json | null
          text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ocr_results_manuscript_id_fkey"
            columns: ["manuscript_id"]
            isOneToOne: false
            referencedRelation: "manuscripts"
            referencedColumns: ["id"]
          },
        ]
      }
      tours: {
        Row: {
          airport_distance_km: number | null
          bus_distance_km: number | null
          created_at: string | null
          id: number
          image_path: string | null
          monastery_id: number
          monastery_name: string
          nearest_airport: string | null
          nearest_bus_stop: string | null
          nearest_taxi_stand: string | null
          nearest_train_station: string | null
          recommended_transport: string | null
          taxi_distance_km: number | null
          train_distance_km: number | null
          travel_tips: string | null
        }
        Insert: {
          airport_distance_km?: number | null
          bus_distance_km?: number | null
          created_at?: string | null
          id?: number
          image_path?: string | null
          monastery_id: number
          monastery_name: string
          nearest_airport?: string | null
          nearest_bus_stop?: string | null
          nearest_taxi_stand?: string | null
          nearest_train_station?: string | null
          recommended_transport?: string | null
          taxi_distance_km?: number | null
          train_distance_km?: number | null
          travel_tips?: string | null
        }
        Update: {
          airport_distance_km?: number | null
          bus_distance_km?: number | null
          created_at?: string | null
          id?: number
          image_path?: string | null
          monastery_id?: number
          monastery_name?: string
          nearest_airport?: string | null
          nearest_bus_stop?: string | null
          nearest_taxi_stand?: string | null
          nearest_train_station?: string | null
          recommended_transport?: string | null
          taxi_distance_km?: number | null
          train_distance_km?: number | null
          travel_tips?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tours_monastery_id_fkey"
            columns: ["monastery_id"]
            isOneToOne: false
            referencedRelation: "monasteries"
            referencedColumns: ["id"]
          },
        ]
      }
      translations: {
        Row: {
          created_at: string | null
          id: string
          manuscript_id: string | null
          meta: Json | null
          model: string | null
          ocr_id: string | null
          target_language: string | null
          translated_text: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          manuscript_id?: string | null
          meta?: Json | null
          model?: string | null
          ocr_id?: string | null
          target_language?: string | null
          translated_text?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          manuscript_id?: string | null
          meta?: Json | null
          model?: string | null
          ocr_id?: string | null
          target_language?: string | null
          translated_text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "translations_manuscript_id_fkey"
            columns: ["manuscript_id"]
            isOneToOne: false
            referencedRelation: "manuscripts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "translations_ocr_id_fkey"
            columns: ["ocr_id"]
            isOneToOne: false
            referencedRelation: "ocr_results"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          full_name: string
          id: number
          is_active: boolean | null
          last_login: string | null
          password_hash: string
          role: string
          updated_at: string | null
          username: string
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name: string
          id?: number
          is_active?: boolean | null
          last_login?: string | null
          password_hash: string
          role: string
          updated_at?: string | null
          username: string
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string
          id?: number
          is_active?: boolean | null
          last_login?: string | null
          password_hash?: string
          role?: string
          updated_at?: string | null
          username?: string
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
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const