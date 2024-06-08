import React from 'react';
import { FC, useEffect, ChangeEvent } from 'react'
import styled from 'styled-components'
import { getMaxIndex, addTodoItem, checkTodoItem } from '../../utils/supabaseFunctions'

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

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px;
    margin-top: 10%;
    padding-top: 1%;
    padding-bottom: 1%;
    z-index: 30;
`;

const SButton = styled.button`
    width: 10%;
    height: 70%;
    margin-left: 3%;
    margin-top: 2%;
    background-color: #008080;
    border-radius: 50px;
    color: #fff;
`;


const InputForm: FC<InputFormProps> = (props) => {
    const [inputText, setInputText] = React.useState<string>('');

    //DBにメモを追加
    const addTodo = async (memo: Memo) => {
        if (!memo) return;
        await addTodoItem(memo);
        };

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
            
            //データベース上のindexの最大値を取得
            const maxIndex = await getMaxIndex();
            console.log("maxIndex", maxIndex);
            
            //メモの追加
            const newMemo: Memo = {
                index: maxIndex + 1,
                text: inputText,
                time: formattedDateTime,
                username: props.username
            };

            console.log("newmemo", newMemo);

            //既存のメモに新しいメモを追加
            props.setMemos([...props.memos, newMemo]);
            //DBにメモを追加
            addTodo(newMemo);

            //テキストボックスを空にする
            setInputText('');

        }
    }

    return (
    <div>
        <InputContainer>
            <input type="text" value={inputText} onChange={onChangeText} placeholder="タスク名" className=
            "border-black border-2 md:w-5/6  md:text-5xl text-center"
            ></input>
            <SButton onClick={onClickAdd}>追加</SButton>
        </InputContainer>
    </div>
    )
}

export default InputForm