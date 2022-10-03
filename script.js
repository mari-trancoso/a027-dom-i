const frutas = ["laranja", "limão", "uva"];

//EXERCICIO 1
let fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML = frutas[0]

let fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML = frutas[1]

let fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML = frutas[2]


//EXERCICIO 2

let frutaNova = document.getElementById("fruta-nova")
const pegaInput = () => {
    //let frutaNova = document.getElementById("fruta-nova")
    console.log(frutaNova.value)

}


//EXERCICIO 3

const adicionarFrutaNova = () => {
    let fruta4 = document.getElementById("fruta-4")
    fruta4.innerHTML = frutaNova.value

}


