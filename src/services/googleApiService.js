import axios from "axios";
import bookFormatter from "../utils/bookFormatter";
import {GOOGLE_BOOKS_API, MAX_RESULT} from "../data/constants";


const getBooks =  async (title,page = 0) => {
    try {
        const result = await axios.get(`${GOOGLE_BOOKS_API}?q=${title}&maxResults=${MAX_RESULT}&startIndex=${MAX_RESULT*page}`)
        const {items,totalItems} = result.data;
        const books = items.map(item => bookFormatter(item));
        return {books,totalItems};
    }
    catch (e) {
        console.error(e.message);
        return {books : [],totalItems : 0};
    }
}

const getBookInfo =  async (id) => {
    try {
        const result = await axios.get(`${GOOGLE_BOOKS_API}/${id}`)
        return result.data;
    }
    catch (e) {
        console.error(e.message);
    }
}


export {
    getBooks,
    getBookInfo
}