import React, {useContext} from 'react';
import Header from "../../components/portfolioParams/header/Header";
import Footer from "../../containers/footer/Footer";
import {useParams} from "react-router-dom";
import {Context} from "../../context/Context";
import Discuss from "../../containers/discuss/Discuss";
import Info from "../../components/portfolioParams/info/Info";
import Pictures from "../../components/portfolioParams/pictures/Pictures";

const PortfolioById = () => {

    const { projects } = useContext(Context);

    const params = useParams();

    const current = projects?.find((el) => {
        return el.id == params.id;
    });

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
