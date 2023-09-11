import React from 'react';
import Footer from "../../containers/footer/Footer";
import Header from "../../components/main/header/Header";
import Info from "../../components/main/info/Info";
import Counter from "../../components/main/counter/Counter";
import Founder from "../../components/main/founder/Founder";
import Advantages from "../../components/main/advantages/Advantages";
import Discuss from "../../containers/discuss/Discuss";
import Steps from "../../components/main/steps/Steps";
import ProjectManager from "../../components/main/projectManager/ProjectManager";
import SaveMoney from "../../components/main/saveMoney/SaveMoney";
import Services from "../../components/main/services/Services";
import Projects from "../../components/main/projects/Projects";
import Useful from "../../components/main/useful/Useful";

const Main = () => {
    return (
        <div>
            <Header/>
            <Info />
            <Counter />
            <Founder />
            <Advantages />
            <SaveMoney />
            <Projects />
            <Useful />
            <Services />
            <ProjectManager />
            <Steps />
            <Discuss />
            <Footer/>
        </div>
    );
};

export default Main;
