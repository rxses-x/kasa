import React, { useState } from 'react'

const Collapse = ({ title, children, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='collapse'>
            <button onClick={toggleCollapse} className='collapse__button'>
                {title}
                <span className="collapse__icon">{isOpen ? '▼' : '▲'}</span>
            </button>
            {isOpen && (
                <div className="collapse__content">
                {children}
                </div>
            )}
        </div>
    )
}

export default Collapse;