import {Query} from "../index";


const findId = (id: number) => Query(`select * from users where id = ?`, [id])
const findEmail = (email: string) => Query(`select * from users where email = ?`, [email]);

const insert = (email: string, password: string, role: string, name: string) => Query(`insert into users (email, password, role, name) values (?)`, [[email, password, role, name]]);



export default {
    findEmail,
    findId,
    insert
}