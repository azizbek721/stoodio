import React, {useEffect} from 'react';
import {Resume} from '../discuss/DiscussWrapper';
import {useDispatch, useSelector} from 'react-redux';
import {closeResumeModal} from '../../store/reducers/resumeReducer';
import axios from 'axios';


const ResumeModal = () => {
    const {resume} = useSelector((state) => state.ResumeReducer);
    const dispatch = useDispatch();

    const closing = () => {
        dispatch(closeResumeModal());
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            closing();
        }
    };

    useEffect(() => {
        if (resume) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleKeyDown); // Добавляем обработчик события
        } else {
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', handleKeyDown); // Удаляем обработчик события
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown); // Очищаем обработчик события при размонтировании
        };
    }, [resume]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            // Замените 'YOUR_BOT_TOKEN' на токен вашего Telegram бота
            const botToken = '6596282708:AAE_Rj8yL_bQWkrbdFut9Cr5PC7ufF73YnU';

            // Замените 'YOUR_CHAT_ID' на ваш Chat ID в Telegram
            const chatId = '-4046818608';

            const message = `
        *Имя:* ${formData.get('Имя')}
        *Телефон:* ${formData.get('Телефон')}
        *E-mail:* ${formData.get('E-mail')}
        *Город:* ${formData.get('Город')}
        *Должность:* ${formData.get('Должность')}
        *Портфолио:* ${formData.get('Портфолио') || 'не указано'}
      `;

            formData.append('chat_id', chatId);
            formData.append('document', formData.get('Резюме'));

            const botApiUrl = `https://api.telegram.org/bot${botToken}/sendDocument`;
            await axios.post(botApiUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });


            e.target.reset();
            closing();
        } catch (error) {
            console.error('Ошибка отправки сообщения:', error);
        }
    };

    return (
        <div>
            <div className="overlay" style={{display: resume ? 'block' : 'none'}} onClick={closing}></div>
            <Resume resume={resume}>
                <div className="modal-container mx-auto">
                    <div className="modal-top flex items-start">
                        <div className="modal-top-texts flex justify-center items-center text-center">
                            <h4>Работать в STOODIO</h4>
                        </div>
                        <button className="modal-close-btn" onClick={closing}>X</button>
                    </div>
                </div>
                <hr/>
                <div className="modal-container mx-auto">
                    <form onSubmit={handleSubmit} className="modal-form flex flex-col gap-y-4">
                        <input type="text" name="Имя" placeholder="Имя" required/>
                        <input type="number" name="Телефон" placeholder="Телефон" required/>
                        <input type="email" name="E-mail" placeholder="E-mail" required/>
                        <input type="text" name="Город" placeholder="Город" required/>
                        <input type="text" name="Должность" placeholder="Какая должность вам интересна" required/>
                        <label htmlFor="Резюме">Ваше резюме</label>
                        <input type="file" name="Резюме" accept=".docx, .doc, .pdf" multiple
                               placeholder="+ Выбрать файл"/>
                        <input type="text" name="Портфолио" placeholder="Ссылка на ваше портфолио"/>
                        <button className="modal-send-btn" type="submit">отправить</button>
                    </form>
                </div>
            </Resume>
        </div>
    );
};

export default ResumeModal;
