import React, {FC, useState, useEffect} from 'react'
import MemoList from './components/MemoList'
import {Hedder} from './components/Hedder'
import InputForm from './components/InputForm'
import Sidebar from './components/Sidebar'
import { menuContext } from './hooks/menuContext'
import {fetchTodoList, checkTodoItem} from './utils/supabaseFunctions'

type Memo = {
    index: number;
    time: string;
    text: string;
};

const Page: FC = () => {

    const [isOpend, setOpend] = useState<boolean>(false);
    const [memos, setMemos] = useState<Memo[]>([]);

    return (
    <div className='flex'>
        <menuContext.Provider value={{ isOpened: isOpend, setOpened: setOpend }}>
            <div className="fixed w-full z-40">
                <Hedder />
            </div>
                <div className='fixed w-full z-30'>
                    <Sidebar open={isOpend}/>
                </div>
                <div className='flex-1 bg-custom-image pt-20 z-20'>
                    <InputForm memos={memos} setMemos={setMemos}/>
                    <MemoList memos={memos} setMemos={setMemos} />
                </div>
        </menuContext.Provider>
    </div>
    )
}

export default Page