import React, {useContext} from 'react';
import Header from "../../components/portfolioParams/header/Header";
import Footer from "../../containers/footer/Footer";
import {useParams} from "react-router-dom";
import {Context} from "../../context/Context";
import Discuss from "../../containers/discuss/Discuss";
import Info from "../../components/portfolioParams/info/Info";
import Pictures from "../../components/portfolioParams/pictures/Pictures";

const PortfolioById = () => {

    const { projects, loading } = useContext(Context);
    const params = useParams();

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0F1115] flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    const current = projects?.find((el) => {
        return String(el.id) === String(params.id);
    });

    if (!current) {
        return (
            <div className="min-h-screen bg-[#0F1115] flex flex-col items-center justify-center text-white gap-4">
                <h2 className="text-2xl font-bold">Проект не найден</h2>
                <a href="/portfolio" className="text-indigo-400 hover:underline">Вернуться в портфолио</a>
            </div>
        );
    }

    return (
        <div>
            <Header params={current} />
            <Info params={current} />
            <Pictures params={current} />
            <Discuss />
            <Footer />
        </div>
    );
};

export default PortfolioById;
