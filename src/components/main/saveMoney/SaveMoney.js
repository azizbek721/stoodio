import React from 'react';
import "./SaveMoney.scss"
import saveMoney from "../../../assets/videos/save-money-bg.mp4";
import useWindowSize from "../../../hooks/useWindowSize";
import axios from "axios";

const SaveMoney = () => {

    const {width} = useWindowSize();

    const contactRequest = async (e) => {
        e.preventDefault();

        // Получите значения полей формы
        const formData = new FormData(e.target);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            // Замените 'YOUR_BOT_TOKEN' на токен вашего Telegram бота
            const botToken = '6688278368:AAG0y_qd1MUgpLEgbhZkrhal_g4NtM-O0Ng';

            // Замените 'YOUR_CHAT_ID' на ваш Chat ID в Telegram
            const chatId = '-1001989077530';

            // Создайте текстовое сообщение, которое вы хотите отправить
            const message = `
       Имя: ${data.Имя}
      
Телефон: ${data.Телефон}
      
Город: ${data.Город ? data.Город : "не указано"}
      
Услуги: ${data.Услуги ? data.Услуги : "не указано"}
      
Задача: ${data.Задача ? data.Задача : "не указано"}
    `;

            // Отправьте сообщение боту
            await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                chat_id: chatId,
                text: message,
            });

            // Сбросьте состояние формы
            e.target.reset();

            // Закройте модальное окно после успешной отправки
        } catch (error) {
            console.error('Ошибка отправки сообщения:', error);
        }
    };

    return (
        <div className="save-money-container">
            <video className="save-money-background" src={saveMoney} autoPlay muted loop playsInline/>
            {width > 959 ? (
                <div className="container mx-auto">
                    <div className="save-money flex justify-between">
                        <div className="save-money-left flex flex-col justify-between">
                            <div>
                                <h3>мы знаем как сэкономить на проектировании и строительстве до</h3>
                                <h1>30%</h1>
                            </div>
                            <p>Напишите нам и мы расскажем как это работает на примере реальных кейсов</p>
                        </div>
                        <div className="save-money-right flex flex-col justify-between">
                            <form onSubmit={contactRequest}>
                                <div className="form-group">
                                    <label htmlFor="name">как к вам обращаться</label>
                                    <input type="text" id="name" name="Имя"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phoneNumber">номер телефона</label>
                                    <input type="tel" id="phoneNumber" name="Телефон"/>
                                </div>
                                {/*<div className="radio-group">*/}
                                {/*    <label className="radio-title">куда вам написать</label>*/}
                                {/*    <div>*/}
                                {/*        <label className="flex gap-x-2 items-center">*/}
                                {/*            <input type="radio" name="contactMethod" value="telegram"/>*/}
                                {/*            в телеграм*/}
                                {/*        </label>*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <label className="flex gap-x-2 mt-2 items-center">*/}
                                {/*            <input type="radio" name="contactMethod" value="whatsapp"/>*/}
                                {/*            в вотсап*/}
                                {/*        </label>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <button type="submit">отправить</button>
                            </form>
                            <p>
                                нажимая на кнопку отправить, вы даете согласие на обработку ваших персональных данных
                            </p>
                        </div>
                    </div>
                </div>
            ) : width > 639 ? (
                <div className="container mx-auto">
                    <div className="save-money flex flex-col justify-between">
                        <div className="save-money-left flex flex-col justify-between">
                            <div>
                                <h3>мы знаем как сэкономить на проектировании и строительстве до</h3>
                                <h1>30%</h1>
                            </div>
                        </div>
                        <div className="save-money-tablet mt-16 flex justify-between">
                            <p className="save-money-tablet-title">Напишите нам и мы расскажем как это работает на примере реальных кейсов</p>
                            <div className="save-money-right flex flex-col justify-between">
                                <form onSubmit={contactRequest}>
                                    <div className="form-group">
                                        <label htmlFor="name">как к вам обращаться</label>
                                        <input type="text" id="name" name="name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phoneNumber">номер телефона</label>
                                        <input type="tel" id="phoneNumber" name="phoneNumber"/>
                                    </div>
                                    {/*<div className="radio-group">*/}
                                    {/*    <label className="radio-title">куда вам написать</label>*/}
                                    {/*    <div>*/}
                                    {/*        <label className="flex gap-x-2 items-center">*/}
                                    {/*            <input type="radio" name="contactMethod" value="telegram"/>*/}
                                    {/*            в телеграм*/}
                                    {/*        </label>*/}
                                    {/*    </div>*/}
                                    {/*    <div>*/}
                                    {/*        <label className="flex gap-x-2 mt-2 items-center">*/}
                                    {/*            <input type="radio" name="contactMethod" value="whatsapp"/>*/}
                                    {/*            в вотсап*/}
                                    {/*        </label>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    <button type="submit">отправить</button>
                                </form>
                                <p>
                                    нажимая на кнопку отправить, вы даете согласие на обработку ваших персональных
                                    данных
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container mx-auto">
                    <div className="save-money flex flex-col justify-center">
                        <div className="save-money-left flex flex-col justify-between">
                            <div>
                                <h3>мы знаем как сэкономить на проектировании и строительстве до</h3>
                                <h1>30%</h1>
                                <p className="mt-8">Напишите нам и мы расскажем как это работает на примере реальных кейсов</p>
                            </div>
                        </div>
                        <div className="save-money-right mt-16 flex flex-col justify-between">
                            <form onSubmit={contactRequest}>
                                <div className="form-group">
                                    <label htmlFor="name">как к вам обращаться</label>
                                    <input type="text" id="name" name="name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phoneNumber">номер телефона</label>
                                    <input type="tel" id="phoneNumber" name="phoneNumber"/>
                                </div>
                                {/*<div className="radio-group">*/}
                                {/*    <label className="radio-title">куда вам написать</label>*/}
                                {/*    <div>*/}
                                {/*        <label className="flex gap-x-2 items-center">*/}
                                {/*            <input type="radio" name="contactMethod" value="telegram"/>*/}
                                {/*            в телеграм*/}
                                {/*        </label>*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <label className="flex gap-x-2 mt-2 items-center">*/}
                                {/*            <input type="radio" name="contactMethod" value="whatsapp"/>*/}
                                {/*            в вотсап*/}
                                {/*        </label>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <button type="submit">отправить</button>
                            </form>
                            <p>
                                нажимая на кнопку отправить, вы даете согласие на обработку ваших персональных
                                данных
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SaveMoney;
