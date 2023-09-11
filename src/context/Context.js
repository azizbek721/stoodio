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
            workType: "Проектирование"
        },
        {
            id: 2,
            img: two,
            name: 'Квартира в Neva Towers',
            workType: "Проектирование"
        },
        {
            id: 3,
            img: three,
            name: 'Коттедж в скандинавском стиле',
            workType: "Проектирование"
        },
        {
            id: 4,
            img: four,
            name: 'Коттедж в КП Лисецкое, 122 м²',
            workType: "Проектирование"
        },
        {
            id: 5,
            img: fife,
            name: 'Коттеджи в Сочи',
            workType: "Проектирование"
        },
        {
            id: 6,
            img: six,
            name: 'Коттедж в Пскове',
            workType: "Проектирование"
        },
        {
            id: 7,
            img: seven,
            name: 'Офис креативного агентства Agency X',
            workType: "Проектирование"
        },
        {
            id: 8,
            img: eight,
            name: 'Коттедж в КП Уютный Берег',
            workType: "Проектирование"
        },
        {
            id: 9,
            img: nine,
            name: 'Современный коттедж во Всеволожске',
            workType: ""
        },
        {
            id: 10,
            img: ten,
            name: 'Реконструкция ОКН с приспособлением под апарт-отель',
            workType: "Проектирование"
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
