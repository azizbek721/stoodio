import React from 'react';
import "./Facts.scss"
import teamFactsBg from "../../../assets/images/stoodio-team-2.jpeg"

const Facts = () => {
    return (
        <div>
            <img src={teamFactsBg} alt="" className="facts-img"/>
            <div className="container mx-auto">
                <div className="facts flex justify-between items-start">
                    <div className="facts-title flex items-start gap-x-4">
                        <h1>3</h1>
                        <h4>факта почему тебе нужно работать вместе с нами</h4>
                    </div>
                    <div className="facts-right flex flex-col gap-y-14">
                        <div className="facts-div flex flex-col">
                            <div className="facts-div-title flex items-center gap-x-2.5 mb-5">
                                <p>01</p>
                                <span></span>
                                <h2>уникальная методология разработки проектов</h2>
                            </div>
                            <div className="facts-texts">
                                <div className="facts-text flex items-center gap-x-2 5">
                                    <span></span>
                                    <p>работаем по scrum - автоматизировано, быстро, понятно</p>
                                </div>
                                <div className="facts-text flex items-center gap-x-2 5">
                                    <span></span>
                                    <p>к каждому проекту прикреплен менеджер, ты занимаешься только своей работой</p>
                                </div>
                                <div className="facts-text flex items-center gap-x-2 5">
                                    <span></span>
                                    <p>все проекты разрабатываются конвейерным способом</p>
                                </div>
                            </div>
                        </div>
                        <div className="facts-div flex flex-col">
                            <div className="facts-div-title flex items-center gap-x-2.5 mb-5">
                                <p>02</p>
                                <span></span>
                                <h2>мы работаем только с интересными для нас проектами</h2>
                            </div>
                            <div className="facts-texts">
                                <div className="facts-text flex items-center gap-x-2 5">
                                    <span></span>
                                    <p>ты работаешь над проектами бизнес и премиум сегмента</p>
                                </div>
                                <div className="facts-text flex items-center gap-x-2 5">
                                    <span></span>
                                    <p>проектируешь только в любимых современных стилях</p>
                                </div>
                                <div className="facts-text flex items-center gap-x-2 5">
                                    <span></span>
                                    <p>сам выбираешь направления и стили в которых будешь развиваться</p>
                                </div>
                            </div>
                        </div>
                        <div className="facts-div flex flex-col">
                            <div className="facts-div-title flex items-center gap-x-2.5 mb-5">
                                <p>03</p>
                                <span></span>
                                <h2>ты занимаешься только тем, что тебя действительно драйвит</h2>
                            </div>
                            <div className="facts-texts">
                                <div className="facts-text flex items-center gap-x-2 5">
                                    <span></span>
                                    <p>все рутинные процессы у нас автоматизированы</p>
                                </div>
                                <div className="facts-text flex items-center gap-x-2 5">
                                    <span></span>
                                    <p>тебе не нужно самому искать заказы, в этом мы и сами хороши</p>
                                </div>
                                <div className="facts-text flex items-center gap-x-2 5">
                                    <span></span>
                                    <p>прёшься от классных визуализаций — пожалуйста, чертишь даже во сне — велкам, твоя
                                        любимая часть проекта разработка концепций - круто! Это мы к чему — работай
                                        только над любимыми задачами!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facts;
