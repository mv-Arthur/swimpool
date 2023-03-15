import React from 'react';
import {Link} from 'react-router-dom'
const Login = () => {
    return (
        <div className='login'>
            <form>
                <h2 className='login__header'>Авторизация</h2>
                <div className="login__wrapper">
                    <input type="text" placeholder='введите логин' />
                    <input type="password" placeholder='введите пароль'/>   
                </div>
                <button className='login__btn'>подтвердить</button>
                <p>Нет аккаунта? <Link className='login__linkreg' to ="/registration">создайте его!</Link></p>
                <p>хотите вернуться <Link className='login__linkreg' to ="/">назад</Link>?</p>
            </form>
        </div>
    );
};

export default Login;