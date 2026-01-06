import React, { useState } from 'react';
import './Admissions.css';

const Admissions = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        grade: '',
        parentName: '',
        email: '',
        phone: ''
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

        if (!formData.studentName.trim()) {
            newErrors.studentName = 'Student Name is required';
            isValid = false;
        }

        if (!formData.grade) {
            newErrors.grade = 'Please select a grade';
            isValid = false;
        }

        if (!formData.parentName.trim()) {
            newErrors.parentName = 'Parent Name is required';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert(`Thank you! Application submitted successfully for ${formData.studentName}. We will contact you shortly.`);
            console.log('Admission Data:', formData);
            setFormData({
                studentName: '',
                grade: '',
                parentName: '',
                email: '',
                phone: ''
            });
            setErrors({});
        }
    };

    return (
        <div className="admissions-page">
            {/* Hero Section */}
            <div className="admissions-hero">
                <h2>Join Our Learning Community</h2>
                <p>Empowering the leaders of tomorrow through holistic education.</p>
            </div>

            <div className="section-container">
                
                {/* Highlights / Why Choose Us */}
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🎓</div>
                        <h3>Excellence</h3>
                        <p>Top-tier curriculum designed for modern challenges.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🌱</div>
                        <h3>Nurturing</h3>
                        <p>A supportive environment where every child blooms.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🏆</div>
                        <h3>Achievements</h3>
                        <p>Consistently ranked high in academic & sports performance.</p>
                    </div>
                </div>

                {/* Admission Process */}
                <div className="process-section">
                    <h2 className="section-title">Admission Process</h2>
                    <div className="process-steps">
                        <div className="step-card">
                            <span className="step-number">01</span>
                            <div className="step-content">
                                <h3>Inquiry</h3>
                                <p>Submit the online form below or visit our campus.</p>
                            </div>
                        </div>
                        <div className="step-card">
                            <span className="step-number">02</span>
                            <div className="step-content">
                                <h3>Counseling</h3>
                                <p>Meet our academic counselors for guidance.</p>
                            </div>
                        </div>
                        <div className="step-card">
                            <span className="step-number">03</span>
                            <div className="step-content">
                                <h3>Assessment</h3>
                                <p>Simple written test for grade placement.</p>
                            </div>
                        </div>
                        <div className="step-card">
                            <span className="step-number">04</span>
                            <div className="step-content">
                                <h3>Enrollment</h3>
                                <p>Complete formalities and join the family!</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Application Form */}
                <div className="inquiry-form-container">
                    <div className="form-header">
                        <h3>Start Your Journey</h3>
                        <p>Fill out the form below to register your interest.</p>
                    </div>
                    <form onSubmit={handleSubmit} noValidate className="admissions-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>Student Name</label>
                                <input 
                                    type="text" 
                                    name="studentName" 
                                    value={formData.studentName} 
                                    onChange={handleChange} 
                                    className={errors.studentName ? 'error' : ''}
                                    placeholder="Enter student's name"
                                />
                                {errors.studentName && <p className="error-msg">{errors.studentName}</p>}
                            </div>
                            <div className="form-group">
                                <label>Grade Applying For</label>
                                <select 
                                    name="grade" 
                                    value={formData.grade} 
                                    onChange={handleChange}
                                    className={errors.grade ? 'error' : ''}
                                >
                                    <option value="">Select Grade</option>
                                    <option value="1">Grade 1</option>
                                    <option value="2">Grade 2</option>
                                    <option value="3">Grade 3</option>
                                    <option value="4">Grade 4</option>
                                    <option value="5">Grade 5</option>
                                    <option value="6">Grade 6</option>
                                    <option value="7">Grade 7</option>
                                    <option value="8">Grade 8</option>
                                </select>
                                {errors.grade && <p className="error-msg">{errors.grade}</p>}
                            </div>
                        </div>

                        <div className="form-info-group">
                             <div className="form-group">
                                <label>Parent/Guardian Name</label>
                                <input 
                                    type="text" 
                                    name="parentName" 
                                    value={formData.parentName} 
                                    onChange={handleChange} 
                                    className={errors.parentName ? 'error' : ''}
                                    placeholder="Enter parent's name"
                                />
                                {errors.parentName && <p className="error-msg">{errors.parentName}</p>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    className={errors.email ? 'error' : ''}
                                    placeholder="email@example.com"
                                />
                                {errors.email && <p className="error-msg">{errors.email}</p>}
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    value={formData.phone} 
                                    onChange={handleChange} 
                                    placeholder="10 digit cellular number"
                                    className={errors.phone ? 'error' : ''}
                                />
                                {errors.phone && <p className="error-msg">{errors.phone}</p>}
                            </div>
                        </div>

                        <button type="submit" className="submit-btn">Submit Application</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admissions;
