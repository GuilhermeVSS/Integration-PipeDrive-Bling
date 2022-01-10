require('dotenv').config();
const axios = require('axios');

//axios config setup to Bling Api
const blingService = axios.create({
    baseURL: process.env.BLING_URL,
    params: {
        apikey: process.env.BLING_TOKEN,
    },
    headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
});

module.exports = blingService;