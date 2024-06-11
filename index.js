'use strict'

/*Escribir una función que reciba un array de strings y muestre cada elemento con su posición.*/

let showArr = (arr) => {
    console.log("---------EJERCICIO 1---------")
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
    return;
}

let frutas = ['manzana', 'naranja', 'fresa', 'sandia', 'uva']

showArr(frutas)

/*Escribir una función que reciba un array de números y devuelva la suma de todos sus elementos.*/

let calcSumArr = (arr) => {
    console.log("---------EJERCICIO 2---------")
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

let array1 = [1,2,3,4,5,6]

console.log(calcSumArr(array1))

/*Escribir una función que reciba un array de números y muestre casa uno de sus elementos multiplicado por 3.*/

let calcMultArr = (arr) => {
    console.log("---------EJERCICIO 3---------")
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] *= 3)
    }
    return;
}

let array2 = [6,5,4,3,2,1]

calcMultArr(array2)