import { toast } from "./toast.js"

const token = JSON.parse(localStorage.getItem('@petInfo:token')) || ""
const baseURL = 'http://localhost:3000'
const requestHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
}
const fail = 'hsl(349, 57%, 50%)'
const sucess = 'hsl(162, 88%, 26%)'


export async function requestPost (){
    const getPost = await fetch(`${baseURL}/posts`, {
        method: 'GET',
        headers: requestHeaders
    })
    .then(response => response.json())
    
    return getPost
}

export async function creatUser (createBody) {
    const newUser = await fetch(`${baseURL}/user/create`, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(createBody)
    })
    then(response => {
        if(response.ok) {
            toast('Usuário cadastrado com sucesso!', sucess)
            return response.json()
        }else {
            response.json().then(responseError =>{
                toast(responseError.message, fail)
            })
        }
    })
    return newUser
}

export async function login (loginBody){
    const token = await fetch(`${baseURL}/login`, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(loginBody)
    })
    .then(response => {
        if(response.ok){
            const userToken = response.json().then(responseJson => {
                localStorage.setItem("@petInfo:token", JSON.stringify(responseJson))

                return responseJson
            })

            return userToken

        }else{
            response.json().then(responseError => toast(responseError.message, fail))
        }
    })

    return token
}

export async function getUser () {
    const perfil = await fetch(`${baseURL}/users/profile`, {
        method: 'GET',
        headers: requestHeaders
    })
    .then(response => {
        if(response.ok) {
            return response.json()
        }else{
            response.json().then(responseError => toast(responseError.message, fail))
        }
    })

    return perfil
}

export async function editUser (editBody){
    const edit = await fetch(`${baseURL}/users/profile`, {
        method: 'PATCH',
        headers: requestHeaders,
        body: JSON.stringify(editBody)
    })
    .then((response) => {
        if(response.ok){
            toast("Informações auteradas com sucesso!", sucess)

            return response.json()
        }else{
            response.json().then(responseError => toast(responseError.message, fail))
        }
    })
    return edit
}

export async function deleteUser () {
    const deleted = await fetch(`${baseURL}/users/profile`,{
        method: 'DELETE',
        headers: requestHeaders
    })
    .then(responseDel => {
        if(responseDel.ok){
            toast("Perfil apagado com sucesso!", sucess)

            responseDel.json()
        }else{
            response.json().then(responseError => toast(responseError.message, fail))
        }
    })
    return deleted
}