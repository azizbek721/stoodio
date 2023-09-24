import React, {useEffect, useState} from 'react';
import "./Employees.scss"

const Employees = () => {
    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        const container = document.querySelector('.employees');
        const usefulTitle = document.querySelector('.employees-title');
        const containerRect = container.getBoundingClientRect();

        if (usefulTitle && containerRect.top <= 15) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const titleStyle = isFixed
        ? {position: 'sticky', top: '0'}
        : {};

    return (
        <div className="container mx-auto">
            <div className="employees-big-text-div">
                <div className="employees-big-text flex justify-end items-end">
                    <h1>начало работы в бюро</h1>
                </div>
            </div>
            <div className="employees flex justify-between items-start">
                <div className="employees-title-div flex items-end gap-x-6" style={titleStyle}>
                    <h3 className="employees-title">как мы встречаем новых сотрудников</h3>
                </div>
                <div className="employees-right flex flex-col gap-y-14">
                    <div className="employees-div">
                        <h1>сразу после трудоустройства начнется твоя адаптация в бюро</h1>
                        <div className="employees-texts">
                            <div className="employees-text flex items-center gap-x-8">
                                <span></span>
                                <p>проведем welcome встречу в online или offline формате</p>
                            </div>
                            <div className="employees-text flex items-center gap-x-8">
                                <span></span>
                                <p>познакомим тебя с командной</p>
                            </div>
                            <div className="employees-text flex items-center gap-x-8">
                                <span></span>
                                <p>внедрим в работу через битрикс24</p>
                            </div>
                            <div className="employees-text flex items-center gap-x-8">
                                <span></span>
                                <p>обучим scrum-технологии работы над проектами</p>
                            </div>
                            <div className="employees-text flex items-center gap-x-8">
                                <span></span>
                                <p>обозначим четкий список задач на период 1-2-3 месяца с понятными результатами и
                                    оценкой твоей работы</p>
                            </div>
                        </div>
                    </div>
                    <div className="employees-div">
                        <h1>ты будешь знать, что именно тебе нужно сделать, чтобы успешно пройти адаптационный период, и
                            что мы будем оценивать</h1>
                        <div className="employees-texts">
                            <div className="employees-text flex items-center gap-x-8">
                                <span></span>
                                <p>расскажем, какие карьерные и профессиональные возможности тебя ждут по окончании
                                    адаптационного периода</p>
                            </div>
                        </div>
                    </div>
                    <div className="employees-div">
                        <h1>освоиться в команде, спланировать отпуск, решить любой другой организационный или
                            корпоративный вопрос поможет наш HR</h1>
                        <div className="employees-texts">
                            <div className="employees-text flex items-center gap-x-8">
                                <div className="hidden-span"></div>
                                <p>также на период адаптации к тебе прикрепляется наставник, который:</p>
                            </div>
                            <div className="employees-text flex items-center gap-x-8">
                                <span></span>
                                <p>ставит задачи</p>
                            </div>
                            <div className="employees-text flex items-center gap-x-8">
                                <span></span>
                                <p>дает обратную связь по работе</p>
                            </div>
                            <div className="employees-text flex items-center gap-x-8">
                                <span></span>
                                <p>обучает дизайн-коду бюро</p>
                            </div>
                            <div className="employees-text flex items-center gap-x-8">
                                <span></span>
                                <p>помогает адаптироваться к технологиям разработки проектов</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employees;
