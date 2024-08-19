import React, { useState } from 'react';

function Dropdown({ title, items }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`dropdown ${isOpen ? 'open' : ''}`}>
            <div className="title" onClick={toggleDropdown}>
                <h3>{title}</h3>
                <span>
                    <i className={`fas fa-chevron-up ${isOpen ? 'fa-chevron-down' : ''}`}></i>
                </span>
            </div>
            <div className="content">
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;
