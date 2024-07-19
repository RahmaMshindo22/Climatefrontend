import React, { useState } from 'react';
import './event.css';

function EventCreationForm() {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        time: '',
        location: '',
        description: '',
        ticketPrices: '',
        banner: null,
        agenda: null,
        reminders: false,
        feedback: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataObj = new FormData();

        for (const key in formData) {
            if (formData[key] !== null && formData[key] !== '') {
                formDataObj.append(key, formData[key]);
            }
        }

        try {
            const response = await fetch('http://localhost:8080/api/create', {
                method: 'POST',
                body: formDataObj,
            });

            if (response.ok) {
                const createdEvent = await response.json();
                alert('Event created successfully!');
                console.log(createdEvent);
            } else {
                alert('Failed to create event');
            }
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    return (
        <div className="container">
            <h1>Create Event</h1>
            <form id="eventForm" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="title">Event Title</label>
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            value={formData.title} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input 
                            type="date" 
                            id="date" 
                            name="date" 
                            value={formData.date} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="time">Time</label>
                        <input 
                            type="time" 
                            id="time" 
                            name="time" 
                            value={formData.time} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input 
                            type="text" 
                            id="location" 
                            name="location" 
                            value={formData.location} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea 
                        id="description" 
                        name="description" 
                        rows="4" 
                        value={formData.description} 
                        onChange={handleChange} 
                        required
                    ></textarea>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="banner">Event Banner/Image</label>
                        <input 
                            type="file" 
                            id="banner" 
                            name="banner" 
                            accept="image/*" 
                            onChange={handleFileChange} 
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="agenda">Event Agenda</label>
                        <input 
                            type="file" 
                            id="agenda" 
                            name="agenda" 
                            accept=".pdf,.doc,.docx" 
                            onChange={handleFileChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reminders">Send Reminders</label>
                        <input 
                            type="checkbox" 
                            id="reminders" 
                            name="reminders" 
                            checked={formData.reminders} 
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="feedback">Enable Feedback Collection</label>
                    <input 
                        type="checkbox" 
                        id="feedback" 
                        name="feedback" 
                        checked={formData.feedback} 
                        onChange={handleChange} 
                    />
                </div>
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
}

export default EventCreationForm;
