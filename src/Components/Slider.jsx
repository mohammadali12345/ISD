import { useState } from 'react';


// Shared Tailwind CSS class strings
const containerClasses = "relative w-full max-w-7xl mx-auto overflow-hidden";
const sliderClasses = "flex transition-transform duration-700 ease-in-out";
const slideClasses = "flex-shrink-0 w-full h-96 relative";
const imageClasses = "w-full h-full object-cover absolute top-0 left-0";
const navButtonClasses = "absolute top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300 ease-in-out";
// const navButtonHiddenClasses = "hidden md:block";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Define the image URLs inside the component
    const images = [
        "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/3875430/pexels-photo-3875430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/8387123/pexels-photo-8387123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={containerClasses}>
            <div className={sliderClasses} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className={slideClasses}>
                        <img src={image} alt={`Slide ${index + 1}`} className={imageClasses} />
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className={`${navButtonClasses} left-2`}>
                <span aria-hidden="true">&lt;</span>
            </button>
            <button onClick={nextSlide} className={`${navButtonClasses} right-2`}>
                <span aria-hidden="true">&gt;</span>
            </button>
        </div>
    );
};

export default Slider;
