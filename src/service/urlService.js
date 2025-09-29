import { Pool } from 'pg'
import {nanoid} from 'nanoid'

export default class UrlService{
    _pool;

    constructor(){
        this._pool = new Pool();
    }

    // POST /
    async postCreateUrlService(originalUrl){
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

    // GET /
    async getUrlService(id){
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

}