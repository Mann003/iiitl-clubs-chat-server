import React, { useState } from 'react';
import { loginapi, api } from '../../services/api';
import './styles.css'

export default function Login({ history }) {
    const email = getCookie('user');
    const [password, setPassword] = useState('');
    const [room, setRoom] = useState('');
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    function eraseCookie(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    async function handleSubmit(event) {
        event.preventDefault();
        setTimeout(() => {
        }, 1000);
        console.log(email);
        const response = await loginapi.post('/loginchat', {
            email
        });


        if (response.status !== 200) {
            return;
        }

        const { _id } = response.data;
        const { firstname } = response.data;
        const { authorization } = response.headers;

        localStorage.setItem('user_id', _id);
        localStorage.setItem('user_name', firstname);
        localStorage.setItem('authorization', authorization);
        localStorage.setItem('user_email', email);
        console.log(response.data);
        history.push(`/chat?name=${firstname}&room=${room}`)

    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1 className="heading">Login</h1>
                <input
                    placeholder="Room"
                    className="login-input mt-20"
                    type="text"
                    onChange={(event) => setRoom(event.target.value)}
                />
                <button className="button mt-20" type="submit">Join Room</button>
            </form>
        </div>
    )
}
