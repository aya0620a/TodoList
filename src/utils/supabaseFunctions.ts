import  supabase  from './supabaseClient';

type Memo = {
    index: number;
    time: string;
    text: string;
    username: string;
};

//ユーザ名と一致するメモを取得
export const fetchTodoList = async (username: string) => {
    let { data: todo_items, error } = await supabase
    .from('todo_items')
    .select('*')
    .eq('username', username)
    .order('index', {ascending: true});

    // レコードが存在しない場合のみ、新しいレコードを追加
    if(!todo_items || todo_items.length === 0){
        await addTodoItem({index: 0, time: '', text: 'サンプルタスク', username: username});
        todo_items = (await supabase.from('todo_items').select('*').eq('username', username).order('index', {ascending: true})).data;
    }

    if (error) {
        console.log('error', error)
    }
    console.log('todo_items', todo_items)
    return todo_items as Memo[];
};

//メモリストのindexを取得
export const getMaxIndex = async () => {
    let { data: todo_items, error } = await supabase
    .from('todo_items')
    .select('index')
    .order('index', {ascending: false})
    .limit(1);

    if (error) {
        console.log('error', error)
    }
    return todo_items![0].index;
}

export const addTodoItem = async (memo: Memo) => {
    await supabase.from('todo_items').insert(memo);
};

export const deleteTodoItem = async (index: number) => {
    await supabase.from('todo_items').delete().eq('index', index);
};

export const checkTodoItem = async (index: number, time: string, text: string) => {
    await supabase.from('todo_items').update({time: time, text: text}).eq('id', index);
};