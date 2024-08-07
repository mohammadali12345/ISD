    import  { Component } from 'react';
    import clsx from 'clsx';
    import PropTypes from 'prop-types';
    import { ChevronLeft, ChevronRight } from 'react-feather';
    import Button from './Button';

    class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        currentSlide: 0
        };
        this.autoSlide = null;
    }

    componentDidMount() {
        this.startAutoSlide();
    }

    componentWillUnmount() {
        this.stopAutoSlide();
    }

    startAutoSlide = () => {
        this.autoSlide = setInterval(this.nextSlide, 5000);
    };

    stopAutoSlide = () => {
        if (this.autoSlide) {
        clearInterval(this.autoSlide);
        }
    };

    nextSlide = () => {
        this.setSlide((this.state.currentSlide === this.props.slides.length - 1) ? 0 : this.state.currentSlide + 1);
    };

    prevSlide = () => {
        this.setSlide((this.state.currentSlide === 0) ? this.props.slides.length - 1 : this.state.currentSlide - 1);
    };

    setSlide = (index) => {
        const slideEl = document.querySelector(`#carousel-slide-${index}`);
        if (slideEl) {
        slideEl.scrollIntoView({ behavior: 'smooth' });
        this.setState({ currentSlide: index });
        }
    };

    render() {
        const { slides } = this.props;
        const { currentSlide } = this.state;

        return (
        <div className="relative">
            <ul className="flex overflow-x-auto scrollbar-hide snap-x">
            {slides.map((slide, idx) => (
                <li
                key={slide.id}
                id={`carousel-slide-${idx}`}
                className="relative min-w-full h-[80vh] snap-center"
                >
                <img
                    src={slide.image}
                    className="w-full h-full object-cover object-top"
                    alt={slide.title}
                />
                <div
                    className={clsx(
                    "absolute left-0 top-0 px-10",
                    "max-w-xl h-full flex flex-col justify-center items-center text-center",
                    "text-white bg-gradient-to-r from-gray-800/90 to-transparent",
                    "sm:items-start sm:text-left"
                    )}
                >
                    <h2 className="text-4xl sm:text-6xl font-bold mb-10">{slide.title}</h2>
                    <p className="text-xl mb-10">{slide.desc}</p>
                    <Button className="text-xl w-1/2" light>
                    Shop now
                    </Button>
                </div>
                </li>
            ))}
            </ul>
            <ul className="w-full absolute bottom-8 flex justify-center space-x-4 items-center">
            {slides.map((slide, idx) => (
                <li
                key={slide.id}
                onClick={(e) => {
                    e.preventDefault();
                    this.setSlide(idx);
                }}
                className={clsx(
                    "rounded-full bg-white cursor-pointer",
                    "transition-all h-4 shadow-md",
                    idx === currentSlide ? "w-8" : "w-4 hover:w-6"
                )}
                />
            ))}
            </ul>
            <span
            className="absolute rounded-full bg-gray-800/40 flex justify-center items-center bottom-6 left-6 z-10 cursor-pointer text-white p-2"
            onClick={this.prevSlide}
            >
            <ChevronLeft width={48} height={48} />
            </span>
            <span
            className="absolute rounded-full bg-gray-800/40 flex justify-center items-center bottom-6 right-6 z-10 cursor-pointer text-white p-2"
            onClick={this.nextSlide}
            >
            <ChevronRight width={48} height={48} />
            </span>
        </div>
        );
    }
    }

    Carousel.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        })
    ).isRequired,
    };

    export default Carousel;
