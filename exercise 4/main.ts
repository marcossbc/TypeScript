// interface user{
//     name: string;
//     age: number;
//     password:string
// }
// function showUserinfo(user: user){
//     console.log(`Name: ${user.name}, Age: ${user.age}, Password: ${user.password}`);
// }
// showUserinfo({name: "John", age: 30, password: "secret"})\

interface User{
    username:string;
    password:string;
    email?:string;
    readonly id:number
}
function login(user:User){
    console.log(`Username: ${user.username}, Password: ${user.password} Email: ${user.email ?? "no EMail weyh"} ID: ${user.id}`);
}
login({username: "admin", password: "admin123", email: "admin@example.com", id: 1 })

const user:User = {
    username: "admin",
    password: "admin123",
    email: "admin@example.com",
    id: 2
};
// user.id =3;
