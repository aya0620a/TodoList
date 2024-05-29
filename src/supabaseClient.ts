import { createClient } from "@supabase/supabase-js";

export type Database = {
    //memosというテーブルを持つ
    memos: {
        id: number;
        text: string;
    }[];
};

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL!;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY!;

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export default supabase;