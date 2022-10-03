import React, {FC, useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import scss from './AuthPages.module.scss';

const RegisterPage: FC = () => {

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [firstNameDirty, setFirstNameDirty] = useState(false);
    const [secondNameDirty, setSecondNameDirty] = useState(false);

    const [emailError, setEmailError] = useState('Email не може бути пустим');
    const [passwordError, setPasswordError] = useState('Password не може бути пустим');
    const [firstNameError, setFirstNameError] = useState('');
    const [secondNameError, setSecondNameError] = useState('');

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError || firstNameError || secondNameError) {
            setFormValid(false)
        } else setFormValid(true)
    }, [emailError, passwordError, firstNameError, secondNameError])

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
            case 'firstName':
                setFirstNameDirty(true)
                break
            case 'secondName':
                setSecondNameDirty(true)
                break
        }
    }

    const firstNameHandler = (e) => {
        setFirstName(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 10) {
            setFirstNameError('Ім\'я повинно бути від 3 до 8 символів')
            if (!e.target.value) {
                setFirstNameError('Ім\'я не може бути пустим')
            }
        } else {
            setFirstNameError('')
        }
    }

    const secondNameHandler = (e) => {
        setSecondName(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 10) {
            setSecondNameError('Прізвище повинно бути від 3 до 8 символів')
            if (!e.target.value) {
                setSecondNameError('Прізвище не може бути пустим')
            }
        } else {
            setSecondNameError('')
        }
    }

    return (
        <div className={scss.auth}>
            <h2>Реєстрація</h2>
            <form>

                <div className={scss.auth_topInputs}>
                    <label className={scss.auth_label}>
                        Ім'я
                        {(firstNameError && firstNameDirty) && <div className={scss.auth_error}>{firstNameError}</div>}
                        <input
                            value={firstName}
                            onChange={e => firstNameHandler(e)}
                            onBlur={e => blurHandler(e)}
                            name={'firstName'}
                            className={scss.auth_input}
                            type="text"
                            placeholder={'Ім\'я'}/>
                    </label>

                    <label className={scss.auth_label}>
                        Прізвище
                        {(secondNameError && secondNameDirty) && <div className={scss.auth_error}>{secondNameError}</div>}
                        <input
                            value={secondName}
                            onChange={e => secondNameHandler(e)}
                            onBlur={e => blurHandler(e)}
                            name={'secondName'}
                            className={scss.auth_input}
                            type="text"
                            placeholder={'Прізвище'}/>
                    </label>
                </div>

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
                        value={'Зареєструватись'}/>
                </Link>
            </form>
            <div className={scss.auth_text}>Вже є аккаунт? <Link to={'/login'}>Увійти</Link></div>
        </div>
    );
};

export {RegisterPage};