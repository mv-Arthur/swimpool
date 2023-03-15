import React, { useState } from "react";
import logo from "../img/logo.svg";
import sliderPhoto1 from "../img/slider__photo1.jpg";
import promoImg from "../img/promo_img.jpg";
import Slider from "../components/Slider";
import trener1 from "../img/trener1.jpg";
import trener2 from "../img/trener2.jpeg";
import trener3 from "../img/trener3.jpeg";
import rules from "../img/rules.jpeg";
import review_photo1 from "../img/review_photo1.jpeg";
import facebook from "../icons/icons8-facebook.svg";
import instagram from "../icons/icons8-instagram.svg";
import telegram from "../icons/icons8-telegram-app.svg"
import ModalForm from "../components/ModalForm";
import { Link } from "react-router-dom";

const Landing = () => {
  const [modalVisible,setModalVisible] = useState(false);
  const switchModal = (switcher) => {
    setModalVisible(switcher)
  }
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__logo-wrapper">
              <img src={logo} alt="logo" className="header__logo" />
              <span className="header__logo-description">RitmStyle</span>
            </div>
            <div className="header__info-wrapper">
              <span className="header__info-item">Главная</span>
              <span className="header__info-item">Расписание</span>
              <span className="header__info-item">Отзывы</span>
              <span className="header__info-item">Контакты</span>
              <span className="header__info-item">Услуги</span>
              <span className="header__info-item">О нас</span>
              <span className="header__info-item">Тренеры</span>
            </div>
            <Link to = {'/login'} className="header__button">Записаться на сеанс</Link>
          </div>
        </div>
      </header>
      <section className="promo">
        <div className="container">
          <div className="promo__container">
            <h2 className="promo__subheader">Укрепление здоровья</h2>
            <h1 className="promo__header">Бассейн RitmStyle</h1>
          </div>
        </div>
      </section>
      <section className="carousel">
        <div className="container">
          <h2 className="carousel__header">О нас</h2>
          <Slider>
            <div>
              <img
                className="slider__img"
                src={sliderPhoto1}
                alt="sliderPhoto1"
              />
              <p className="slider__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                sequi vero facilis!1
              </p>
            </div>
            <div>
              <img
                className="slider__img"
                src={sliderPhoto1}
                alt="sliderPhoto2"
              />
              <p className="slider__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                sequi vero facilis!2
              </p>
            </div>
            <div>
              <img className="slider__img " src={promoImg} alt="sliderPhoto3" />
              <p className="slider__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                sequi vero facilis!3
              </p>
            </div>
            <div>
              <img
                className="slider__img"
                src={sliderPhoto1}
                alt="sliderPhoto4"
              />
              <p className="slider__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                sequi vero facilis!4
              </p>
            </div>
            <div>
              <img
                className="slider__img"
                src={sliderPhoto1}
                alt="sliderPhoto5"
              />
              <p className="slider__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                sequi vero facilis!5
              </p>
            </div>
          </Slider>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2 className="about__header">Об RitmStyle</h2>
          <div className="about__container">
            <div className="about__column-right">
              <div className="about__item-text-left">
                <h2 className="about__item-header">RitmStyle</h2>
                <p className="about__item-p">
                  Дворец водных видов спорта построен на месте легендарного
                  бассейна «Лужники», который посещали несколько поколений
                  москвичей. Бассейн открылся в 1956 году и почти за 60 лет
                  принял большое количество различных соревнований, в том числе
                  Олимпиаду-80.
                </p>
              </div>
              <div className="about__item-img">
                <img src={sliderPhoto1} alt="ss" />
              </div>
            </div>
            <div className="about__column-left">
              <div className="about__item-text-right">
                <h2 className="about__item-header">RitmStyle</h2>
                <p className="about__item-p">
                  Дворец водных видов спорта предлагает своим гостям окунуться в
                  разнообразный и захватывающий мир водных развлечений и спорта!
                  Имеются три плавательных бассейна. Четыре
                  оздоровительно-развлекательных зоны для детей. Пять зон отдыха
                  с шезлонгами
                </p>
              </div>
              <div className="about__item-img">
                <img src={sliderPhoto1} alt="ss" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="servises">
        <div className="container">
          <h2 className="servises__header">Услуги</h2>
          <div className="servises__wrapper">
            <div className="left__column">
              <div className="servises__first">
                <h2 className="servises__subheader">
                  Разовое посещение бассейна
                </h2>
                <ul className="servises__list">
                  <li className="servises__list-item">
                    стандарт: <span className="servises__price">300руб</span>
                  </li>
                  <li className="servises__list-item">
                    Семья: <span className="servises__price">500руб</span>
                  </li>
                  <li className="servises__list-item">
                    Детский: <span className="servises__price">200руб</span>
                  </li>
                  <li className="servises__list-item">
                    Выходной и праздничный день:{" "}
                    <span className="servises__price">200руб</span>
                  </li>
                </ul>
              </div>
              <div className="servises__second">
                <h2 className="servises__subheader">Абонементы</h2>
                <ul className="servises__list">
                  <li className="servises__list-item">
                    Мотивация - 3 месяца:{" "}
                    <span className="servises__price">6100руб</span>
                  </li>
                  <li className="servises__list-item">
                    Энергия - 6 месяцев:{" "}
                    <span className="servises__price">11700руб</span>
                  </li>
                  <li className="servises__list-item">
                    Победа - 12 месяцев:{" "}
                    <span className="servises__price">21100руб</span>
                  </li>
                  <li className="servises__list-item">
                    Комфорт - 8 посещений за один месяц:{" "}
                    <span className="servises__price">2000руб</span>
                  </li>
                  <li className="servises__list-item">
                    Баланс - 12 посещений за один месяц:{" "}
                    <span className="servises__price">1450руб</span>
                  </li>
                  <li className="servises__list-item">
                    Актив - 16 посещений за один месяц:{" "}
                    <span className="servises__price">2300руб</span>
                  </li>
                  <li className="servises__list-item">
                    Марафн - безлимит посещений за один месяц:{" "}
                    <span className="servises__price">3700руб</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right__column">
              <div className="servises__third">
                <h2 className="servises__subheader">Группы с тренером</h2>
                <ul className="servises__list">
                  <li className="servises__list-item">
                    Треннинг {"(группа с тренером)"} - 1 посещение:{" "}
                    <span className="servises__price">450руб</span>
                  </li>
                  <li className="servises__list-item">
                    Треннинг кидс {"(группа с тренером)"} - 1 посещение:{" "}
                    <span className="servises__price">350руб</span>
                  </li>
                </ul>
              </div>
              <div className="servises__fourth">
                <h2 className="servises__subheader">
                  Персональное занятие с тренером
                </h2>
                <ul className="servises__list">
                  <li className="servises__list-item">
                    1 человек: <span className="servises__price">800руб</span>
                  </li>
                  <li className="servises__list-item">
                    группа из двух человек:{" "}
                    <span className="servises__price">650руб</span> с человека
                  </li>
                  <li className="servises__list-item">
                    группа из трех человек :{" "}
                    <span className="servises__price">500руб</span> с человека
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="treners">
        <div className="container">
          <h2 className="treners__header">Тренерский состав</h2>
          <div className="treners__wrapper">
            <div className="trener__info-wrap">
              <h2 className="treners__info">Иванов</h2>
              <h2 className="treners__info">Валерий</h2>
              <h2 className="treners__info">84325728301</h2>
              <h2 className="treners__info">
                Высшая квалификационная категория
              </h2>
            </div>
            <img className="treners__photo" src={trener1} alt="photos" />
          </div>
          <div className="treners__wrapper">
            <div className="trener__info-wrap">
              <h2 className="treners__info">Исхакова</h2>
              <h2 className="treners__info">Виктория</h2>
              <h2 className="treners__info">89600438421</h2>
              <h2 className="treners__info">
                Первая квалификационная категория
              </h2>
            </div>
            <img className="treners__photo" src={trener2} alt="photos" />
          </div>
          <div className="treners__wrapper">
            <div className="trener__info-wrap">
              <h2 className="treners__info">Захарова</h2>
              <h2 className="treners__info">Анна</h2>
              <h2 className="treners__info">89600213421</h2>
              <h2 className="treners__info">
                Вторая квалификационная категория
              </h2>
            </div>
            <img className="treners__photo" src={trener3} alt="photos" />
          </div>
        </div>
      </section>

      <section className="schedule">
        <div className="container">
          <h2 className="schedule__header">Расписание</h2>
          <div className="schedule__times">
            <span className="schedule__wrap">
              <div className="schedule__time">6:15-7:00</div>
              <h2 className="schedule__description">Новый формат сеансов</h2>
            </span>
            <span className="schedule__wrap">
              <div className="schedule__time">6:15-7:00</div>
              <h2 className="schedule__description">Новый формат сеансов</h2>
            </span>
            <span className="schedule__wrap">
              <div className="schedule__time">6:15-7:00</div>
              <h2 className="schedule__description">Новый формат сеансов</h2>
            </span>
            <span className="schedule__wrap">
              <div className="schedule__time">6:15-7:00</div>
              <h2 className="schedule__description">Новый формат сеансов</h2>
            </span>
            <span className="schedule__wrap">
              <div className="schedule__time">6:15-7:00</div>
              <h2 className="schedule__description">Новый формат сеансов</h2>
            </span>
            <span className="schedule__wrap">
              <div className="schedule__time">6:15-7:00</div>
              <h2 className="schedule__description">Новый формат сеансов</h2>
            </span>
          </div>
        </div>
      </section>
      <img src={rules} alt="" style={{marginBottom:'100px'}} />

      <section style = {{paddingBottom:100+'px'}} className="reviews">
        <div className="container">
            <h2 className="reviews__header">Отзывы</h2>
            <div className="reviews__review">
                <img className="reviews__photo" src={review_photo1} alt="" />
                <p className="reviews__date">19.06.22</p>
                <p className="reviews__text">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="reviews__review">
                <img className="reviews__photo" src={review_photo1} alt="" />
                <p className="reviews__date">19.06.22</p>
                <p className="reviews__text">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="reviews__review">
                <img className="reviews__photo" src={review_photo1} alt="" />
                <p className="reviews__date">19.06.22</p>
                <p className="reviews__text">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="reviews__review">
                <img className="reviews__photo" src={review_photo1} alt="" />
                <p className="reviews__date">19.06.22</p>
                <p className="reviews__text">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
        <hr style={{marginBottom:30}} />
          <div className="footer__wrapper">
            
            <div className="footer__social">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={telegram} alt="" />
            </div>
            <div className="footer__btn-wrap">
              <h4 className="footer__subheader">Остались какие то вопросы?</h4>
              <button className="footer__btn" onClick={() => setModalVisible(true)}>оставтье свои данные</button>
            </div>
          </div>
        </div>
        {modalVisible && <ModalForm switchModal={switchModal}></ModalForm>}
      </footer>
    </>
  );
};

export default Landing;
