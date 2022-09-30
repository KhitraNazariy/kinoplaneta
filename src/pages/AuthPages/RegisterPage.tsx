import React, {FC} from 'react';
import {Link} from "react-router-dom";

import scss from './AuthPages.module.scss';

const RegisterPage: FC = () => {
    return (
        <div className={scss.auth}>
            <h2>Реєстрація</h2>
            <form>

                <div className={scss.auth_topInputs}>
                    <label className={scss.auth_label}>
                        Ім'я
                        <input className={scss.auth_input} type="text" placeholder={'Ім\'я'}/>
                    </label>

                    <label className={scss.auth_label}>
                        Прізвище
                        <input className={scss.auth_input} type="text" placeholder={'Прізвище'}/>
                    </label>
                </div>

                <label>
                    Email
                    <input className={scss.auth_input} type="text" placeholder={'Введіть email'}/>
                </label>

                <label>
                    Пароль
                    <input className={scss.auth_input} type="password" placeholder={'Введіть пароль'}/>
                </label>
                <Link to={'/'}><input type="submit" value={'Зареєструватись'}/></Link>
            </form>
            <div className={scss.auth_text}>Вже є аккаунт? <Link to={'/login'}>Увійти</Link></div>
        </div>
    );
};

export {RegisterPage};