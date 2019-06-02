"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Homey = require("homey");
const manager = __importStar(require("./prayers/manager"));
const prayers_controller_1 = __importDefault(require("@dpanet/prayerswebapp/lib/controllers/prayers.controller"));
const main_controller_1 = __importDefault(require("@dpanet/prayerswebapp/lib/controllers/main.controller"));
const main_router_1 = require("@dpanet/prayerswebapp/lib/routes/main.router");
class PrayersApp extends Homey.App {
    onInit() {
        this.log(` Prayers Alert App is running! `);
        let app = new main_router_1.App([new prayers_controller_1.default(), new main_controller_1.default()]);
        setTimeout(() => {
            app.listen();
        }, 5000);
        manager.PrayersAppManager.initApp();
    }
}
module.exports = PrayersApp;
