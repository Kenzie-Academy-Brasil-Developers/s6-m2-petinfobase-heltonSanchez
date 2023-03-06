import { creatUser, login } from "./request.js";

function loginUser (){
    const emailLogin = document.querySelector('#emailUser')
    const passwordLogin = document.querySelector('#passwordLogin')
    const acess = document.querySelector('.acess')

    acess.addEventListener('click', () =>{
        
    })
}

// creatUser(
//     {
//         username: 'Helton Sanchez',
//         email: 'helton.sanchez@mail.com',
//         password: "123456",
//         avatar: 'https://avatars.githubusercontent.com/u/114593802?s=400&u=4055ee0f96d7e699ebbce16e94bde39e3f958c03&v=4'
//       })

// login({
//     email: 'helton.sanchez@mail.com',
//     password: "123456"
// })