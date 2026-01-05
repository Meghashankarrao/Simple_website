import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock login validation
        if (credentials.username && credentials.password) {
            alert('Login Successful! Welcome ' + credentials.username);
            navigate('/');
        } else {
            alert('Please enter username and password');
        }
    };

    return (
        <section className="login-page">
            <style jsx>{`
                .login-page {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 80vh;
                    background-color: #f5f5f5;
                }
                .login-container {
                    background: white;
                    padding: 40px;
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                    width: 350px;
                }
                .login-container h2 {
                    text-align: center;
                    margin-bottom: 20px;
                    color: #1a237e;
                }
                .form-group {
                    margin-bottom: 20px;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 5px;
                    color: #555;
                }
                .form-group input {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                }
                .login-btn {
                    width: 100%;
                    padding: 10px;
                    background-color: #1a237e;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1rem;
                }
                .login-btn:hover {
                    background-color: #0d47a1;
                }
            `}</style>
            <div className="login-container">
                <h2>Student Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </section>
    );
};

export default Login;
