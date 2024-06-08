import { createClient, SupabaseClient } from "@supabase/supabase-js";

type Database = {
    todo_items: {
        id: number;
        time: string;
        text: string;
        user_name: string;
    }[];
};

const supabaseUrl = 'https://kvzrylenqnymoikazepo.supabase.co';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY!;

const supabase: SupabaseClient<any, "public", any> = createClient(
    supabaseUrl,
    supabaseAnonKey
)



export default supabase;