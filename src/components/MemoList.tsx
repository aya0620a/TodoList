import { fetchTodoList, deleteTodoItem } from '../utils/supabaseFunctions';
import styled from 'styled-components';

type Memo = {
  index: number;
  time: string;
  text: string;
};

type MemoListProps = {
  memos: Memo[];
  setMemos: React.Dispatch<React.SetStateAction<Memo[]>>;
};

const SButton = styled.button`
    margin-left: 20px;
    padding: 10px;
    background-color: #991010;
    border-radius: 50px;
    border: none;
    color: #fff;
    border: none;
`;

const MemoList: React.FC<MemoListProps> = ({memos, setMemos}) => {

  const onClickDelete = async (index: number) => {
    await deleteTodoItem(index);
    setMemos(memos.filter((memo) => memo.index !== index));
    fetchTodoList();
  }

  return (
    <div className="mt-10 flex justify-center min-h-screen">
      <div className="w-1/2"> 
        <ul>
          {memos.map((memo) => (
            <li key={memo.index} className="border-b-2 border-gray-300 py-2 bg-gray-100">
              <div className="flex justify-between">
                <div>
                  <p className="ml-10 text-xl">・{memo.text}</p>
                  <p className="ml-10 text-xs">{memo.time}</p>
                </div>
                <SButton onClick={() => onClickDelete(memo.index)} className="mr-10 text-xs text-red-500">削除</SButton>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MemoList;