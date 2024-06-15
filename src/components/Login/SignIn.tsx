import supabase from "../../utils/supabaseClient";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignUp from "./SignUp";

//ログイン画面のスタイル
const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    font-family: 'Noto Sans JP', sans-serif;
`;


export default function SignIn() {
    const navgate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const onLogin = async (e:any) => {
        e.preventDefault();
        try {
            const { error: signInError } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })
            if (signInError) {
                throw signInError;
            }
            alert('ログインしました');
            //ローカルストレージのemailの初期化
            localStorage.removeItem('email');
            //emailの値を保持しておく
            localStorage.setItem('email', email);
            navgate('/Page');
        } catch {
            alert('エラーが発生しました');
        }
    }

    return (
            <LoginContainer>
            <div className="p-4 bg-white rounded shadow-md w-auto h-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">ログイン</h2>
                <form onSubmit={onLogin} className="space-y-3">
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded" />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full px-3 py-2 border border-gray-300 rounded" />
                    <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">ログイン</button>
                </form>

                <SignUp/>
            </div>
            </LoginContainer>
    )
}