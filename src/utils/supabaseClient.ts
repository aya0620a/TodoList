import { createClient } from "@supabase/supabase-js";

type Database = {
    todo_items: {
        id: number;
        time: string;
        text: string;
    }[];
};

const supabaseUrl = 'https://kvzrylenqnymoikazepo.supabase.co';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY!;

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export default supabase;