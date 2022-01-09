const createOrderObject = (deal) => {
    return {
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
                    qtde: (Math.floor(Math.random() * (80)) + 1),
                    vlr_unit: deal.value,
                    vlr_desconto: Math.floor(Math.random())
                }
            ],
        },
        parcelas: {
            parcela: [],
        },
        obs: deal.org_name,
        obs_internas: deal.owner_name
    }
};

module.exports = {
    createOrderObject
}