import React, {FC, useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import scss from './AuthPages.module.scss';

const LoginPage: FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);

    const [emailError, setEmailError] = useState('Email не може бути пустим');
    const [passwordError, setPasswordError] = useState('Password не може бути пустим');

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else setFormValid(true)
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.type.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError(`Email: ${e.target.value} не коректний`)
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 10) {
            setPasswordError('Пароль повинен бути від 3 до 8 символів')
            if (!e.target.value) {
                setPasswordError('Password не може бути пустим')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return (
        <div className={scss.auth}>
            <h2>Вхід</h2>
            <form>
                <label>
                    Email
                    {(emailError && emailDirty) && <div className={scss.auth_error}>{emailError}</div>}
                    <input
                        onChange={e => emailHandler(e)}
                        value={email}
                        className={scss.auth_input}
                        onBlur={e => blurHandler(e)}
                        name={'email'}
                        type="text"
                        placeholder={'Введіть email'}/>
                </label>

                <label>
                    Пароль
                    {(passwordError && passwordDirty) && <div className={scss.auth_error}>{passwordError}</div>}
                    <input
                        onChange={e => passwordHandler(e)}
                        value={password}
                        className={scss.auth_input}
                        onBlur={e => blurHandler(e)}
                        name={'password'}
                        type="password"
                        placeholder={'Введіть пароль'}/>
                </label>
                <Link to={'/'}>
                    <input
                    disabled={!formValid}
                    type="submit"
                    value={'Увійти'}/>
                </Link>
            </form>
            <div className={scss.auth_text}>Немає аккаунту? <Link to={'/register'}>Зареєструватись</Link></div>
        </div>
    );
};

export {LoginPage};