import React from 'react';

const ModalForm = ({switchModal}) => {
    return (
        <div className='modalform' onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            if(e.target.classList[0] === 'modalform') switchModal(false)
            // switchModal(false)
            console.log()
        }}  >
            <form className='modalform__form'>
                <input className='modalform__input' type="text" placeholder='введите свой email' />
                <input className='modalform__input' type="text" placeholder='введите свой телефон' />
                <button className='modalform__button'>отправить</button>
            </form>
        </div>
    );
};

export default ModalForm;