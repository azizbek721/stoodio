import {createContext} from 'react';
import one from "../assets/images/project1.jpeg";
import plane from "../assets/images/plane.jpeg";
import oneSlide from "../assets/images/main-bg.jpg";
import twoSlide from "../assets/images/twoSlide.jpg";
import threeSlide from "../assets/images/threeSldie.jpg";
import fourSlide from "../assets/images/fourSlide.jpg";
import fifeSlide from "../assets/images/fifeSlide.jpg"
import sixSlide from "../assets/images/sixSlide.jpg";
import sevenSlide from "../assets/images/sevenSlide.jpg";
import eightSlide from "../assets/images/eightSlide.jpg";
import nineSlide from "../assets/images/nineSlide.jpg";
import tenSlide from  "../assets/images/tenSlide.jpg";
import project1main from "../assets/images/project1main.jpg";
import project1two from "../assets/images/project1two.jpg";
import project1three from "../assets/images/project1three.jpg";
import project1four from "../assets/images/project1four.jpg";
import project1fife from "../assets/images/project1fife.jpg";
import project1six from "../assets/images/project1six.jpg";
import project1plane from "../assets/images/project1plane.png";


const Context = createContext();

const ContextProvider = ({children}) => {

    const sliders = [
        {
            id: 1,
            img: oneSlide
        },
        {
            id: 2,
            img: twoSlide
        },
        {
            id: 3,
            img: threeSlide
        },
        {
            id: 4,
            img: fourSlide
        },
        {
            id: 5,
            img: fifeSlide
        },
        {
            id: 6,
            img: sixSlide
        },
        {
            id: 7,
            img: sevenSlide
        },
        {
            id: 8,
            img: eightSlide
        },
        {
            id: 9,
            img: nineSlide
        },
        // {
        //     id: 10,
        //     img: tenSlide
        // },
    ]

    const projects = [
        {
            id: 1,
            images: [
                {
                    id: 1,
                    img: project1main
                },
                {
                    id: 2,
                    img: project1two
                },
                {
                    id: 3,
                    img: project1three
                },
                {
                    id: 4,
                    img: project1four
                },
                {
                    id: 5,
                    img: project1fife
                },
                {
                    id: 6,
                    img: project1six
                }
            ],
            plane: project1plane,
            name: 'Интерьер дизайн',
            workType: "Интерьер дизайн",
            type: "Интерьер дизайн",
            date: "2023",
            square: "213 м²",
            place: "Ташкент, Алайский",
            status: "Реализован",
            team: "Наврузов Зиёдулло, Наврузов Рахматулло"
        },
        // {
        //     id: 2,
        //     images: [
        //         {
        //             id: 1,
        //             img: two
        //         },
        //         {
        //             id: 2,
        //             img: two
        //         },
        //         {
        //             id: 3,
        //             img: two
        //         },
        //         {
        //             id: 4,
        //             img: two
        //         }
        //     ],
        //     plane: plane,
        //     name: 'Квартира в Neva Towers',
        //     workType: "Проектирование",
        //     type: "Квартира",
        //     date: "2022",
        //     square: "120 м²",
        //     place: "Россия, Москва",
        //     status: "Реализован",
        //     team: "Сергей Станкевич, Екатерина Распопина"
        // },
        // {
        //     id: 3,
        //     images: [
        //         {
        //             id: 1,
        //             img: three
        //         },
        //         {
        //             id: 2,
        //             img: three
        //         },
        //         {
        //             id: 3,
        //             img: three
        //         },
        //         {
        //             id: 4,
        //             img: three
        //         }
        //     ],
        //     plane: plane,
        //     name: 'Коттедж в скандинавском стиле',
        //     workType: "Проектирование",
        //     type: "Коттедж в скандинавском стиле",
        //     date: "2022",
        //     square: "208",
        //     place: "Россия, Псков",
        //     status: "В стадии реализации",
        //     team: "Сергей Станкевич, Сергей Григоренко"
        // },
        // {
        //     id: 4,
        //     images: [
        //         {
        //             id: 1,
        //             img: four
        //         },
        //         {
        //             id: 2,
        //             img: four
        //         },
        //         {
        //             id: 3,
        //             img: four
        //         },
        //         {
        //             id: 4,
        //             img: four
        //         }
        //     ],
        //     plane: plane,
        //     name: 'Коттедж в КП Лисецкое, 122 м²',
        //     workType: "Проектирование",
        //     type: "Коттедж",
        //     date: "2023",
        //     square: "122 м²",
        //     place: "Россия, Псков",
        //     status: "В стадии реализации",
        //     team: "Сергей Станкевич, Викторова Мария"
        // },
        // {
        //     id: 5,
        //     images: [
        //         {
        //             id: 1,
        //             img: fife
        //         },
        //         {
        //             id: 2,
        //             img: fife
        //         },
        //         {
        //             id: 3,
        //             img: fife
        //         },
        //         {
        //             id: 4,
        //             img: fife
        //         }
        //     ],
        //     plane: plane,
        //     name: 'Коттеджи в Сочи',
        //     workType: "Проектирование",
        //     type: "Коттеджи в Сочи",
        //     date: "2016",
        //     square: "626, 47 м²",
        //     place: "Россия, Сочи",
        //     status: "В стадии реализации",
        //     team: "Сергей Станкевич, Сергей Григоренко"
        // },
        // {
        //     id: 6,
        //     images: [
        //         {
        //             id: 1,
        //             img: six
        //         },
        //         {
        //             id: 2,
        //             img: six
        //         },
        //         {
        //             id: 3,
        //             img: six
        //         },
        //         {
        //             id: 4,
        //             img: six
        //         }
        //     ],
        //     plane: plane,
        //     name: 'Коттедж в Пскове',
        //     workType: "Проектирование",
        //     type: "Загородный дом",
        //     date: "2022",
        //     square: "213 м²",
        //     place: "Россия, Псков",
        //     status: "В стадии реализации",
        //     team: "Сергей Станкевич, Александра Бородина, Анна Новикова, Дарья Куприк"
        // },
        // {
        //     id: 7,
        //     images: [
        //         {
        //             id: 1,
        //             img: seven
        //         },
        //         {
        //             id: 2,
        //             img: seven
        //         },
        //         {
        //             id: 3,
        //             img: seven
        //         },
        //         {
        //             id: 4,
        //             img: seven
        //         }
        //     ],
        //     plane: plane,
        //     name: 'Офис креативного агентства Agency X',
        //     workType: "Проектирование",
        //     type: "Офисное пространство",
        //     date: "2021",
        //     square: "135 м²",
        //     place: "Россия, Санкт-петербург",
        //     status: "Реализован",
        //     team: "Сергей Станкевич, Вероника Самойленко"
        // },
        // {
        //     id: 8,
        //     images: [
        //         {
        //             id: 1,
        //             img: eight
        //         },
        //         {
        //             id: 2,
        //             img: eight
        //         },
        //         {
        //             id: 3,
        //             img: eight
        //         },
        //         {
        //             id: 4,
        //             img: eight
        //         }
        //     ],
        //     plane: plane,
        //     name: 'Коттедж в КП Уютный Берег',
        //     workType: "Проектирование",
        //     type: "Загородный дом",
        //     date: "2022",
        //     square: "284 м²",
        //     place: "Россия, Псков",
        //     status: "Реализован",
        //     team: "Сергей Станкевич, Мария Викторова"
        // },
        // {
        //     id: 9,
        //     images: [
        //         {
        //             id: 1,
        //             img: nine
        //         },
        //         {
        //             id: 2,
        //             img: nine
        //         },
        //         {
        //             id: 3,
        //             img: nine
        //         },
        //         {
        //             id: 4,
        //             img: nine
        //         }
        //     ],
        //     plane: plane,
        //     name: 'Современный коттедж во Всеволожске',
        //     workType: "Проектирование",
        //     type: "Коттеджи",
        //     date: "2023",
        //     square: "150 м²",
        //     place: "Россия, Всеволожск",
        //     status: "В стадии реализации",
        //     team: "Сергей Станкевич, Яна Зырянова, Мария Викторова"
        // },
        // {
        //     id: 10,
        //     images: [
        //         {
        //             id: 1,
        //             img: ten
        //         },
        //         {
        //             id: 2,
        //             img: ten
        //         },
        //         {
        //             id: 3,
        //             img: ten
        //         },
        //         {
        //             id: 4,
        //             img: ten
        //         }
        //     ],
        //     plane: plane,
        //     name: 'Реконструкция ОКН с приспособлением под апарт-отель',
        //     workType: "",
        //     type: "Загородный дом",
        //     date: "2021",
        //     square: "",
        //     place: "Россия, Санкт-петербург",
        //     status: "В стадии реализации",
        //     team: "Сергей Станкевич, Сергей Григоренко"
        // },
    ];

    const steps = [
        {
            id: 1,
            title: "знакомство",
            description: "На первой встрече, лично или онлайн, расскажем о нашей компании, проектных возможностях, методах разработки и управления проектами, покажем интересные кейсы и ответим на любые вопросы.",
            number: "01"
        },
        {
            id: 2,
            title: "экспертиза и смета",
            description: "Заполним бриф и подробно изучим всю документацию по проекту. Предложим несколько оптимальных решений Вашей задачи и составим подробную смету проектных работ.",
            number: "02"
        },
        {
            id: 3,
            title: "договор",
            description: "Заключим договор с удобной для Вас формой оплаты и точным срок окончания всех работ. Составим график встреч для согласования предварительных этапов.",
            number: "03"
        },
        {
            id: 4,
            title: "техническое задание",
            description: "Определим Ваши функциональные и эстетические пожелания, бюджет на реализацию и другие важные условия. Зафиксируем их в техническом задании на основе которого разработаем проект.",
            number: "04"
        },
        {
            id: 5,
            title: "разработка проекта",
            description: "Работать будем поэтапно и строго по ТЗ. Результат каждого этапа сначала согласуем с Вами и только потом приступим к следующему. При необходимости внесем правки и улучшения.",
            number: "05"
        },
        {
            id: 6,
            title: "получение разрешений",
            description: "Ваш проект будет сооствествовать ГОСТам, СНиПам и современным технологиям. Мы сами получим все разрешения на строительство, перепланировку, наружную рекламу и т.д.",
            number: "06"
        },
        {
            id: 7,
            title: "строительство и отделка",
            description: "Составим детальную смету и проведем тендер среди проверенных подрядчиков. Совместно с Вами выберем лучшего исполнителя по цене, срокам и гарантиям качества. ",
            number: "07"
        }
    ]

    const services = [
        {
            id: 1,
            title: "архитектурное проектирование",
            description: "Проектируем и строим современные коттеджи и коммерческие здания.",
            description2: "От создания авторской концепции до разработки всех конструктивных и инженерных разделов с гарантией реализации. Работаем с объектами культурного наследия ОКН.",
            price: "проекты от 3 000 000 sum",
            button: "рассчитать стоимость"
        },
        {
            id: 2,
            title: "дизайн интерьера",
            description: "Создаем и реализуем премиальные интерьеры загородных домов, квартир, ресторанов, отелей, офисов и общественных пространств.",
            description2: "Работаем в современных стилях с учетом бюджета заказчика.",
            price: "проекты от 5 000 000 sum",
            button: "рассчитать стоимость"
        },
        {
            id: 3,
            title: "ландшафтный дизайн",
            description: "Создаем лаконичные, функциональные и запоминающиеся проекты для загородных домов и общественных городских пространств.",
            description2: "Придерживаемся принципов Органической архитектуры и Зеленого строительства.",
            price: "проекты от 3 000 000 sum",
            button: "рассчитать стоимость"
        },
        {
            id: 4,
            title: " управление строительством",
            description: "Комплексный подход к реализации наших проектов:  комплектация,  авторский надзор,  технический надзор,  юридическое сопровождение",
            description2: "Гарантируем законность, точность и своевременность реализации проектных решений.",
            price: "бесплатно при комплексном заказе",
            button: "узнать подробности"
        }
    ]

    const vacancies = [
        {
            id: 1,
            position: "Ведущий архитектор",
            city: "Санкт-Петербург",
            address: "Санкт-Петербург, ул. Социалистическая, 21",
            workTime: "полная занятость",
            experience: "3-6 лет",
            salary: "от 60 000 ₽",
            salaryType: "на руки"
        },
        {
            id: 2,
            position: "Ведущий архитектор",
            city: "Санкт-Петербург",
            address: "Санкт-Петербург, ул. Социалистическая, 21",
            workTime: "полная занятость",
            experience: "3-6 лет",
            salary: "от 60 000 ₽",
            salaryType: "на руки"
        },
        {
            id: 3,
            position: "Ведущий архитектор",
            city: "Санкт-Петербург",
            address: "Санкт-Петербург, ул. Социалистическая, 21",
            workTime: "полная занятость",
            experience: "3-6 лет",
            salary: "от 60 000 ₽",
            salaryType: "на руки"
        },
        {
            id: 4,
            position: "Ведущий архитектор",
            city: "Санкт-Петербург",
            address: "Санкт-Петербург, ул. Социалистическая, 21",
            workTime: "полная занятость",
            experience: "3-6 лет",
            salary: "от 60 000 ₽",
            salaryType: "на руки"
        },
        {
            id: 5,
            position: "Ведущий архитектор",
            city: "Санкт-Петербург",
            address: "Санкт-Петербург, ул. Социалистическая, 21",
            workTime: "полная занятость",
            experience: "3-6 лет",
            salary: "от 60 000 ₽",
            salaryType: "на руки"
        },
        {
            id: 6,
            position: "Ведущий архитектор",
            city: "Санкт-Петербург",
            address: "Санкт-Петербург, ул. Социалистическая, 21",
            workTime: "полная занятость",
            experience: "3-6 лет",
            salary: "от 60 000 ₽",
            salaryType: "на руки"
        },
        {
            id: 7,
            position: "Ведущий архитектор",
            city: "Санкт-Петербург",
            address: "Санкт-Петербург, ул. Социалистическая, 21",
            workTime: "полная занятость",
            experience: "3-6 лет",
            salary: "от 60 000 ₽",
            salaryType: "на руки"
        },
        {
            id: 8,
            position: "Ведущий архитектор",
            city: "Санкт-Петербург",
            address: "Санкт-Петербург, ул. Социалистическая, 21",
            workTime: "полная занятость",
            experience: "3-6 лет",
            salary: "от 60 000 ₽",
            salaryType: "на руки"
        },
        {
            id: 9,
            position: "Ведущий архитектор",
            city: "Санкт-Петербург",
            address: "Санкт-Петербург, ул. Социалистическая, 21",
            workTime: "полная занятость",
            experience: "3-6 лет",
            salary: "от 60 000 ₽",
            salaryType: "на руки"
        }
    ]

    return (
        <Context.Provider
            value={{sliders, projects, steps, services, vacancies}}
        >
            {children}
        </Context.Provider>
    );
};

export {Context, ContextProvider};
