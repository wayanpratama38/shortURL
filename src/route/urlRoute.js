import {Router} from 'express';
import UrlHandler from '../handler/urlHandler.js';

export const urlRoute = new Router();
const urlHandler = new UrlHandler();

urlRoute.post("/",urlHandler.postCreateUrlHandler);
urlRoute.get("/:id",urlHandler.getUrlHandler);
