import React, {FC} from 'react';
import {Link} from "react-router-dom";

import scss from './AuthPages.module.scss';

const LoginPage: FC = () => {
    return (
        <div className={scss.auth}>
            <h2>Вхід</h2>
            <form>
                <label>
                    Email
                    <input className={scss.auth_input} type="text" placeholder={'Введіть email'}/>
                </label>

                <label>
                    Пароль
                    <input className={scss.auth_input} type="password" placeholder={'Введіть пароль'}/>
                </label>
                <Link to={'/'}><input type="submit" value={'Увійти'}/></Link>
            </form>
            <div className={scss.auth_text}>Немає аккаунту? <Link to={'/register'}>Зареєструватись</Link></div>
        </div>
    );
};

export {LoginPage};