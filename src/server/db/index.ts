import * as mysql from 'mysql';
import config from '../config';

import Books from './tables/Books';
import Categories from './tables/Categories';


console.log(config.mysql);

export const connection = mysql.createPool(config.mysql);

export const Query = (query: string, values?: any) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) reject(err);
            return resolve(results);
        })
    })
}


export default {
    Books,
    Categories
}