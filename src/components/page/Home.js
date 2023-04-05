import React from 'react';

const Home = () => {
    return (
        <div id="home">
            <div className="container">
                <div className="home">
                    <h1>Фильмы, сериалы и многое другое без <br/> ограничений.</h1>
                    <p>Смотрите где угодно. Отменить подписку можно в любое время.</p>
                    <p>Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить <br/> подписку.</p>
                    <div className="home--title">
                        <input type="email" placeholder="Адрес электроной почты"/>
                        <button>Начать смотреть></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;