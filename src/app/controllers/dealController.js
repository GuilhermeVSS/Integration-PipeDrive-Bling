const pipeDriveLogic = require('../logic/pipeDriveLogic')
const blingLogic = require('../logic/blingLogic')
const helper = require('../helpers/index');
const { Deal } = require('../models/dealModel');
const { Profit } = require('../models/profitModel');

class dealController {
    async syncDeals(request, response) {
        try {
            const currentDate = helper.getNewDate();
            var profitFound = await Profit.findOne({ date: currentDate });
            if (!profitFound) {
                profitFound = new Profit({
                    value: 0.0,
                    date: currentDate
                })
                await profitFound.save();
            }

            const dealsWon = await pipeDriveLogic.getDealsWon();

            for (const deal of dealsWon) {
                const dealFound = await Deal.findById({ _id: deal.id });
                if (dealFound) continue;
                const newDeal = new Deal({ _id: deal.id });
                await newDeal.save();
                const { newOrder, totalValue } = helper.createOrderObject(deal);
                profitFound.value += parseFloat(totalValue);
                await blingLogic.postOrder(newOrder);
            }

            await Profit.findByIdAndUpdate(profitFound["_id"], { value: profitFound.value });

            return response.status(201).json({
                statusCode: 201,
                message: "Deals have been successfully synced"
            })
        } catch (error) {
            response.status(500).json({
                statusCode: 500,
                message: "Something went Wrong"
            })
        }
    }

    async getProfits(request, response) {
        try {
            const allProfits = await Profit.find();
            return response.status(200).json({
                statusCode: 200,
                data: allProfits
            });
        } catch (error) {
            return response.json({
                statusCode: 500,
                message: "Something went wrong"
            })
        }
    }
}

module.exports = new dealController();