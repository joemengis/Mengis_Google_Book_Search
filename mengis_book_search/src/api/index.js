import axios from 'axios'

// const api = axios.create({
//     baseURL: 'http://localhost:3000/api',
// })

export const insertBook = payload => axios.post(`/book`, payload)
export const getAllBooks = () => axios.get(`/books`)
export const updateBookById = (id, payload) => axios.put(`/book/${id}`, payload)
export const deleteBookById = id => axios.delete(`/book/${id}`)
export const getBookById = id => axios.get(`/book/${id}`)
export const bookSearch = searchVal => axios.get('https://www.googleapis.com/books/v1/volumes?q=' + searchVal);

const apis = {
    insertBook,
    getAllBooks,
    updateBookById,
    deleteBookById,
    getBookById,
    bookSearch,
}

export default apis