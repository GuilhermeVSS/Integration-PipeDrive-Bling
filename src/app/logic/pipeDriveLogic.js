const pipeDriveService = require('../services/pipeDriveService');

class pipeDriveLogic {
    async getDealsWon() {
        var dealsWon = await pipeDriveService.get('/deals?status=won');
        return dealsWon.data.data
    }
}

module.exports = new pipeDriveLogic();