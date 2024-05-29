import React from 'react';
import { FC, ChangeEvent } from 'react'
import styled from 'styled-components'
import supabase, { Database } from '../supabaseClient'

type Memo = {
    index: number;
    text: string;
    time: string;
};

type InputFormProps = {
    memos: Memo[];
    setMemos: React.Dispatch<React.SetStateAction<Memo[]>>;
};


const SButton = styled.button`
    margin-left: 20px;
    padding: 10px;
    background-color: #008080;
    border-radius: 50px;
    border: none;
    color: #fff;
    border: none;
`;

const InputForm: FC<InputFormProps> = (props) => {
    const [inputText, setInputText] = React.useState<string>('');

    //テキストボックス入力時に入力内容をStateに設定
    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length > 20){
            alert('20文字以内で入力してください');
        }
        else{
            setInputText(e.target.value);
        }
    }
    
    //[追加]ボタン押下時
    const onClickAdd = async(event: any) => {
        event.preventDefault();
        // 同じ名前のメモが存在するかチェック
        if (props.memos.some(memo => memo.text === inputText)) {
            alert('同じ名前のタスクが既に存在します');
        } else {
            // 現在の日時を取得
            const currentDateTime = new Date();
            // 年月日時刻の形式に変換
            const formattedDateTime = currentDateTime.getFullYear() + '/'
            + ('0' + (currentDateTime.getMonth()+1)).slice(-2) + '/'
            + ('0' + currentDateTime.getDate()).slice(-2) + ' '
            + ('0' + currentDateTime.getHours()).slice(-2) + ':'
            + ('0' + currentDateTime.getMinutes()).slice(-2) + ':'
            + ('0' + currentDateTime.getSeconds()).slice(-2);

            //メモの追加
            const newMemo: Memo = {
                index: props.memos.length,
                text: inputText,
                time: formattedDateTime,
            };

            //既存のメモに新しいメモを追加
            props.setMemos([...props.memos, newMemo]);
            //テキストボックスを空にする
            setInputText('');

            console.log('newMemo', newMemo);
        }
    }

    return (
    <div className='flex justify-center mt-20 z-30'>
        <input type="text" value={inputText} onChange={onChangeText} placeholder="タスク名" className="border-black border-2 w-80 h-11 text-center"></input>
        <SButton onClick={onClickAdd}>追加</SButton>
    </div>
    )
}

export default InputForm