import React from 'react';

const Notices = () => {
    const notices = [
        { id: 1, title: 'Exam Schedule Released', date: '2026-02-20', content: 'The final exam schedule for classes X and XII is now available on the portal.' }, // Future
        { id: 2, title: 'Holiday Announcement', date: '2026-01-25', content: 'The school will remain closed on Jan 26th for Republic Day celebrations.' }, // Recent
        { id: 3, title: 'Parent-Teacher Meeting', date: '2026-01-01', content: 'PTM for all classes will be held on Saturday from 9 AM to 1 PM.' }, // Old
        { id: 4, title: 'Annual Function', date: '2025-12-15', content: 'Annual function preparation starts next week.' },
    ];

    // Helper to check if date is within last 15 days (mocking "recent" for demo purposes)
    // In a real app, compare with current date. Since we are in 2026-01-05:
    // 2026-01-25 is future/recent.
    // Let's just say anything in 2026 is "New" for this demo context or use a simple logic.
    const isNew = (dateString) => {
        // Just for demo, let's mark the first two as new or use date logic
        const date = new Date(dateString);
        const today = new Date('2026-01-05'); // Fixed date based on prompt context
        const diffTime = Math.abs(date - today);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 30 && date >= new Date('2025-12-01'); // Broad range for demo visibility
    };

    return (
        <section className="notices-page">
            <style jsx>{`
                .notices-page {
                    padding: 50px 20px;
                    max-width: 1200px;
                    margin: 0 auto;
                    overflow: hidden;
                }
                .notices-page h2 {
                    text-align: center;
                    margin-bottom: 40px;
                    font-size: 2.5rem;
                    color: #d32f2f;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
                }
                .marquee-container {
                    width: 100%;
                    overflow: hidden;
                    background: linear-gradient(to right, #e4e5e1ff, #f6f2f5ff);
                    border: 0px groove #bd7f87ff;
                    border-radius: 12px;
                    box-shadow: inset 0 0 15px rgba(0,0,0,0.05);
                    padding: 40px 0;
                    position: relative;
                }
                .marquee-container::before, .marquee-container::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    width: 100px;
                    height: 100%;
                    z-index: 2;
                    pointer-events: none;
                }
                .marquee-container::before {
                    left: 0;
                    background: linear-gradient(to right, white, transparent);
                }
                .marquee-container::after {
                    right: 0;
                    background: linear-gradient(to left, white, transparent);
                }
                .marquee {
                    display: flex;
                    gap: 30px;
                    animation: scrollLeft 5s linear infinite;
                    width: max-content;
                    padding: 10px 0; /* Space for hover effects */
                }
                .marquee:hover {
                    animation-play-state: paused;
                }
                @keyframes scrollLeft {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
                .notice-card {
                    background: #dcbabaff;
                    padding: 25px;
                    width: 320px;
                    flex-shrink: 0;
                    border-radius: 15px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
                    border-top: 5px solid #f5fe92ff;
                    border-left: none;
                    position: relative;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                .notice-card:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 8px 25px rgba(210, 204, 204, 0.2);
                }
                .notice-title {
                    font-size: 1.25rem;
                    color: #333;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 12px;
                }
                .notice-date {
                    font-size: 0.85rem;
                    color: #888;
                    display: block;
                    margin-bottom: 8px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .notice-content {
                    margin-top: 5px;
                    color: #2e2d2dff;
                    font-size: 1rem;
                    line-height: 1.5;
                }
                .new-badge {
                    background: linear-gradient(135deg, #ffeb3b, #fdd835);
                    color: #d32f2f;
                    padding: 4px 10px;
                    border-radius: 20px;
                    font-size: 0.75rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.15);
                    animation: pulse 1.5s infinite;
                    white-space: nowrap;
                    border: 1px solid #fbc02d;
                }
                @keyframes pulse {
                    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 235, 59, 0.7); }
                    70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(255, 235, 59, 0); }
                    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 235, 59, 0); }
                }
            `}</style>
            <h2>Notice Board</h2>
            <div className="marquee-container">
                <div className="marquee">
                    {notices.map(notice => (
                        <div key={notice.id} className="notice-card">
                            <span className="notice-date">{notice.date}</span>
                            <div className="notice-title">
                                {notice.title}
                                {isNew(notice.date) && <span className="new-badge">New</span>}
                            </div>
                            <p className="notice-content">{notice.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Notices;
