import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem 2rem',
            borderBottom: '1px dotted black'
        }}>
            <div className="logo" style={{fontWeight: 'bold'}}>● Placeholder</div>
            <div className="links">
                <Link to="/" style={{margin: '0 10px'}}>Home</Link>
                <Link to="/assignments" style={{margin: '0 10px'}}>Assignments</Link>
                <Link to="/contact" style={{margin: '0 10px'}}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;