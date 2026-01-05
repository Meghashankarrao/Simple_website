import React from 'react';

const Contact = () => {
    return (
        <section className="section-padding bg-dark">
            <div className="container">
                <h2 className="section-title text-white">Contact Us</h2>
                <div className="contact-info text-white" style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.2rem' }}>
                    <p><strong>Address:</strong> 123 Education Lane, Knowledge City, State, 54321</p>
                    <p><strong>Email:</strong> info@excellenceacademy.edu</p>
                    <p><strong>Phone:</strong> (555) 123-4567</p>
                </div>
                
                {/* Mock Form */}
                <form style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '8px' }}>
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <textarea rows="5" placeholder="Message" className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn" onClick={(e) => e.preventDefault()}>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
