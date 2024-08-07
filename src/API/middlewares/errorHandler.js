/**
 * Middleware to handle errors.
 * 
 * @param {Object} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
export const errorHandler = (err, req, res,next) => {
    console.error(err.stack); // Log the error stack for debugging

    // Determine the status code based on the error
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500; // Default to 500 if not set

    // Send a JSON response with error details
    res.status(statusCode).json({
        error: {
            message: err.message || 'An unexpected error occurred',
            stack: err.stack || '' // Include stack trace for debugging
        }
    });
};

export default errorHandler;
