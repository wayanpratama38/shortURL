import UrlService from "../service/urlService.js";
import { UrlValidator } from "../validator/validator.js";

export default class UrlHandler{
    _validator;
    _service;

    constructor(){
        this._service = new UrlService();
        this._validator = UrlValidator;
        this.postCreateUrlHandler = this.postCreateUrlHandler.bind(this);
        this.getUrlHandler = this.getUrlHandler.bind(this);
    }

    // POST /
    async postCreateUrlHandler(req,res){
        const {originalUrl} = req.body
        this._validator.validateUrlPayload({originalUrl});
        const id = await this._service.postCreateUrlService(originalUrl);
        res.json({
            status : 'success',
            id : id
        })
    }

    // GET /:id
    async getUrlHandler(req,res){
        const {id}  = req.params;
        const url = await this._service.getUrlService(id);
        res.redirect(url);
    }
}