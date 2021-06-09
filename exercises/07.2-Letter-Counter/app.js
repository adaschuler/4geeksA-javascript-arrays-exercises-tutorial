let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here   

    for (var i in par) {
        var letras = par[i].toLowerCase();
        if (letras == " ") {
        /* aqui indica pasar todo a minuscula y continuar el for a pesar de los espacios */
        } else {
            if (counts[letras] == undefined) {
                /*  aqui cuenta cada letra por primera vez */
                counts[letras] = 1;
            }
            else {
                /* aqui cuenta las letra q se van repitiendo */
                counts[letras] = counts[letras] + 1;

            }
        }
    }
    console.log(counts);