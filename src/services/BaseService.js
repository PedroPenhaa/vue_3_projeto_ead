export  default class BaseService {

    constructor() {
        this.instance = new BaseService
    }

    static async request ( status = { auth:false }){
        return new Http(status)
    }






}