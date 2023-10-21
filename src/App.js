import {Route, Routes, useLocation} from "react-router-dom";
import Main from "./pages/main/Main";
import Contacts from "./pages/contacts/Contacts";
import Vacancies from "./pages/vacancies/Vacancies";
import Team from "./pages/team/Team";
import Portfolio from "./pages/portfolio/Portfolio";
import Policy from "./pages/policy/Policy";
import PortfolioById from "./pages/portfolio/PortfolioById";
import {useEffect} from "react";

function App() {
    const currentPath = useLocation().pathname;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPath]);


    return (
        <div className="App">
            <Routes currentPath={currentPath}>
                <Route path="/" element={<Main/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/portfolio/:id" element={<PortfolioById/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/vacancies" element={<Vacancies/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/policy" element={<Policy/>}/>
            </Routes>
        </div>
    );
}

export default App;
