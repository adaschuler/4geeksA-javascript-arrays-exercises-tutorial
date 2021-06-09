function sumTheElements(theArray) {

    var total = 0;

    //your code here
    
    for (var i = 0; i < theArray.length; i = i + 1) {
        total+=theArray[i];
    }
    /* si quisiera hacerlo con el reduce
    total=theArray.reduce((total,valor)=>total+valor, 0)  */
        return total;
}
sumTheElements([925900, 5, 15, 40]);