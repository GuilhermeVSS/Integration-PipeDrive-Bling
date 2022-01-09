const {Router} = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerJson = require('./doc/swagger_output.json')

const routes = new Router();

routes.use('/api/documentation', swaggerUi.serve, swaggerUi.setup(swaggerJson));

routes.get('/', (request, response)=>{
    return response.status(200).send({
        'Project': 'Technical Test for LinkApi',
        'Author': 'Guilherme Ventua'
    })
});


module.exports = routes;