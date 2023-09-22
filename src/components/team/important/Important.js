import React from 'react';
import "./Important.scss"
import teamImg from "../../../assets/images/stoodio-team.jpeg"
import teamVideo from "../../../assets/videos/stoodio-team.mp4"

const Important = () => {
    return (
        <div className="container mx-auto">
            <div className="important-media flex gap-x-12 items-start">
                <video src={teamVideo} autoPlay muted loop playsInline/>
                <img src={teamImg} alt=""/>
            </div>
            <div className="important flex justify-between items-start">
                <div className="important-title-div flex items-end gap-x-6">
                    <h3 className="important-title">что еще тебе важно знать о нас</h3>
                </div>
                <div className="important-right flex flex-col gap-y-14">
                    <div className="important-div">
                        <h1>01</h1>
                        <p>мы легальная компания с зарегистрированным товарным знаком</p>
                    </div>
                    <div className="important-div">
                        <h1>02</h1>
                        <p>мы в полном объеме оплачиваем отпускные и больничные</p>
                    </div>
                    <div className="important-div">
                        <h1>03</h1>
                        <p>мы заключаем договоры с штатными сотрудниками, и с фрилансерами</p>
                    </div>
                    <div className="important-div">
                        <h1>04</h1>
                        <p>мы платим налоги</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Important;
