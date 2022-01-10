const bling = require('../Services/BlingService');
const qs = require('qs');
const js2xmlparser = require('js2xmlparser');

class blingLogic {

    /**
    * Method to post a new Order into Bling
    *
    * @param order - order object become from pipeDrive
    * @return {Object<{newOrder: {Object}, totalValue: totalCost}>}
    */
    async postOrder(order) {
        const orderXml = js2xmlparser.parse('pedido', order);
        const params = qs.stringify({ xml: orderXml });
        const result = await bling.post('/pedido/json/', params);
        if (result.data.retorno.erros) {
            throw new Error('Something went wrong with Bling');
        } else {
            return result.data.retorno.pedidos
        }
    }
}

module.exports = new blingLogic();