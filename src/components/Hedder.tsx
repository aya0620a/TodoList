import { FC, useContext } from 'react'
import { menuContext } from '../hooks/menuContext';


export const Hedder: FC = () => {
    const { isOpened, setOpened } = useContext(menuContext);

    const onClickEvent = () => {
        //ボタンを押すとisoendの値が変わる
        setOpened(!isOpened);
    };

    return (
    <div className='flex bg-black h-20 items-end'>
        <button onClick={onClickEvent} className='text-6xl text-white pb-2'>＋</button>
        <h1 className='text-6xl text-white pl-8 pb-2'>TO-DO</h1>
    </div>
    );
};

export default Hedder