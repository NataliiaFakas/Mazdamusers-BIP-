import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Assignments from './pages/Assignments';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/assignments" element={<Assignments/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;