const appError = (message, status) => {
    class AppError extends Error {
        constructor(message, status) {
            super();
            Error.captureStackTrace(this, this.constructor);
            this.name = this.constructor.name;
            this.message = message || 'Something went wrong. Please try again.';
            this.status = status || 500;
        }
    }
    throw new AppError(message, status);
}

function customError(req, res, next) {
    res.appError = appError;
    next();
}

module.exports = customError;