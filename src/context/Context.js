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


const Context = createContext();

const ContextProvider = ({children}) => {

    const projects = [
        {
            id: 1,
            img: one,
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
            img: two,
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
            img: three,
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
            img: four,
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
            img: fife,
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
            img: six,
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
            img: seven,
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
            img: eight,
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
            img: nine,
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
            img: ten,
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
