import React, {useContext} from 'react';
import Footer from "../../containers/footer/Footer";
import Navbar from "../../containers/navbar/Navbar";
import Discuss from "../../containers/discuss/Discuss";
import {PortfolioWrapper} from "./PortfolioWrapper";
import {Context} from "../../context/Context";
import {Link} from "react-router-dom";

const Portfolio = () => {

    const { projects } = useContext(Context)

    return (
        <div>
            <Navbar/>
            <div className="container mx-auto">
                <PortfolioWrapper>
                    <div className="portfolio-header flex flex-col justify-end items-end">
                        <div className="text-left">
                            <h2>портфолио</h2>
                            <p>Получайте удовольствие от процесса.
                                Все хлопоты мы возьмем на себя</p>
                        </div>
                    </div>
                    <div className="portfolio-section">
                        <div className="portfolios">
                            {projects.map((el) => (
                                <Link to={`/portfolio/${el.id.toString()}`} className="portfolio" key={el.id}>
                                    <img src={el.images[0].img} alt=""/>
                                    <h5>{el.name}</h5>
                                </Link>
                            ))}
                        </div>
                    </div>
                </PortfolioWrapper>
            </div>
            <Discuss/>
            <Footer/>
        </div>
    );
};

export default Portfolio;
