const baseURL = 'http://localhost:3000'
const requestHeaders = {'Content-Type': 'application/json'}

export async function requestPost (){
    const getPost = await fetch(baseURL/posts, {
        method: 'GET',
        headers: requestHeaders
    })
    .then(response => response.json())
    
    return getPost
}