const { Router } = require('express');
const dealController = require('./app/controllers/dealController');
const swaggerUi = require('swagger-ui-express');
const swaggerJson = require('./doc/swagger_output.json')

const routes = new Router();

routes.use('/api/documentation', swaggerUi.serve, swaggerUi.setup(swaggerJson));

routes.get('/', (request, response) => {
    return response.status(200).send({
        'Project': 'Technical Test for LinkApi',
        'Author': 'Guilherme Ventua'
    })
});

routes.get('/api/sync-deals', dealController.syncDeals);
routes.get('/api/testeprofit', dealController.testeMongo);


module.exports = routes;