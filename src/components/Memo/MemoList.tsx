import { fetchTodoList, deleteTodoItem } from '../../utils/supabaseFunctions';
import styled from 'styled-components';

type Memo = {
  index: number;
  time: string;
  text: string;
  username: string;
};

type MemoListProps = {
  memos: Memo[];
  username: string;
  setMemos: React.Dispatch<React.SetStateAction<Memo[]>>;
};

const MemoContainer = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    margin-top: 10%;
    padding-top: 1%;
    padding-bottom: 1%;
    z-index: 30;
`;

const SButton = styled.button`
    margin-left: 20px;
    padding: 10px;
    background-color: #991010;
    border-radius: 50px;
    border: none;
    color: #fff;
    border: none;
`;

const MemoList: React.FC<MemoListProps> = ({memos, setMemos, username}) => {

  const onClickDelete = async (index: number) => {
    await deleteTodoItem(index);
    setMemos(memos.filter((memo) => memo.index !== index));
    fetchTodoList(username);
  }

  return (
      <MemoContainer>
        <ul className='w-full'>
          {memos && memos.map((memo) => (
            <li key={memo.index} className="mad:h-20 border-b-2 border-gray-300  bg-gray-200">
              <div className="flex p-2 justify-between">
                <div className='flex'>
                  <div className="ml-10 md:text-5xl">・{memo.text}</div>
                  <div className="ml-10 mt-3 md:text-3xl text-right">{memo.time}</div>
                </div>
                <SButton onClick={() => onClickDelete(memo.index)} className="mr-10 text-xs place-item-center text-red-500">削除</SButton>
              </div>
            </li>
          ))}
        </ul>
      </MemoContainer>
  );
};

export default MemoList;