const categoryRoute = require('./categoryRoute');
const deviceRoute = require('./deviceRoute')

const routes = (app) => {
    app.use('/category', categoryRoute)
    app.use('/device', deviceRoute)
}

module.exports = routes