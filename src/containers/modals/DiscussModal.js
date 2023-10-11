import React, {useEffect} from 'react';
import {Modal} from './DiscussWrapper';
import {useDispatch, useSelector} from 'react-redux';
import {closeModal} from '../../store/reducers/discussReducer';
import axios from 'axios';


const DiscussModal = () => {
    const {discuss} = useSelector((state) => state.DiscussReducer);
    const dispatch = useDispatch();

    const closing = () => {
        dispatch(closeModal());
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            closing();
        }
    };

    useEffect(() => {
        if (discuss) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleKeyDown); // Добавляем обработчик события
        } else {
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', handleKeyDown); // Удаляем обработчик события
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown); // Очищаем обработчик события при размонтировании
        };
    }, [discuss]);

    const handleSubmit = async (e) => {
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
      
Город: ${data.Город}
      
Услуги: ${data.Услуги ? data.Услуги : "не выбрано"}
      
Задача: ${data.Задача}
    `;

            // Отправьте сообщение боту
            await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                chat_id: chatId,
                text: message,
            });

            // Сбросьте состояние формы
            e.target.reset();

            // Закройте модальное окно после успешной отправки
            closing();
        } catch (error) {
            console.error('Ошибка отправки сообщения:', error);
        }
    };

    return (
        <div>
            <div className="overlay" style={{display: discuss ? 'block' : 'none'}} onClick={closing}></div>
            <Modal discuss={discuss}>
                <div className="modal-container mx-auto">
                    <div className="modal-top flex items-start">
                        <div className="modal-top-texts flex flex-col items-center text-center">
                            <h4>Здорово, что архитектурные задачи вы доверяете профессионалам!</h4>
                            <p>Мы готовы решать их в любой точке мира.</p>
                        </div>
                        <button className="modal-close-btn" onClick={closing}>X</button>
                    </div>
                </div>
                <hr/>
                <div className="modal-container mx-auto">
                    <form onSubmit={handleSubmit} className="modal-form flex flex-col gap-y-4">
                        <input type="text" name="Имя" placeholder="Имя" required/>
                        <input type="number" name="Телефон" placeholder="Телефон" required/>
                        <input type="text" name="Город" placeholder="Город" required/>
                        <select name="Услуги" id="services" placeholder="Какие услуги вас интересуют" required>
                            <option value="" hidden>Какие услуги вас интересуют</option>
                            <option value="проект под ключ">проект под ключ</option>
                            <option value="разработка концепции">разработка концепции</option>
                            <option value="разработка концепции">разработка концепции</option>
                            <option value="здание">здание</option>
                            <option value="офис">офис</option>
                            <option value="ресторан">ресторан</option>
                            <option value="ландшафт">ландшафт</option>
                            <option value="реконструкция о.к.н.">реконструкция о.к.н.</option>
                            <option value="коттедж">коттедж</option>
                            <option value="интерьер">интерьер</option>
                            <option value="мебель">мебель</option>
                            <option value="комплектация">комплектация</option>
                            <option value="авторский надзор">авторский надзор</option>
                            <option value="строительство">строительство</option>
                        </select>
                        <textarea name="Задача" id="taskDescription" cols="30" rows="10" placeholder="Опишите вашу задачу" required />
                        <button className="modal-send-btn" type="submit">отправить</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default DiscussModal;
