import React, {useEffect, useState} from 'react';
import "./Develop.scss"
import teamVideo from "../../../assets/videos/stoodio-team.mp4";
import teamImg from "../../../assets/images/stoodio-team.jpeg";
const Develop = () => {

    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        const container = document.querySelector('.develop');
        const usefulTitle = document.querySelector('.develop-title');
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
            <div className="develop-media flex gap-x-12 items-start">
                <img src={teamImg} alt=""/>
                <video src={teamVideo} autoPlay muted loop playsInline/>
            </div>
            <div className="develop flex justify-between items-start">
                <div className="develop-title-div flex items-end gap-x-6" style={titleStyle}>
                    <h3 className="develop-title">развивайся вместе с бюро</h3>
                </div>
                <div className="develop-right flex flex-col gap-y-14">
                    <div className="develop-div">
                        <h1>после окончания трехмесячного адаптационного периода, составим совместно с тобой индивидуальную траекторию развития</h1>
                        <div className="develop-texts">
                            <div className="develop-text flex items-center gap-x-8">
                                <span></span>
                                <p>оценим какие знания и навыки тебе необходимо получить для перехода на следующую карьерную ступень</p>
                            </div>
                            <div className="develop-text flex items-center gap-x-8">
                                <span></span>
                                <p>тсогласуем срок и задачи</p>
                            </div>
                            <div className="develop-text flex items-center gap-x-8">
                                <span></span>
                                <p>выберем обучающие платформы и материалы</p>
                            </div>
                            <div className="develop-text flex items-center gap-x-8">
                                <span></span>
                                <p>приятная новость – обучение за наш счет</p>
                            </div>
                            <div className="develop-text flex items-center gap-x-8">
                                <span></span>
                                <p>при достижении оговоренных результатов празднуем твой карьерный рост</p>
                            </div>
                        </div>
                    </div>
                    <div className="develop-div">
                        <h1>мы поддерживаем желание команды развиваться и организуем обучение в нашем корпоративном университете, который в том числе включает обучение на внешних крутых онлайн платформах Skillbox, Art Glück и др.</h1>
                        <div className="develop-texts">
                            <div className="develop-text flex items-center gap-x-8">
                                <span></span>
                                <p>обучение Autodesk Revit</p>
                            </div>
                            <div className="develop-text flex items-center gap-x-8">
                                <span></span>
                                <p>autodesk 3ds Max</p>
                            </div>
                            <div className="develop-text flex items-center gap-x-8">
                                <span></span>
                                <p>проектный менеджмент и др.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Develop;
