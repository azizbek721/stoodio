import React, {useEffect, useState} from 'react';
import "./Equipment.scss"

const Equipment = () => {
    const [isTextFixed, setIsTextFixed] = useState(false);

    const handleScroll = () => {
        const container = document.querySelector('.equipment');
        const usefulTitle = document.querySelector('.equipment-title');
        const containerRect = container.getBoundingClientRect();

        if (usefulTitle && containerRect.top <= 15) {
            setIsTextFixed(true);
        } else {
            setIsTextFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const titleStyle = isTextFixed
        ? {position: 'sticky', top: '0'}
        : {};

    return (
        <div className="container mx-auto">
            <div className="equipment flex justify-between items-start">
                <div className="equipment-title-div flex items-end gap-x-6" style={titleStyle}>
                    <h3 className="equipment-title">топовое оборудование и софт</h3>
                </div>
                <div className="equipment-right flex flex-col gap-y-14">
                    {/*<div className="equipment-div">*/}
                    {/*    <h1>мы используем Битрикс24, Scrum, Kanban-доски, Miro и другие инструменты автоматизации</h1>*/}
                    {/*    <div className="equipment-texts">*/}
                    {/*        <div className="equipment-text flex items-center gap-x-8">*/}
                    {/*            <span></span>*/}
                    {/*            <p>ты научишься работать на 30% быстрее за счет автоматизации работы</p>*/}
                    {/*        </div>*/}
                    {/*        <div className="equipment-text flex items-center gap-x-8">*/}
                    {/*            <span></span>*/}
                    {/*            <p>ты будешь успевать делать больше, а значит больше зарабатывать</p>*/}
                    {/*        </div>*/}
                    {/*        <div className="equipment-text flex items-center gap-x-8">*/}
                    {/*            <span></span>*/}
                    {/*            <p>ты четко понимаешь задачи, сроки и последовательность шагов при работе над проектом</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="equipment-div">
                        <h1>наша команда работает в программах Autodesk Revit и Autodesk 3ds Max</h1>
                        <div className="equipment-texts">
                            <div className="equipment-text flex items-center gap-x-8">
                                <span></span>
                                <p>у тебя больше времени на творческие задачи, потому что всё рутинное автоматизировано</p>
                            </div>
                            <div className="equipment-text flex items-center gap-x-8">
                                <span></span>
                                <p>у тебя больше инструментов, чтобы сделать проект по-настоящему крутым</p>
                            </div>
                            <div className="equipment-text flex items-center gap-x-8">
                                <span></span>
                                <p>ты не выгораешь, потому что допускаешь меньше ошибок и не переделываешь одно и то же несколько раз</p>
                            </div>
                        </div>
                    </div>
                    <div className="equipment-div">
                        <h1>мы встраиваем удаленных сотрудников в нашу систему работы над проектами и настраиваем весь необходимый софт</h1>
                        <div className="equipment-texts">
                            <div className="equipment-text flex items-center gap-x-8">
                                <span></span>
                                <p>ты чувствуешь себя частью команды, даже работая удаленно</p>
                            </div>
                            <div className="equipment-text flex items-center gap-x-8">
                                <span></span>
                                <p>ты занимаешься только любимыми творческими задачами</p>
                            </div>
                            <div className="equipment-text flex items-center gap-x-8">
                                <span></span>
                                <p>ты постоянно повышаешь свои скиллы в разработке и управлении проектами, работая по нашей методологии</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Equipment;
