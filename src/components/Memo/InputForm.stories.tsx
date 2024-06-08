import InputForm from "./InputForm";

type Memo = {
    index: number;
    text: string;
    time: string;
    username: string;
};

type InputFormProps = {
    memos: Memo[];
    username: string;
    setMemos: React.Dispatch<React.SetStateAction<Memo[]>>;
};

export default {
    title: 'InputForm',
    component: InputForm,
};

const memos: Memo[] = [
    {index: 0, text: 'サンプルタスク', time: '', username: 'testuser'}
];

const username = 'testuser';

const setMemos: React.Dispatch<React.SetStateAction<Memo[]>> = (memos) => {
    memos = memos;
}


export const Input = () => <InputForm memos={memos} username={username} setMemos={setMemos}/>;