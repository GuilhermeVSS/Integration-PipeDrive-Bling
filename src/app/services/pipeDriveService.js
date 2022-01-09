require('dotenv').config();
const axios = require('axios');

//axios config setup to PipeDrive Api
const pipeDriveService = axios.create({
    baseURL: process.env.PIPEDRIVE_URL,
    params: {
        api_token: process.env.PIPEDRIVE_TOKEN,
    },
    headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
});

module.exports = pipeDriveService;