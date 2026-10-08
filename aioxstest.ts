import axios from "axios"

function log(info:any) {
    console.log(info)
}
console.log(1)
interface userInfo{
    id: number
    name:string
}


async function login(user:userInfo) {
    let ans = await axios.post<string>("http://127.0.0.1:8000/login", { id: user.id, name: user.name })
    let data = ans.data
    console.log(ans,data)
}

let user:userInfo= {
    id: 1,
    name:"liu"
}


login(user)
