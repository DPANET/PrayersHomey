import Homey = require('homey');
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

module.exports = PrayersApp;

