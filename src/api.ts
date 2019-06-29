import Homey = require('homey');
import request= require("request-promise-native");
import config= require('nconf');
config.file('env.json');
var mainUrl = `http://localhost:${config.get("PORT")}`
module.exports=[
{
    method:'GET',
    path:'/PrayersManager/PrayersSettings',
    public:true,
    fn: async (args:any,callback:any)=>
    {
        let url:string= `${mainUrl}/PrayerManager/PrayersSettings`;
        let queryString: any =
        {
            uri: url,
            method: 'GET',
            json: true,
            resolveWithFullResponse: false

        };
        return await request.get(queryString);
    }
},
{
    method:'GET',
    path:'/PrayersManager/PrayersAdjustments',
    public:true,
    fn: async (args:any,callback:any)=>
    {
        let url:string=`${mainUrl}/PrayerManager/PrayersAdjustments`;
        let queryString: any =
        {
            uri: url,
            method: 'GET',
            json: true,
            resolveWithFullResponse: false

        };
        return await request.get(queryString);
    }
},
{
    method:'GET',
    path:'/PrayersManager/Prayers"',
    public:true,
    fn: async (args:any,callback:any)=>
    {
        let url:string=`${mainUrl}/PrayerManager/Prayers`;
        let queryString: any =
        {
            uri: url,
            method: 'GET',
            json: true,
            resolveWithFullResponse: false

        };
        return await request.get(queryString);
    }
},
{
    method:'GET',
    path:'/PrayersManager/LoadSettings"',
    public:true,
    fn: async (args:any,callback:any)=>
    {
        let url:string=`${mainUrl}/PrayerManager/LoadSettings`;
        let queryString: any =
        {
            uri: url,
            method: 'GET',
            json: true,
            resolveWithFullResponse: false

        };
        return await request.get(queryString);
    }
},
{
    method:'GET',
    path:'/PrayersManager/SearchLocation/"',
    public:true,
    fn: async (args:any,callback:any)=>
    {
        let url:string=`${mainUrl}/PrayerManager/SearchLocation`;
        let queryString: any =
        {
            uri: url,
            qs: args.query,
            method: 'GET',
            json: true,
            useQuerystring:true,
            resolveWithFullResponse: false

        };
        return await request.get(queryString);
    }
},
{
    method:'GET',
    path:'/PrayersManager/PrayersLocation',
    public:true,
    fn: async (args:any,callback:any)=>
    {
        let url:string=`${mainUrl}/PrayerManager/PrayersLocation`;
        let queryString: any =
        {
            uri: url,
            method: 'GET',
            json: true,
            resolveWithFullResponse: false

        };
        return await request.get(queryString);
    }
},
{
    method:'GET',
    path:'/PrayersManager/PrayersViewMobile',
    public:true,
    fn: async (args:any,callback:any)=>
    {
        let url:string=`${mainUrl}/PrayerManager/PrayersViewMobile`;
        let queryString: any =
        {
            uri: url,
            method: 'GET',
            json: true,
            qs: args.query,
            resolveWithFullResponse: false,
            useQuerystring: true


        };
        return await request.get(queryString);
    }
},
{
    method:'POST',
    path:'/PrayersManager/PrayersViewMobile',
    public:true,
    fn: async (args:any,callback:any)=>
    {
        let url:string=`${mainUrl}/PrayerManager/PrayersViewMobile`;
        let queryString: any =
        {
            uri: url,
            method: 'POST',
            json: true,
            resolveWithFullResponse: false,
            body:args.body

        };
        return await request.post(queryString);
    }
},

{
    method:'GET',
    path:'/Places',
    public:true,
    fn: async (args:any,callback:any)=>
    {
        let url:string=`${mainUrl}/Places`;
        let queryString: any =
        {
            uri: url,
            method: 'GET',
            json: false,
            resolveWithFullResponse: true

        };
        return await request.get(queryString);
    }
},
{
    method:'GET',
    path:config.get('MAIN_FILE_URL'),
    public:true,
    fn: async (args:any,callback:any)=>
    {
        let url:string=`${mainUrl}${config.get('MAIN_FILE_URL')}`;
        let queryString: any =
        {
            uri: url,
            method: 'GET',
            json: false,
            resolveWithFullResponse: true
        };
        return await request.get(queryString);
    }
},
]