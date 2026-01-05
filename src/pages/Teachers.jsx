import React from 'react';

const Teachers = () => {
    const teachers = [
        { id: 1, name: 'Jane Doe', role: 'Science Dept. Head' },
        { id: 2, name: 'John Smith', role: 'Mathematics Lead' },
        { id: 3, name: 'Emily White', role: 'Arts Instructor' },
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="section-title">Meet Our Teachers</h2>
                <div className="card-grid">
                    <style jsx>{`
                        .avatar { width: 100px; height: 100px; background-color: #ddd; border-radius: 50%; margin: 0 auto 15px; background-image: url('https://source.unsplash.com/100x100/?portrait'); background-size: cover; }
                        .team-card { background: white; padding: 30px; border-radius: 8px; text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
                        .team-card h3 { margin-bottom: 5px; color: var(--primary-color); }
                    `}</style>
                    {teachers.map(teacher => (
                        <div className="team-card" key={teacher.id}>
                            <div className="avatar"></div>
                            <h3>{teacher.name}</h3>
                            <p>{teacher.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Teachers;
