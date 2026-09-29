import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:3000/api/blog",
    withCredentials : true
})

export async function createBlog({ btype, subject, content  }){
    const response =  await api.post("/create", { btype, subject, content  })
    return response.data
}

export async function getBlog(){
    const response = await api.get('/')
    return response.data
}

export async function getUsers(){
    const response = await api.get('/get-user')
    return response.data
}

export async function getFollowingList(){
    const response = await axios.get('http://localhost:3000/api/getfolloweduser')
    console.log(response)
    return response.data
}
