import React, { useState } from 'react';

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
        // Clear error when user starts typing
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
            alert(`Application submitted successfully for ${formData.studentName}!`);
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
        <section className="admissions-page">
            <style jsx>{`
                .admissions-page {
                    padding: 50px 20px;
                    max-width: 600px;
                    margin: 0 auto;
                }
                .admissions-page h2 {
                    text-align: center;
                    margin-bottom: 30px;
                    color: #1a237e;
                }
                .form-group {
                    margin-bottom: 15px;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                }
                .form-group input, .form-group select {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                .form-group input.error, .form-group select.error {
                    border-color: #d32f2f;
                }
                .error-msg {
                    color: #d32f2f;
                    font-size: 0.85rem;
                    margin-top: 5px;
                }
                .submit-btn {
                    width: 100%;
                    padding: 12px;
                    background-color: #1a237e;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1rem;
                    transition: background 0.3s;
                }
                .submit-btn:hover {
                    background-color: #0d47a1;
                }
            `}</style>
            <h2>Admission Inquiry</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label>Student Name</label>
                    <input 
                        type="text" 
                        name="studentName" 
                        value={formData.studentName} 
                        onChange={handleChange} 
                        className={errors.studentName ? 'error' : ''}
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
                    </select>
                    {errors.grade && <p className="error-msg">{errors.grade}</p>}
                </div>
                <div className="form-group">
                    <label>Parent/Guardian Name</label>
                    <input 
                        type="text" 
                        name="parentName" 
                        value={formData.parentName} 
                        onChange={handleChange} 
                        className={errors.parentName ? 'error' : ''}
                    />
                    {errors.parentName && <p className="error-msg">{errors.parentName}</p>}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className={errors.email ? 'error' : ''}
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
                        placeholder="10 digit number"
                        className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <p className="error-msg">{errors.phone}</p>}
                </div>
                <button type="submit" className="submit-btn">Submit Application</button>
            </form>
        </section>
    );
};

export default Admissions;
