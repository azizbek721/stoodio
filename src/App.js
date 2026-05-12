import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Main from "./pages/main/Main";
import Contacts from "./pages/contacts/Contacts";
import Vacancies from "./pages/vacancies/Vacancies";
import Team from "./pages/team/Team";
import Portfolio from "./pages/portfolio/Portfolio";
import Policy from "./pages/policy/Policy";
import PortfolioById from "./pages/portfolio/PortfolioById";
import AdminPanel from "./pages/admin/AdminPanel";
import Login from "./pages/admin/Login";
import {useEffect} from "react";

function App() {
    const currentPath = useLocation().pathname;
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Auto-open admin/login in a new tab if accessed directly
        if ((currentPath === '/admin' || currentPath === '/login') && window.name !== 'stoodio_admin_tab') {
            const newTab = window.open(window.location.href, 'stoodio_admin_tab');
            if (newTab) {
                window.history.back();
                setTimeout(() => {
                    if (window.location.pathname === '/admin' || window.location.pathname === '/login') {
                        navigate('/');
                    }
                }, 500);
                return;
            }
        }

        // Invalidate admin session if navigating to any public page
        if (currentPath !== '/admin' && currentPath !== '/login') {
            localStorage.removeItem('isAdminLoggedIn');
        }
    }, [currentPath, navigate]);


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
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin" element={<AdminPanel/>}/>
            </Routes>
        </div>
    );
}

export default App;
