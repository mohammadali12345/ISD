    import  { useState } from 'react';
    import PropTypes from 'prop-types';

    // Shared Tailwind CSS classes
    const buttonClasses = "bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-md";
    const containerClasses = "flex justify-center items-center space-x-2 mt-4";
    const textClasses = "text-muted-foreground";

    // Button component
    const PageButton = ({ ariaLabel, imgSrc, imgAlt, onClick }) => (
    <button className={buttonClasses} aria-label={ariaLabel} onClick={onClick}>
        <img aria-hidden="true" alt={imgAlt} src={imgSrc} />
    </button>
    );

    PageButton.propTypes = {
    ariaLabel: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    };

    // Pagination component
    const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    return (
        <div className={containerClasses}>
        <PageButton
            ariaLabel="Previous Page"
            imgSrc="https://openui.fly.dev/openui/24x24.svg?text=⬅️"
            imgAlt="left-arrow"
            onClick={handlePreviousPage}
        />
        <span className={textClasses}>Page {currentPage} of {totalPages}</span>
        <PageButton
            ariaLabel="Next Page"
            imgSrc="https://openui.fly.dev/openui/24x24.svg?text=➡️"
            imgAlt="right-arrow"
            onClick={handleNextPage}
        />
        </div>
    );
    };

    export default Pagination;
