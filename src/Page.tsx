import React, {FC, useState, useEffect} from 'react'
import MemoList from './components/Memo/MemoList'
import {Hedder} from './components/Header/Hedder'
import InputForm from './components/Memo/InputForm'
import Sidebar from './components/Sidebar'
import { menuContext } from './hooks/menuContext'
import { fetchTodoList } from './utils/supabaseFunctions'

type Memo = {
    index: number;
    time: string;
    text: string;
    username: string; //[追加]ユーザ名をStateに設定
};

type Session = {
    userId: string;
    email: string;
    name: string;
    iat: number;
    exp: number;
}

const Page: FC = () => {

    const [isOpend, setOpend] = useState<boolean>(false);
    const [memos, setMemos] = useState<Memo[]>([]);
    const [session, setSession] = useState<Session | null>(null);   
    const [username, setUsername] = useState<string>(''); //[追加]ユーザ名をStateに設定

    //ローカルストレージからメールアドレスを取得
    useEffect(() => {
        const email = localStorage.getItem('email');
        if(email){
            setUsername(email);
            console.log('email', email);
            //emailに一致したメモを取得
            fetchTodoList(email);

            //memosに設定
            fetchTodoList(email).then((data) => {
                setMemos(data);
            });
        }
    }
    ,[]);



    return (
        <div className='flex flex-col bg-custom-image'>
            <menuContext.Provider value={{ isOpened: isOpend, setOpened: setOpend }}>
                <div className="md:w-full">
                    <Hedder />
                </div>
                <div className='md:w-full flex flex-row pr-60' >
                    <div className='md:w-1/4 h-screen'>
                        <Sidebar open={isOpend} setSession={setSession} />
                    </div>
                    <div className='md:w-3/4 pt-20'>
                        <h1 className='md:text-center md:text-3xl'>{username}さん</h1>
                        <InputForm memos={memos} setMemos={setMemos} username={username}/>
                        <MemoList memos={memos} setMemos={setMemos} username={username}/>
                    </div>
                </div>
            </menuContext.Provider>
        </div>
    )
}

export default Page