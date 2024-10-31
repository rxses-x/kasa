import React, { useState, useEffect } from 'react';

const Carrousel = ({ images }) => {
    const [ currentIndex, setCurrentIndex ] = useState(0)

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    useEffect(() => {
        // Auto-advance the carousel every 5 seconds
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        // Cleanup: clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [currentIndex]); // Dependencies: rerun when currentIndex changes

    return (
        <div className='slideshow'>
            <div className='slideshow__image-container'>
                <img
                    src = { images[currentIndex] }
                    alt= { `Slide ${currentIndex + 1}` }
                    className="slideshow__image"
                />
                {images.length > 1 && (
                    <>
                        <button
                            className="slideshow__button slideshow__button--left"
                            onClick={handlePrev}
                        >
                            &#10094; {/* Left arrow */}
                        </button>
                        <button
                            className="slideshow__button slideshow__button--right"
                            onClick={handleNext}
                        >
                            &#10095; {/* Right arrow */}
                        </button>
                        <p className="slideshow__button slideshow__button--indicator">
                            {currentIndex + 1}/{images.length}
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Carrousel