import React from 'react';

const About = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="section-title">About Our School</h2>
                <p className="section-desc">Excellence Academy has been dedicated to providing top-tier education for over 20 years. Our mission is to foster a love for learning and critical thinking in every student.</p>
                <div className="about-grid">
                    <style jsx>{`
                        .about-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 30px; }
                        .about-item { background: white; padding: 30px; text-align: center; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
                        .about-item h3 { color: var(--primary-color); margin-bottom: 15px; }
                    `}</style>
                    <div className="about-item">
                        <h3>Our Mission</h3>
                        <p>To inspire and guide students towards academic and personal excellence.</p>
                    </div>
                    <div className="about-item">
                        <h3>Our Vision</h3>
                        <p>To be a global leader in innovative and inclusive education.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
