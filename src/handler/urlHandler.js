import UrlService from "../service/urlService.js";

export default class UrlHandler{
    _validator;
    _service;

    constructor(){
        this._service = new UrlService();

        this.postCreateUrlHandler = this.postCreateUrlHandler.bind(this);
        this.getUrlHandler = this.getUrlHandler.bind(this);
    }

    // POST /
    async postCreateUrlHandler(req,res){
        // TODO : validate input
        const {originalUrl} = req.body
        const id = await this._service.postCreateUrlService(originalUrl);
        res.json({
            status : 'success',
            id : id
        })
    }

    // GET /:id
    async getUrlHandler(req,res){
        // TODO : validate input

        const {id}  = req.params;
        const url = await this._service.getUrlService(id);
        res.json({
            status : 'success',
            url : url
        })
    }
}