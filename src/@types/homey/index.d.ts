

 declare module 'homey'
{
  import { EventEmitter } from "events";

  import * as Homey from "homey";

  export interface ICapabilities
  {
    capabilityId:string;
  }
  export class SimpleClass extends EventEmitter
  {
    constructor();
    public error(...message:any[]):void;
    public log(...message:any[]):void;
  }
  export class App extends SimpleClass
  {
    constructor(uri:string);
    protected onInit():void;
  }
  type genericCallbackFunction= (err?:Error,store?:object)=>void;

  export class Device<T>
  {
    public getAvailable():boolean;
    public getCapabilities():Array<ICapabilities>;
    public getCapabilityValue(capabilityId:string):ICapabilities;
    public getClass():string;
    public getData():object;
    public getDriver():Driver<T>;
    public getName():string;
    public getSetting(key:string):object;
    public getSettings():object;
    public getState():object;
    public getStore():object;
    public getStoreKeys():Array<string>;
    public getStoreValue(key:string):any;
    public hasCapability(capabilityId:string):boolean;
    public onAdded():void;
    public onDeleted():void;
    public onInit():void;
    public onRenamed(name:string):void;
    public onSettings(oldSettings:object,newSettings:object,changedKeys:Array<object>,callback:genericCallbackFunction):void;
    public ready(callback:()=>void):void;
    public registerCapabilityListener(capabilityId:string,fn:(value:any,opt:object,callback:genericCallbackFunction)=>void):void;
    public registerMultipleCapabilityListener(capabilityIds:Array<string>,fn:(valueObj:any,optsObj:object,callback:genericCallbackFunction)=>void,timeout:number):void;
    public setAlbumArtImage(image:Image,callback?:(err:Error)=>void):Promise<T>;
    public setAvailable(callback?:genericCallbackFunction):Promise<T>;
    public setCapabilityValue(capabilityId:string,value:any,callback?:genericCallbackFunction):Promise<T>;
    public setSettings(settings:object,callback?:genericCallbackFunction):Promise<T>;
    public setStoreValue(key:string,value:any,callback?:genericCallbackFunction):Promise<T>;
    public setUnavailable(message:string,callback?:genericCallbackFunction):Promise<T>;
    public setWarning(message:string,callback?:genericCallbackFunction):Promise<T>;
    public triggerCapabilityListener(capabilityId:string,value:any,opts:object,callback?:genericCallbackFunction):Promise<T>;
    public unsetStoreValue(key:string,callback?:genericCallbackFunction):Promise<T>;
    public usetWarning(callback?:genericCallbackFunction):Promise<T>;
  }
  export class Driver<T>{
    public getDevice(deviceData:object):Device<T>;
    public getDevices():Array<Device<T>>;
    public onInit():void;
    public onMapDeviceClass(device:Device<T>):Device<T>;
    public onPair(socket:EventEmitter):void;
    public onPairListDevices(data:object,callback:(err:Error,result:Array<Device<T>>)=>void):void;
    public ready(callback:()=>void):void;
  }
  export class Image
  {

  }
  export class FlowArgument
  {
    public registerAutocompleteListener(query:string,args:object,callback:(err:Error,result:Array<object>)=>void):FlowArgument;
  }
  export class FlowCard<T> extends EventEmitter
  {
    constructor(id:string);
    getArgument():FlowArgument;
    getArgumentValues(callback:(err:Error,value:Array<object>)=>void):Promise<T>;
    register():FlowCard<T>;
    registerRunListener(fn:(args:object,state:object,callback:genericCallbackFunction)=>void):FlowCard<T>;
    unregister():void;
  }
  export class FlowCardCondition<T> extends FlowCard<T>
  {
    constructor(id:string);
  }
  export class FlowCardTrigger<T> extends FlowCard <T>
  {
    constructor(id:string);
    trigger(tokens:object,state:object,callback?:genericCallbackFunction):Promise<T>;

  }
  export class FlowCardTriggerDevice<T> extends FlowCard<T>
  {
    constructor(id:string);
    trigger(device:Device<T>,tokens:object,state:object,callback:genericCallbackFunction):Promise<T>;

  }
  export enum FlowTokenType
  {
    STRING="string",
    NUMBER ="number",
    BOOLEAN= "boolean",
    IMAGE = "image"
  }
  export interface IFlowToken 
  {
    type: FlowTokenType,
    title:string
  }
  export class FlowToken<T>
  {
    constructor(id:string,opts:IFlowToken);
    register(callback?:(err:Error,token:FlowToken<T>)=>void):Promise<T>;
    setValue(value:FlowTokenType,callback?:genericCallbackFunction):Promise<T>;
    unregister(callback?:genericCallbackFunction):Promise<T>;
  }
}

