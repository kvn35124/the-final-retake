import { Query } from '../index';



const getAll = () => Query(`select Books.*, categories.name from Books join Categories on Books.categoryid = categories.id`);

const getOne = (id: number) => Query(`select Books.*, categories.name from Books join Categories on Books.categoryid = categories.id where Books.id = ?`, [id]);

const insertOne = (title: string, author: string, price: number, categoryid: number) => Query(`insert into Books (title, author, price, categoryid) values (?)`, [[title, author, price, categoryid]]);

const destroy = (id: number) => Query(`delete from Books where id = ?`, [id]);

const edit = (title: string, author: string, price: number, id: number) => Query(`update Books set title = ?, author = ?, price = ? where id = ?`, [title, author, price, id]);


export default {
    getAll,
    getOne, 
    insertOne, 
    destroy,
    edit
}