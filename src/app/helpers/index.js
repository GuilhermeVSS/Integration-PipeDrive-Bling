/**
* Method to create a new Order object based on a deal
*
* @param deal - deal object become from pipeDrive
* @return {Object<{newOrder: {Object}, totalValue: totalCost}>}
*/
const createOrderObject = (deal) => {
    const quantity = (Math.floor(Math.random() * (80)) + 1);
    const discount = Math.floor(Math.random());
    const newOrder = {
        cliente: {
            id: deal.org_id.owner_id,
            nome: deal.org_name,
            tipoPessoa: 'J'
        },
        transporte: {
            volumes: [
                {
                    servico: deal.stage_order_nr,
                    codigoRastreamento: deal.creator_user_id.id
                },
            ]
        },
        itens: {
            item: [
                {
                    codigo: deal.org_name + '-' + deal.org_id.owner_id,
                    descricao: deal.org_name,
                    qtde: quantity,
                    vlr_unit: deal.value,
                    vlr_desconto: discount
                }
            ],
        },
        parcelas: {
            parcela: [],
        },
        obs: deal.org_name,
        obs_internas: deal.owner_name
    }

    return {
        newOrder: newOrder,
        totalValue: parseFloat((quantity * deal.value) - (quantity * deal.value * discount))
    }
};

/**
* Method to create a compatible date dd-mm-yyyy based on current date
*
* @return {String<{fullDate}>}
*/
const getNewDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const fullDate = `${day}-${month}-${year}`;
    return fullDate;
}

module.exports = {
    getNewDate,
    createOrderObject
}