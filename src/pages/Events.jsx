import React from 'react';

const Events = () => {
    const events = [
        { id: 1, title: 'Annual Sports Day', date: 'March 15, 2026', description: 'Join us for a day of fun and competition at the school ground.' },
        { id: 2, title: 'Science Fair', date: 'April 10, 2026', description: 'Showcasing innovative projects by our talented students.' },
        { id: 3, title: 'Music Concert', date: 'May 5, 2026', description: 'An evening of musical performances by the school band and choir.' },
    ];

    return (
        <section className="events-page">
            <style jsx>{`
                .events-page {
                    padding: 50px 20px;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .events-page h2 {
                    text-align: center;
                    margin-bottom: 40px;
                    font-size: 2.5rem;
                    color: #1a237e;
                }
                .event-card {
                    background: #fff;
                    padding: 20px;
                    margin-bottom: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                    border-left: 5px solid #1a237e;
                }
                .event-card h3 {
                    margin-bottom: 10px;
                    color: #333;
                }
                .event-date {
                    color: #666;
                    font-weight: bold;
                    margin-bottom: 10px;
                    display: block;
                }
            `}</style>
            <h2>Upcoming Events</h2>
            <div className="events-list">
                {events.map(event => (
                    <div key={event.id} className="event-card">
                        <h3>{event.title}</h3>
                        <span className="event-date">{event.date}</span>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Events;
