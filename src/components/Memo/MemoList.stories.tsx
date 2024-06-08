import MemoList from "./MemoList";

export default {
  title: "MemoList",
};

type Memo = {
    index: number;
    time: string;
    text: string;
    username: string;
};

const memos: Memo[] = [
    {index: 0, time: '2003/08/27', text: 'サンプルタスク', username: 'test'}
];

const setMemos: React.Dispatch<React.SetStateAction<Memo[]>> = (memos) => {
    memos = memos;
}


export const Memo = () => <MemoList memos={memos} setMemos={setMemos} username="test"/>;