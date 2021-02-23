import { get } from "axios";

async function getTodos() {
    const ret = await get('https://jsonplaceholder.typicode.com/todos/');
    return ret.data;
}

export default getTodos;