import React, { useState } from 'react';
import supabase from '../../utils/supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
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
    <div>
      <form onSubmit={onSignUp}>
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
        <button type="submit">認証メールを送信</button>
      </form>
    </div>
  );
}
