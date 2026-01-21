import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Assignments from './pages/Assignments';
import AssignmentDetail from './pages/AssignmentDetail';
import Admin from './pages/Admin';

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/assignments" element={<Assignments/>}/>
                <Route path="/assignments/:id" element={<AssignmentDetail/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
        </Router>
    );
}

export default App;