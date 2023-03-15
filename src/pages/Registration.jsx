import React from 'react';
import {Link} from 'react-router-dom'
const Registration = () => {
    return (
        <div className='login'>
            <form>
                <h2 className='login__header'>Регистрация</h2>
                <div className="login__wrapper">
                    <input type="text" placeholder='введите свой почтовый адрес' />
                    <input type="password" placeholder='придумайте пароль'/>   
                </div>
                <button className='login__btn'>подтвердить</button>
                <p>Уже есть аккаунт? <Link className='login__linkreg' to ="/login">авторизуйтесь!</Link></p>
                <p>хотите вернуться <Link className='login__linkreg' to ="/">на главную страницу</Link>?</p>
            </form>
        </div>
    );
};

export default Registration;