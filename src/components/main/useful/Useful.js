import React, {useEffect, useState} from 'react';
import "./Useful.scss"

const Useful = () => {
    const [isTitleFixed, setIsTitleFixed] = useState(false);

    const handleScroll = () => {
        const container = document.querySelector('.useful');
        const usefulTitle = document.querySelector('.useful-title');
        const containerRect = container.getBoundingClientRect();

        if (usefulTitle && containerRect.top <= 15) {
            setIsTitleFixed(true);
        } else {
            setIsTitleFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const titleStyle = isTitleFixed
        ? {position: 'sticky', top: '0'}
        : {};

    return (
        <div className="useful-background">
            <div className="container mx-auto">
                <div className="useful flex justify-between items-start">
                    <div className="useful-title-div" style={titleStyle}>
                        <h3 className="useful-title">каким заказчикам мы будем полезны</h3>
                    </div>
                    <div className="useful-right flex flex-col gap-y-12">
                        <div className="useful-div">
                            <h1>частным лицам</h1>
                            <p>
                                Создадим архитектурный проект современного коттеджа, дизайн-проект интерьеров квартиры и
                                ландшафтный дизайн. Полностью укомплектуем, построим и проведем авторский надзор.
                            </p>
                        </div>
                        <div className="useful-div">
                            <h1>компаниям</h1>
                            <p>
                                Проведем исследования, запроектируем и реализуем под ключ узнаваемую и продающую
                                коммерческую архитектуру и дизайн — офис, магазин, отель, ресторан и др.
                            </p>
                            <p>Придумаем и зарегистрируем уникальное название, фирменный стиль и сайт.</p>
                        </div>
                        <div className="useful-div">
                            <h1>застройщикам и девелоперам</h1>
                            <p>
                                Разработаем концепцию и ПСД жилого комплекса, коттеджного поселка или коммерческого
                                объекта. Возьмём в работу проект целиком или частично, например, создадим архитектуру и
                                интерьеры.
                            </p>
                        </div>
                        <div className="useful-div">
                            <h1>генпроектировщикам</h1>
                            <p>
                                Войдем в архитектурный консорциум и возьмем на себя разработку архитектурных решений,
                                дизайн интерьера и ландшафтный дизайн. Организуем совместную работу всех
                                субподрядчиков.
                            </p>
                        </div>
                        <div className="useful-div">
                            <h1>государственным учреждениям</h1>
                            <p>
                                Создадим архитектурную или дизайн-концепции для согласования идеи и получения
                                финансирования. Разработаем ПСД, мастер-план и выполним все виды кадастровых работ.
                                Участвуем и побеждаем в конкурсах Минстроя.
                            </p>
                            <p>Работаем по 44-ФЗ.</p>
                        </div>
                    </div>
                </div>
                <div className="for-all">
                    <div className="for-all-inner flex justify-between items-center">
                        <div></div>
                        <div className="for-all-div">
                            <h1>для всех</h1>
                            <p>
                                Согласуем проектные решения во всех инстанциях. Пройдем градостроительные и
                                научно-методические советы, публичные слушания и экспертизы.
                            </p>
                            <p>
                                Организуем и проведем все этапы соучаствующего проектирования.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Useful;
