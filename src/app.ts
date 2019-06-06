import Homey = require('homey');
import fs from "fs-extra";
cloneConfig();
const dotenv = require('dotenv').config({ path: Homey.env.NODE_CONFIG_DIR });
import * as manager from './prayers/manager';
import prayersController from "@dpanet/prayerswebapp/lib/controllers/prayers.controller";
import mainController from "@dpanet/prayerswebapp/lib/controllers/main.controller";
import {App} from "@dpanet/prayerswebapp/lib/routes/main.router"
class PrayersApp extends Homey.App {

    onInit() {
        this.log(` Prayers Alert App is running! `);
        let app:App = new App([new prayersController(),new mainController()]);
        setTimeout(() => {            
            app.listen();
        }, 5000);   
        manager.PrayersAppManager.initApp();
    }
}
function cloneConfig()
{
    fs.copySync(Homey.env.NODE_CONFIG_SOURCE,Homey.env.NODE_CONFIG_DIR,{overwrite:false});
}
module.exports = PrayersApp;

