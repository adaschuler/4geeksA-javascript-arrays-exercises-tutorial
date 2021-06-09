let myArray = [42, true, "towel", [2, 1], 'hello', 34.4, { "name": "juan" }, null];

let hello = [];
for (let i = 0; i < myArray.length; i++) {
    let item = myArray[i];
    // MAGIC HAPPENS HERE
    if (typeof (item)=== "object"){
        hello.push(item);
    } else {

    }
}
console.log(hello)

