import axios from "axios"

const api = axios.create({
    baseURL : "http://localhost:3000/api",
    withCredentials : true
})

export async function getFollowingUser(){
    const response = await api.get("/getfolloweduser")
    return response.data
}