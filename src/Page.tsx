import React, {FC, useState, useEffect} from 'react'
import MemoList from './components/MemoList'
import {Hedder} from './components/Hedder'
import InputForm from './components/InputForm'
import Sidebar from './components/Sidebar'
import { menuContext } from './hooks/menuContext'
import supabase from './supabaseClient'


const Page: FC = () => {
    // //テキストボックスState
    // const [text, setText] = useState<string>("");
    // //メモ一覧State
    // // const [memos, setMemos] = useState<string[]>([]);
    // //メニュー開閉State
    const [isOpend, setOpend] = useState<boolean>(false);
    // //メモリストの追加時刻を格納するState
    // const [time, setTime] = useState<number>(0);

    const [memos, setMemos] = useState<{
        index: number, text: string, time: string
    }[]>([]);



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