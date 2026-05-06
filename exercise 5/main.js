"use strict";
// function echo<T>(data:T) :T{
//     return data
// }
// const names = echo ("axmed");
// console.log(names.toUpperCase());
// const age = echo (10);
// console.log(age);
// function firstItem<T>(items:T[]) {
//  return items[0]
// }
// const firstName = firstItem(["axmed", "siciiodo", "ali"]);
// console.log(firstName.toUpperCase());
// const firstNumber = firstItem([1,2,3,4,5])
// console.log(firstNumber);
// //date array interface genric interface
// interface responsveDATA<T>{
//     success: boolean;
//     data: T;
// }
// const fetchDATE : responsveDATA<string>={
//     success: true,
//     data : "axmed"
// }
// const fetchNumber: responsveDATA<number>={
//     success: true,
//     data: 123
// }
// const ObjectArray : responsveDATA<{name:string, age:number}> = {
//     success: true,
//     data:{
//         name:"sciido",
//         age:30
//     }
// }
function echo(input) {
    return input;
}
const names = echo("Siciido");
console.log(names.toUpperCase());
const age = echo(30);
console.log(age);
const arrayItems = echo([1, 2, 3, 4, 5]);
console.log(arrayItems);
const UserInfo = echo({ name: "siciido", "age": 30 });
console.log(UserInfo.name, UserInfo.age);
const fetchDate = {
    success: true,
    data: "axmed"
};
const fetchNumber = {
    success: true,
    data: { id: 1, name: "axmed" }
};
// quustion 3
function First(items) {
    return items[0];
}
const firstNumber = First([1, 2, 3, 4, 5]);
console.log(firstNumber);
const firstObject = First([{ name: "siciido", age: 30 }, { name: "axmed", age: 25 }]);
console.log(firstObject.name, firstObject.age);
const firstString = First(["axmed", "siciido", "ali"]);
console.log(firstString.toUpperCase());
