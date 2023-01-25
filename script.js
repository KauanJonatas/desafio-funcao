//1 - crie uma função que exiba uma mensagem no console

function showHello() {
    console.log("Hello world!!!")
}

showHello()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function showName(name) {
    console.log(name)
}

showName("Kauan")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function introduction(name, age, musicStyle) {
    console.log(`Hello! my name is ${name}, i have ${age} years old and my favorite music style is: ${musicStyle}`)
}

introduction("Kauan", 18, "pop music")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function amvMaker(anime, music) {
    console.log(`I will make a AMV with the anime: ${anime} and the music ${music}. Please wait...`)
}

amvMaker("Your Name", "Dimonds Rihanna")

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function cubingNumber(number) {
    return Math.pow(number, 3)
}

// console.log(cubingNumber(2)) < Test

//6 - crie uma função que  verifique se uma  variável é true ou false

function verifyBoolean(condition) {
    if (condition == true) {
        console.log("is true")
    } else {
        console.log("is false")
    }
}

// const testBoolean = false 
// verifyBoolean(testBoolean) < Test