import React, {useContext} from 'react';
import Header from "../../components/portfolioParams/Header";
import Footer from "../../containers/footer/Footer";
import {useParams} from "react-router-dom";
import {Context} from "../../context/Context";

const PortfolioById = () => {

    const { projects } = useContext(Context);

    const params = useParams();

    const current = projects?.find((el) => {
        return el.id == params.id;
    });

    return (
        <div>
            <Header params={current} />
            <Footer />
        </div>
    );
};

export default PortfolioById;
