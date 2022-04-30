const errorHandler = (err, req, res, next) => {
    const statusCode = res.StatusCode || 500 
    res.status(statusCode)
    res.json({
        message: err.message,
        operation: 'update',
        success: false,
        id: req.params.id,
        stack: err.stack
    })



}

module.exports = {
    errorHandler,
}