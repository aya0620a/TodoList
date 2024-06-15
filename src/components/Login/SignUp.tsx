import React, { useState } from 'react';
import supabase from '../../utils/supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const onSignUp = async (e:any) => {
    e.preventDefault();

    if (password !== passwordConf) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) {
        throw signUpError;
      }

      alert('認証メールを送信しました');
      navigate('/SignIn'); // サインアップ後に別のページにリダイレクト
    } catch (error) {
      alert(`エラー`);
    }
  };

  return (
    <div className='flex justify-end pt-10'>
        <button 
            onClick={() => setModalOpen(true)} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            新規登録
        </button>

      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded md:w-1/4 md:h-86">
            <h1 className="text-2xl font-semibold text-center">新規登録</h1>
            <form onSubmit={onSignUp} className='flex flex-col'>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                required 
              />
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <input
                type="password"
                value={passwordConf}
                onChange={e => setPasswordConf(e.target.value)}
                placeholder="Confirm Password"
                required
              />
              <button type="submit" className=' hover:bg-red-700 font-bold py-2 px-4 rounded mt-4 ml-4'>認証メールを送信</button>
            </form>
            <button onClick={() => setModalOpen(false)}>閉じる</button>
          </div>
        </div>
      )}
    </div>
  );
}