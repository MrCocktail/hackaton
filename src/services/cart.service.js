import Axios from "./caller.service";

const getAllCarts = async () => {
    const { data } = await Axios.get('/cart')
    return data
}

const getCart = async (id) => {
    const { data } = await Axios.get(`/cart/${id}`)
    return data
}

const addCart = async (cart) => {
    const { data } = await Axios.post('/cart', cart)
    return data
}

const updateCart = async (id, cart) => {
    const { data } = await Axios.put(`/cart/${id}`, cart)
    return data
}

const deleteCart = async (id) => {
    const { data } = await Axios.delete(`/cart/${id}`)
    return data
}
export { getAllCarts, getCart, addCart, updateCart, deleteCart }