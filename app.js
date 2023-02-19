let data=require("./books.json")
console.log(data);
let obj={
    name:'fahad',
    age:25
}
console.log(obj);
let jsonobj=JSON.stringify(obj);
console.log(jsonobj);

let returnobj=JSON.parse(jsonobj);
console.log(returnobj);

// fetch("./books").then((res=>{
//     console.log(res.json);
// }))