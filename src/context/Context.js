import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../config';

// Import fallback local assets
import oneSlide from "../assets/images/main-bg.jpg";
import twoSlide from "../assets/images/twoSlide.jpg";
import threeSlide from "../assets/images/threeSldie.jpg";
import fourSlide from "../assets/images/fourSlide.jpg";
import fifeSlide from "../assets/images/fifeSlide.jpg"
import sixSlide from "../assets/images/sixSlide.jpg";
import sevenSlide from "../assets/images/sevenSlide.jpg";
import eightSlide from "../assets/images/eightSlide.jpg";
import nineSlide from "../assets/images/nineSlide.jpg";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [sliders, setSliders] = useState([]);
    const [services, setServices] = useState([]);
    const [vacancies, setVacancies] = useState([]);
    const [loading, setLoading] = useState(true);

    const resolveImagePath = (path) => {
        if (!path) return 'https://via.placeholder.com/800x600?text=No+Image';

        // If the path contains "/uploads/", extract just the filename and use the current API_URL
        // This fixes cases where the DB has a hardcoded domain (like localhost or an old Render URL)
        if (typeof path === 'string' && path.includes('/uploads/')) {
            const fileName = path.split('/uploads/').pop();
            return `${API_URL}/uploads/${fileName}`;
        }

        // If it's already a full URL (not an upload)
        if (typeof path === 'string' && path.startsWith('http')) return path;

        // Try to resolve from local assets folder
        try {
            return require(`../assets/images/${path}`);
        } catch (e) {
            // Fallback for relative paths served by the backend
            if (path.includes('/') || path.includes('.')) {
                const cleanPath = path.startsWith('/') ? path.slice(1) : path;
                return `${API_URL}/uploads/${cleanPath}`;
            }
            return 'https://via.placeholder.com/800x600?text=Image+Not+Found';
        }
    };

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                setLoading(true);

                // Fetch Projects
                const projectsRes = await axios.get(`${API_URL}/api/projects`);
                const resolvedProjects = projectsRes.data.map(p => ({
                    ...p,
                    name: p.name || p.title,
                    plane: resolveImagePath(p.plane),
                    images: (p.images || []).map(imgObj => ({
                        ...imgObj,
                        img: resolveImagePath(imgObj.img)
                    }))
                }));
                setProjects(resolvedProjects);

                // Fetch Sliders
                const slidersRes = await axios.get(`${API_URL}/api/sliders`);
                if (slidersRes.data && slidersRes.data.length > 0) {
                    setSliders(slidersRes.data.map(s => ({ ...s, img: resolveImagePath(s.img) })));
                } else {
                    // Static fallbacks for sliders if none in DB
                    setSliders([
                        { id: 1, img: oneSlide }, { id: 2, img: twoSlide }, { id: 3, img: threeSlide },
                        { id: 4, img: fourSlide }, { id: 5, img: fifeSlide }, { id: 6, img: sixSlide },
                        { id: 7, img: sevenSlide }, { id: 8, img: eightSlide }, { id: 9, img: nineSlide }
                    ]);
                }

                // Fetch Services
                const servicesRes = await axios.get(`${API_URL}/api/services`);
                setServices(servicesRes.data);

                // Fetch Vacancies
                const vacanciesRes = await axios.get(`${API_URL}/api/vacancies`);
                setVacancies(vacanciesRes.data);

            } catch (error) {
                console.error('Error fetching data from server:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);

    // Static content that doesn't change often
    const steps = [
        { id: 1, title: "знакомство", number: "01", description: "На первой встрече, лично или онлайн, расскажем о нашей компании..." },
        { id: 2, title: "экспертиза и смета", number: "02", description: "Заполним бриф и подробно изучим всю документацию по проекту..." },
        { id: 3, title: "договор", number: "03", description: "Заключим договор с удобной для Вас формой оплаты..." },
        { id: 4, title: "техническое задание", number: "04", description: "Определим Ваши функциональные и эстетические пожелания..." },
        { id: 5, title: "разработка проекта", number: "05", description: "Работать будем поэтапно и строго по ТЗ..." },
        { id: 6, title: "получение разрешений", number: "06", description: "Ваш проект будет сооствествовать ГОСТам, СНиПам..." },
        { id: 7, title: "строительство и отделка", number: "07", description: "Составим детальную смету и проведем тендер..." }
    ];

    return (
        <Context.Provider value={{ sliders, projects, steps, services, vacancies, loading }}>
            {children}
        </Context.Provider>
    );
};

export { Context, ContextProvider };
