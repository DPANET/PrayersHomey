"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request-promise-native");
const config = require("nconf");
config.file('env.json');
var mainUrl = `http://localhost:${config.get("PORT")}`;
module.exports = [
    {
        method: 'GET',
        path: '/PrayersManager/PrayersSettings',
        public: true,
        fn: async (args, callback) => {
            let url = `${mainUrl}/PrayerManager/PrayersSettings`;
            let queryString = {
                uri: url,
                qs: {
                    uri: url,
                    headers: {
                        'User-Agent': 'Homey-Assistant'
                    }
                },
                method: 'GET',
                json: true,
                resolveWithFullResponse: false
            };
            return await request.get(queryString);
        }
    },
    {
        method: 'GET',
        path: '/PrayersManager/PrayersAdjustments',
        public: true,
        fn: async (args, callback) => {
            let url = `${mainUrl}/PrayerManager/PrayersAdjustments`;
            let queryString = {
                uri: url,
                qs: {
                    uri: url,
                    headers: {
                        'User-Agent': 'Homey-Assistant'
                    }
                },
                method: 'GET',
                json: true,
                resolveWithFullResponse: false
            };
            return await request.get(queryString);
        }
    },
    {
        method: 'GET',
        path: '/PrayersManager/Prayers"',
        public: true,
        fn: async (args, callback) => {
            let url = `${mainUrl}/PrayerManager/Prayers`;
            let queryString = {
                uri: url,
                qs: {
                    uri: url,
                    headers: {
                        'User-Agent': 'Homey-Assistant'
                    }
                },
                method: 'GET',
                json: true,
                resolveWithFullResponse: false
            };
            return await request.get(queryString);
        }
    },
    {
        method: 'GET',
        path: '/PrayersManager/LoadSettings"',
        public: true,
        fn: async (args, callback) => {
            let url = `${mainUrl}/PrayerManager/LoadSettings`;
            let queryString = {
                uri: url,
                qs: {
                    uri: url,
                    headers: {
                        'User-Agent': 'Homey-Assistant'
                    }
                },
                method: 'GET',
                json: true,
                resolveWithFullResponse: false
            };
            return await request.get(queryString);
        }
    },
    {
        method: 'GET',
        path: '/PrayersManager/SearchLocation/"',
        public: true,
        fn: async (args, callback) => {
            let url = `${mainUrl}/PrayerManager/SearchLocation?${args.query}`;
            let queryString = {
                uri: url,
                qs: {
                    uri: url,
                    headers: {
                        'User-Agent': 'Homey-Assistant'
                    }
                },
                method: 'GET',
                json: true,
                resolveWithFullResponse: false
            };
            return await request.get(queryString);
        }
    },
    {
        method: 'GET',
        path: '/PrayersManager/PrayersLocation',
        public: true,
        fn: async (args, callback) => {
            let url = `${mainUrl}/PrayerManager/PrayersLocation`;
            let queryString = {
                uri: url,
                qs: {
                    uri: url,
                    headers: {
                        'User-Agent': 'Homey-Assistant'
                    }
                },
                method: 'GET',
                json: true,
                resolveWithFullResponse: false
            };
            return await request.get(queryString);
        }
    },
    {
        method: 'GET',
        path: '/PrayersManager/PrayersViewMobile',
        public: true,
        fn: async (args, callback) => {
            let url = `${mainUrl}/PrayerManager/PrayersViewMobile?${args.query}`;
            let queryString = {
                uri: url,
                method: 'GET',
                json: true,
                resolveWithFullResponse: false
            };
            return await request.get(queryString);
        }
    },
    {
        method: 'POST',
        path: '/PrayersManager/PrayersViewMobile',
        public: true,
        fn: async (args, callback) => {
            let url = `${mainUrl}/PrayerManager/PrayersViewMobile`;
            let queryString = {
                uri: url,
                method: 'POST',
                json: true,
                resolveWithFullResponse: false,
                body: args.body
            };
            return await request.post(queryString);
        }
    }
];
