import React from 'react'

const Signout = () => {

    const onCiickSignout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('session');
        window.location.reload();
    }

    return (
        <div>
            <button onClick = {onCiickSignout}>ログアウト</button>
        </div>
    )
}

export default Signout