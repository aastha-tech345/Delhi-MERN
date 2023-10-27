module.exports = (app, route) => {
    const userRoute = require('./user.route')(app, route);
}