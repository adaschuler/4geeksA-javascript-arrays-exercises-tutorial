var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
var nuevoarray=[];
//your code here
for(var i = 0; i < mix.length; i++) {
        nuevoarray.push(typeof mix[i]);
}
console.log(nuevoarray);
 