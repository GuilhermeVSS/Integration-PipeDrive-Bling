const pipeDriveService = require('../services/pipeDriveService');

class pipeDriveLogic {
    /**
    * Method to get all deal with won status
    *
    * @return {Object<{data}>}
    */
    async getDealsWon() {
        var dealsWon = await pipeDriveService.get('/deals?status=won');
        return dealsWon.data.data
    }
}

module.exports = new pipeDriveLogic();