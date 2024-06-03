import  supabase  from './supabaseClient';

type Memo = {
    index: number;
    time: string;
    text: string;
};

export const fetchTodoList = async () => {
    let { data: todo_items, error } = await supabase.from('todo_items').select('*').order('index', {ascending: true});
    if (error) {
        console.log('error', error)
    }
    console.log('todo_items', todo_items)
    return todo_items as Memo[];
};

export const addTodoItem = async (memo: Memo) => {
    await supabase.from('todo_items').insert(memo);
};

export const deleteTodoItem = async (index: number) => {
    await supabase.from('todo_items').delete().eq('index', index);
};

export const checkTodoItem = async (index: number, time: string, text: string) => {
    await supabase.from('todo_items').update({time: time, text: text}).eq('id', index);
};