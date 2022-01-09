const pipeDriveLogic = require('../logic/pipeDriveLogic')
const blingLogic = require('../logic/blingLogic')
const { createOrderObject } = require('../helpers/index');

class dealController {
    async syncDeals(request, response) {
        try {
            const dealsWon = await pipeDriveLogic.getDealsWon();
            for (const deal of dealsWon) {
                const newOrder = createOrderObject(deal);
                await blingLogic.postOrder(newOrder);
            }
            return response.status(201).json({
                message: "Deals have benn successfully synced"
            })
        } catch (error) {
            response.status(500).json({ message: "Something went Wrong" })
        }
    }
}

module.exports = new dealController();