import React, { useEffect, useState } from 'react';
import { Resume } from '../discuss/DiscussWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { closeResumeModal } from '../../store/reducers/resumeReducer';
import axios from 'axios';

const ResumeModal = () => {
    const { resume } = useSelector((state) => state.ResumeReducer);
    const dispatch = useDispatch();
    const [isSending, setIsSending] = useState(false);

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
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [resume]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Submit button clicked!');

        try {
            // Замените 'YOUR_BOT_TOKEN' на токен вашего Telegram бота
            const botToken = '6596282708:AAE_Rj8yL_bQWkrbdFut9Cr5PC7ufF73YnU';
            // Замените 'YOUR_CHAT_ID' на ваш Chat ID в Telegram
            const chatId = '-4046818608';

            const formData = new FormData();
            formData.append('chat_id', chatId);
            formData.append('caption', `
      Имя: ${e.target['Имя'].value}
Телефон: ${e.target['Телефон'].value}
E-mail: ${e.target['E-mail'].value}
Город: ${e.target['Город'].value}
Должность: ${e.target['Должность'].value}
Портфолио: ${e.target['Портфолио'].value || 'не указано'}
    `);
            formData.append('document', e.target.Резюме.files[0]);

            await axios.post(`https://api.telegram.org/bot${botToken}/sendDocument`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            e.target.reset();
            closing();
        } catch (error) {
            console.error('Error sending the resume:', error);
            console.log('Error response:', error.response);
        } finally {
            setIsSending(false); // Сбрасываем состояние отправки обратно в false
        }
    };

    return (
        <div>
            <div className="overlay" style={{ display: resume ? 'block' : 'none' }} onClick={closing}></div>
            <Resume resume={resume}>
                <div className="modal-container mx-auto">
                    <div className="modal-top flex items-start">
                        <div className="modal-top-texts flex justify-center items-center text-center">
                            <h4>Работать в STOODIO</h4>
                        </div>
                        <button className="modal-close-btn" onClick={closing}>X</button>
                    </div>
                </div>
                <hr />
                <div className="modal-container mx-auto">
                    <form onSubmit={handleSubmit} className="modal-form flex flex-col gap-y-4">
                        <input type="text" name="Имя" placeholder="Имя" required />
                        <input type="number" name="Телефон" placeholder="Телефон" required />
                        <input type="email" name="E-mail" placeholder="E-mail" required />
                        <input type="text" name="Город" placeholder="Город" required />
                        <input type="text" name="Должность" placeholder="Какая должность вам интересна" required />
                        <label htmlFor="Резюме">Ваше резюме</label>
                        <input type="file" id="Резюме" accept=".docx, .doc, .pdf" multiple placeholder="+ Выбрать файл" />
                        <input type="text" name="Портфолио" placeholder="Ссылка на ваше портфолио" />
                        <button className="modal-send-btn" type="submit">
                            {isSending ? 'Отправляется...' : 'Отправить'}
                        </button>
                    </form>
                </div>
            </Resume>
        </div>
    );
};

export default ResumeModal;


// const botToken = '6596282708:AAE_Rj8yL_bQWkrbdFut9Cr5PC7ufF73YnU';

// const chatId = '-4046818608';
