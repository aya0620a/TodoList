import React, { useCallback } from 'react'
import supabase from '../../utils/supabaseClient';
import { useNavigate } from 'react-router-dom';


const Signout = (props: any) => {
    const navgate = useNavigate();

    const onCiickSignout = useCallback(async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) {
                throw error;
            }
            alert('ログアウトしました');
            navgate('/');
        } catch {
            alert('エラーが発生しました');
        }
    }, [navgate]);


    return (
        <div className={props.open ? 'text-white' : 'pr-20'}>
            <button onClick = {onCiickSignout}>ログアウト</button>
        </div>
    )
}

export default Signout