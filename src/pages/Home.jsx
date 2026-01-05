import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="hero">
            <style jsx>{`
                .hero {
                    background: linear-gradient(rgba(26, 35, 126, 0.8), rgba(26, 35, 126, 0.8)), url('https://source.unsplash.com/1600x900/?school,education');
                    background-size: cover;
                    background-position: center;
                    height: 80vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    color: white;
                }
                .hero h2 { font-size: 3.5rem; margin-bottom: 20px; }
                .hero p { font-size: 1.5rem; margin-bottom: 30px; }
            `}</style>
            <div className="hero-content">
                <h2>Empowering the Leaders of Tomorrow</h2>
                <p>Quality education for a brighter future.</p>
                <Link to="/courses" className="btn">Explore Courses</Link>
            </div>
        </section>
    );
};

export default Home;
