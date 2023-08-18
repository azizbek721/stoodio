import {Route, Routes, useLocation} from "react-router-dom";
import Main from "./pages/main/Main";
import Contacts from "./pages/contacts/Contacts";
import Jobs from "./pages/jobs/Jobs";
import Team from "./pages/team/Team";
import Portfolio from "./pages/portfolio/Portfolio";
import Policy from "./pages/policy/Policy";

function App() {
    const currentPath = useLocation().pathname;

    return (
        <div className="App">
            <Routes currentPath={currentPath}>
                <Route path="/" element={<Main/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/jobs" element={<Jobs/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/policy" element={<Policy/>}/>
            </Routes>
        </div>
    );
}

export default App;
