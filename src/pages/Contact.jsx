import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message cannot be empty';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Message sent successfully!');
            console.log('Contact Form Data:', formData);
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        }
    };

    return (
        <section className="contact-section">
            <style jsx>{`
                .contact-section {
                    min-height: 100vh;
                    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                    padding: 80px 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .contact-container {
                    display: flex;
                    flex-wrap: wrap;
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                    overflow: hidden;
                    max-width: 1000px;
                    width: 100%;
                    animation: fadeIn 0.8s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .contact-info {
                    flex: 1 1 400px;
                    background: #1a237e;
                    color: white;
                    padding: 50px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .contact-info h2 {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                    position: relative;
                }
                .contact-info h2::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -10px;
                    width: 50px;
                    height: 3px;
                    background: #ffeb3b;
                }
                .info-item {
                    margin-bottom: 30px;
                    display: flex;
                    align-items: center;
                    font-size: 1.1rem;
                }
                .info-icon {
                    width: 40px;
                    height: 40px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 15px;
                    font-size: 1.2rem;
                }
                .contact-form {
                    flex: 1 1 400px;
                    padding: 50px;
                    background: #fff;
                }
                .form-group {
                    margin-bottom: 25px;
                    position: relative;
                }
                .form-control {
                    width: 100%;
                    padding: 15px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    font-size: 1rem;
                    transition: all 0.3s;
                    background: #f9f9f9;
                }
                .form-control:focus {
                    background: #fff;
                    border-color: #1a237e;
                    box-shadow: 0 0 0 4px rgba(26, 35, 126, 0.1);
                    outline: none;
                }
                .form-control.error {
                    border-color: #d32f2f;
                    background: #fff0f0;
                }
                .error-msg {
                    color: #d32f2f;
                    font-size: 0.85rem;
                    margin-top: 5px;
                    position: absolute;
                    bottom: -20px;
                    left: 5px;
                }
                .submit-btn {
                    width: 100%;
                    padding: 15px;
                    background: #1a237e;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 1.1rem;
                    font-weight: bold;
                    cursor: pointer;
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .submit-btn:hover {
                    box-shadow: 0 5px 15px rgba(26, 35, 126, 0.3);
                    transform: translateY(-2px);
                    background: #0d47a1;
                }
                .submit-btn:active {
                    transform: translateY(0);
                }
            `}</style>
            
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p style={{marginBottom: '40px', opacity: 0.8}}>Have questions regarding admissions, academics, or campus life? We'd love to hear from you.</p>
                    
                    <div className="info-item">
                        <div className="info-icon">📍</div>
                        <div>
                            <strong>Address</strong><br/>
                            123 Education Lane, Knowledge City
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <div className="info-icon">✉️</div>
                        <div>
                            <strong>Email</strong><br/>
                            info@excellenceacademy.edu
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <div className="info-icon">📞</div>
                        <div>
                            <strong>Phone</strong><br/>
                            (555) 123-4567
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Your Name" 
                                className={`form-control ${errors.name ? 'error' : ''}`}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="error-msg">{errors.name}</p>}
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Your Email" 
                                className={`form-control ${errors.email ? 'error' : ''}`} 
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="error-msg">{errors.email}</p>}
                        </div>
                        <div className="form-group">
                            <textarea 
                                rows="5" 
                                name="message"
                                placeholder="How can we help you?" 
                                className={`form-control ${errors.message ? 'error' : ''}`}
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            {errors.message && <p className="error-msg">{errors.message}</p>}
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
