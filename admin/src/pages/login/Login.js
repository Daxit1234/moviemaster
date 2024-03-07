import React, { useState } from 'react';
import SideBar from '../../components/sideBar/SideBar';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault();
        if (pass === 'Admin1234') {
            navigate('/dashboard');
        } else {
            setError('Your password is wrong');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={handleSubmit} className="w-50">
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Enter AdminPassword</label>
                    <input
                        onChange={(e) => setPass(e.target.value)}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="AdminPassword"
                    />
                </div>
                <div className="form-group text-danger">
                    <label>{error}</label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
