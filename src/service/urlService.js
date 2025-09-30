import { Pool } from 'pg'
import {nanoid} from 'nanoid'

export default class UrlService{
    _pool;

    constructor(){
        this._pool = new Pool();
    }

    // POST /
    async postCreateUrlService(originalUrl){
        await this.checkDuplicateByUrl(originalUrl);
        const id = nanoid(8);
        const query = {
            text : `
                INSERT INTO mainurl
                VALUES($1,$2)
                RETURNING id
            `,
            values : [id,originalUrl]
        };

        const result = (await this._pool.query(query)).rows[0];
    
        return result.id;
    }

    // GET /:id
    async getUrlService(id){
        await this.checkDuplicateById(id);
        const query = {
            text : `
                SELECT * FROM mainurl
                WHERE id = $1
            `,
            values : [id]
        }
        const result = (await this._pool.query(query)).rows[0];
        return result.original_url;
    }

    // Check duplicate input by id 
    async checkDuplicateById(id){
        const query = {
            text : `
                SELECT * FROM mainurl
                WHERE id = $1
            `,
            values : [id]
        }
        const result = (await this._pool.query(query)).rowCount;
        if(result===0){
            throw new Error("There's duplicate url founded")
        }
    }

    // Check duplicate input by url
    async checkDuplicateByUrl(url){
        const query = {
            text : `
                SELECT * FROM mainurl
                WHERE original_url = $1
            `,
            values : [url]
        }
        const result = (await this._pool.query(query)).rowCount;
        if(result>0){
            throw new Error("There's duplicate url founded")
        }
    }
}