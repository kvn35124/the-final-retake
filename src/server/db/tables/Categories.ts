import { Query } from '../index';


const getAll = () => Query(`select * from Categories`);

const getOne = (id: number) => Query(`select * from Categories where id = ?`, [id]);



export default {
    getAll,
    getOne
}