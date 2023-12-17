import Axios from "./caller.service";

let getAllUsers= async ()=>{
    const {data} = await Axios.get('/users')
    return data
}

let getUser=async(id)=>{
    const {data}= await Axios.get(`/users/${id}`)
    return data
}

let updateUser=async(user)=>{
    const {data}= await Axios.put(`/users/${user.user_id}`,user)
    return data
}

let addUser=async(user)=>{
    const {data}= await Axios.post(`/users`,user)
    return data
}

let deleteUser=async(id)=>{
    const {data}= await Axios.get(`/users/${id}`)
    return data
}
export {
    deleteUser, addUser, updateUser, getUser, getAllUsers
}