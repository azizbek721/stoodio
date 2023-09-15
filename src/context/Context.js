import {createContext} from 'react';
import one from "../assets/images/project1.jpeg";
import two from "../assets/images/project2.jpeg";
import three from "../assets/images/project3.jpeg";
import four from "../assets/images/project4.jpeg";
import fife from "../assets/images/project5.jpeg";
import six from "../assets/images/project6.jpeg";
import seven from "../assets/images/project7.jpeg";
import eight from "../assets/images/project8.jpeg";
import nine from "../assets/images/project9.jpeg";
import ten from "../assets/images/project10.jpeg";
import plane from "../assets/images/plane.jpeg";


const Context = createContext();

const ContextProvider = ({children}) => {

    const projects = [
        {
            id: 1,
            images: [
                {
                    id: 1,
                    img: one
                },
                {
                    id: 2,
                    img: one
                },
                {
                    id: 3,
                    img: one
                },
                {
                    id: 4,
                    img: one
                }
            ],
            plane: plane,
            name: 'Коттедж в Пскове',
            workType: "Проектирование",
            type: "Загородный дом",
            date: "2022",
            square: "213 м²",
            place: "Россия, Псков",
            status: "В стадии реализации",
            team: "Сергей Станкевич, Александра Бородина, Анна Новикова, Дарья Куприк"
        },
        {
            id: 2,
            images: [
                {
                    id: 1,
                    img: two
                },
                {
                    id: 2,
                    img: two
                },
                {
                    id: 3,
                    img: two
                },
                {
                    id: 4,
                    img: two
                }
            ],
            plane: plane,
            name: 'Квартира в Neva Towers',
            workType: "Проектирование",
            type: "Квартира",
            date: "2022",
            square: "120 м²",
            place: "Россия, Москва",
            status: "Реализован",
            team: "Сергей Станкевич, Екатерина Распопина"
        },
        {
            id: 3,
            images: [
                {
                    id: 1,
                    img: three
                },
                {
                    id: 2,
                    img: three
                },
                {
                    id: 3,
                    img: three
                },
                {
                    id: 4,
                    img: three
                }
            ],
            plane: plane,
            name: 'Коттедж в скандинавском стиле',
            workType: "Проектирование",
            type: "Коттедж в скандинавском стиле",
            date: "2022",
            square: "208",
            place: "Россия, Псков",
            status: "В стадии реализации",
            team: "Сергей Станкевич, Сергей Григоренко"
        },
        {
            id: 4,
            images: [
                {
                    id: 1,
                    img: four
                },
                {
                    id: 2,
                    img: four
                },
                {
                    id: 3,
                    img: four
                },
                {
                    id: 4,
                    img: four
                }
            ],
            plane: plane,
            name: 'Коттедж в КП Лисецкое, 122 м²',
            workType: "Проектирование",
            type: "Коттедж",
            date: "2023",
            square: "122 м²",
            place: "Россия, Псков",
            status: "В стадии реализации",
            team: "Сергей Станкевич, Викторова Мария"
        },
        {
            id: 5,
            images: [
                {
                    id: 1,
                    img: fife
                },
                {
                    id: 2,
                    img: fife
                },
                {
                    id: 3,
                    img: fife
                },
                {
                    id: 4,
                    img: fife
                }
            ],
            plane: plane,
            name: 'Коттеджи в Сочи',
            workType: "Проектирование",
            type: "Коттеджи в Сочи",
            date: "2016",
            square: "626, 47 м²",
            place: "Россия, Сочи",
            status: "В стадии реализации",
            team: "Сергей Станкевич, Сергей Григоренко"
        },
        {
            id: 6,
            images: [
                {
                    id: 1,
                    img: six
                },
                {
                    id: 2,
                    img: six
                },
                {
                    id: 3,
                    img: six
                },
                {
                    id: 4,
                    img: six
                }
            ],
            plane: plane,
            name: 'Коттедж в Пскове',
            workType: "Проектирование",
            type: "Загородный дом",
            date: "2022",
            square: "213 м²",
            place: "Россия, Псков",
            status: "В стадии реализации",
            team: "Сергей Станкевич, Александра Бородина, Анна Новикова, Дарья Куприк"
        },
        {
            id: 7,
            images: [
                {
                    id: 1,
                    img: seven
                },
                {
                    id: 2,
                    img: seven
                },
                {
                    id: 3,
                    img: seven
                },
                {
                    id: 4,
                    img: seven
                }
            ],
            plane: plane,
            name: 'Офис креативного агентства Agency X',
            workType: "Проектирование",
            type: "Офисное пространство",
            date: "2021",
            square: "135 м²",
            place: "Россия, Санкт-петербург",
            status: "Реализован",
            team: "Сергей Станкевич, Вероника Самойленко"
        },
        {
            id: 8,
            images: [
                {
                    id: 1,
                    img: eight
                },
                {
                    id: 2,
                    img: eight
                },
                {
                    id: 3,
                    img: eight
                },
                {
                    id: 4,
                    img: eight
                }
            ],
            plane: plane,
            name: 'Коттедж в КП Уютный Берег',
            workType: "Проектирование",
            type: "Загородный дом",
            date: "2022",
            square: "284 м²",
            place: "Россия, Псков",
            status: "Реализован",
            team: "Сергей Станкевич, Мария Викторова"
        },
        {
            id: 9,
            images: [
                {
                    id: 1,
                    img: nine
                },
                {
                    id: 2,
                    img: nine
                },
                {
                    id: 3,
                    img: nine
                },
                {
                    id: 4,
                    img: nine
                }
            ],
            plane: plane,
            name: 'Современный коттедж во Всеволожске',
            workType: "Проектирование",
            type: "Коттеджи",
            date: "2023",
            square: "150 м²",
            place: "Россия, Всеволожск",
            status: "В стадии реализации",
            team: "Сергей Станкевич, Яна Зырянова, Мария Викторова"
        },
        {
            id: 10,
            images: [
                {
                    id: 1,
                    img: ten
                },
                {
                    id: 2,
                    img: ten
                },
                {
                    id: 3,
                    img: ten
                },
                {
                    id: 4,
                    img: ten
                }
            ],
            plane: plane,
            name: 'Реконструкция ОКН с приспособлением под апарт-отель',
            workType: "",
            type: "Загородный дом",
            date: "2021",
            square: "",
            place: "Россия, Санкт-петербург",
            status: "В стадии реализации",
            team: "Сергей Станкевич, Сергей Григоренко"
        },
    ];

    return (
        <Context.Provider
            value={{projects}}
        >
            {children}
        </Context.Provider>
    );
};

export {Context, ContextProvider};
