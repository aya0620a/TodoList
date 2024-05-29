import React from 'react';
import { FC, ChangeEvent, useEffect } from 'react'
import styled from 'styled-components'
import supabase, { Database } from '../supabaseClient'


type InputFormProps = {
    text: string;
    memos: string[];
    time: number;
    setText: React.Dispatch<React.SetStateAction<string>>;
    setMemos: React.Dispatch<React.SetStateAction<string[]>>;
    setTime: React.Dispatch<React.SetStateAction<number>>;
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

        //テキストボックス入力時に入力内容をStateに設定
        const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
            if(e.target.value.length > 20){
                alert('20文字以内で入力してください');
            }
            else{
                props.setText(e.target.value);
            }
        }
        
        //[追加]ボタン押下時
        const onClickAdd = async(event: any) => {
            event.preventDefault();
            // 同じ名前のメモが存在するかチェック
            if (props.memos.includes(props.text)) {
                alert('同じ名前のタスクが既に存在します');
            } else {
                // 既存のメモ一覧に新しいメモを追加
                props.setMemos([...props.memos, props.text]);
                // テキストボックスをクリア
                props.setText('');
            }


            
            
            await supabase.from('memos').insert([{text: props.text}]);

        }

    return (
    <div className='flex justify-center mt-20 z-30'>
        <input type="text" value={props.text} onChange={onChangeText} placeholder="タスク名" className="border-black border-2 w-80 h-11 text-center"></input>
        <SButton onClick={onClickAdd}>追加</SButton>
    </div>
    )
}

export default InputForm