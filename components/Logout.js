import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Remove user session data (assuming you store the token in localStorage)
        localStorage.removeItem('userToken');
        // Redirect to login page
        navigate('/');
    }, [navigate]);

    return (
        <div className="logout-message">
            Logging out...
        </div>
    );
};

export default Logout;
