import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <main className="hero" style={{padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto'}}>
            <section className="hero-top" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '4rem'
            }}>
                <div className="hero-text">
                    <h1 style={{fontSize: '3.5rem', fontWeight: '800', margin: '0'}}>Learn how to control AI.</h1>
                    <h1 style={{fontSize: '3.5rem', fontWeight: '800', margin: '0'}}>Don't let the AI control you.</h1>
                </div>

                <motion.div
                    className="hero-image"
                    initial={{x: 50, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1}}
                >
                    {/* Vervang deze URL later door je eigen afbeelding */}
                    <img src="https://via.placeholder.com/300x150" alt="AI Hands"/>
                </motion.div>
            </section>

            <section className="hero-content">
                <motion.div
                    className="text-box"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    style={{
                        background: '#666',
                        color: 'white',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        marginBottom: '1rem',
                        maxWidth: '800px'
                    }}
                >
                    <p>Welcome. Your future starts here. Our initiative is to help you learn the basics of ethical and
                        credible use of AI.</p>
                </motion.div>

                <motion.div
                    className="text-box small"
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.5}}
                    style={{
                        background: '#666',
                        color: 'white',
                        padding: '1rem',
                        borderRadius: '12px',
                        marginBottom: '2rem',
                        display: 'inline-block'
                    }}
                >
                    <h3>Are you ready to take control?</h3>
                </motion.div>

                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Link to="/assignments" className="btn-primary" style={{
                        background: '#00e600',
                        color: 'white',
                        padding: '1rem 2.5rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: 'bold'
                    }}>
                        Let's go!
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Home;
