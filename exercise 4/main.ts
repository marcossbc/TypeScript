// function greet(name: string):string {
//     console.log("hellow", name.toUpperCase());
//     return `Hello, ${name}!`;
// }
// greet("Alice");

// // optinal function parameter
// function log(massage: string, userID?: string) {
//     console.log(massage, userID || "Not signed in");


// }
// log("Hello, world!", "user123");

// function welcome(name:string = "Guest"){
//     console.log(`Welcome, ${name}!`);
// }
// welcome();
// welcome("alice");

// function sum(...numbers: number[]):number{
//     return numbers.reduce((a, b ) => a+b, 0)
// }
// console.log(sum(12,13,22,))

function fullName(firstName: string, lastName: string): string{
    return `${firstName} ${lastName}`;
}
console.log(fullName("John", "Doe"));


function registerUser(username: string, isAdmin?: boolean , language: string = "en") {
    console.log(`User: ${username}, Admin: ${isAdmin ?? false}, Language: ${language}`);
}
// registerUser("alice");
// registerUser("bob", true);
registerUser("charlie", false);

//rest reduce 
function avarage(...scrores: number[]): number {
    if(scrores.length === 0) return 0;
    const total = scrores.reduce((a, b) => a + b, 0);
    return total / scrores.length;
 

}
console.log(avarage(90, 80, 70));