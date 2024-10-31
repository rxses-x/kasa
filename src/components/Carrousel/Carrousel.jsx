import React, { useState } from 'react';

const Carrousel = ({ images }) => {
    console.log('images', images)
    const [ currentIndex, setCurrentIndex ] = useState(0)

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    return (
        <div className='slideshow'>
            <div className='slideshow__image-container'>
                <img
                    src = { images[currentIndex] }
                    alt= { `Slide ${currentIndex + 1}` }
                    className="slideshow__image"
                />
                <button className="slideshow__button slideshow__button--left" onClick={handlePrev}>
                    &#10094; {/* Left arrow */}
                </button>
                <button className="slideshow__button slideshow__button--right" onClick={handleNext}>
                    &#10095; {/* Right arrow */}
                </button>
                <p className="slideshow__button slideshow__button--indicator">
                    {currentIndex + 1}/{images.length}
                </p>
            </div>
        </div>
    )
}

export default Carrousel