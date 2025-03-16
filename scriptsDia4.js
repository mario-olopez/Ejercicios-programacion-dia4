//Ejercicio 1

function imprimirMultiplicacion(numero){
    let tablaMultiplicar = [];
    for(let i = 1; i < 11; i++){
        let multiplicacion = numero * i
        tablaMultiplicar.push(multiplicacion)
    }
    return tablaMultiplicar
}

let miNumero = 5
console.log(imprimirMultiplicacion(miNumero))

//Ejercicio 2

function pedirGuardarNumeros(){
    let numerosUsuario;
    let arrayNumeros = [];
    do {
        numerosUsuario = parseInt(prompt("Introduce números"))
        arrayNumeros.push(numerosUsuario)
    } while (numerosUsuario !== 0)
    
    return arrayNumeros.sort((a, b) => (a - b)).filter((i) => i !== 0)
}
console.log(pedirGuardarNumeros())

//Ejercicio 3

function comprobarAnioBisiesto(anioIntroducido){
    if(anioIntroducido % 4 == 0 && anioIntroducido % 400 == 0){
        console.log("El año que has introducido (" + anioIntroducido + ") es bisiesto")
    } else if (anioIntroducido % 100 !== 0){
        console.log("Tu año introducido (" + anioIntroducido + ") no es bisiesto")
    }
}

let anioUsuario = parseInt(prompt("Introduce un año"))
console.log(comprobarAnioBisiesto(anioUsuario))

//Ejercicio 4

function contarO(arrayPalabras, letra){
    let contador = 0;
    let arrayConvertido = arrayPalabras.toString().replaceAll("", " ")
    for(letra of arrayConvertido){
        if(letra == "o"){
            contador++
        }
    }
    return "El array introducido contiene " + contador + " oes"
}

let palabras = ["otorrinolaringólogo", "ornitorrinco", "cocodrilo", "monótono", "fotógrafo", "octópodo", "horóscopo", "protocolario", "locomotora", "cosmología"]
console.log(contarO(palabras))

