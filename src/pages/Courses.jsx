import React from 'react';

const Courses = () => {
    const courses = [
        { id: 1, title: 'Science', desc: 'Explore the wonders of physics, chemistry, and biology with our state-of-the-art labs.', color: '#4CAF50' },
        { id: 2, title: 'Arts & Humanities', desc: 'Unleash creativity through literature, history, and visual arts programs.', color: '#E91E63' },
        { id: 3, title: 'Mathematics', desc: 'Build strong analytical skills with our comprehensive mathematics curriculum.', color: '#2196F3' }
    ];

    return (
        <section className="section-padding bg-light">
            <div className="container">
                <h2 className="section-title">Our Courses</h2>
                <div className="card-grid">
                    {courses.map(course => (
                        <div className="card" key={course.id}>
                            <div className="card-header" style={{ backgroundColor: course.color }}>
                                <h3>{course.title}</h3>
                            </div>
                            <div className="card-body">
                                <p>{course.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
