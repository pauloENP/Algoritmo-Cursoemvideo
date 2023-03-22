let numero1 = document.getElementById("n1")
let numero2 = document.getElementById("n2")
let numero3 = document.getElementById("n3")

function test() {
    x = Number(numero1.value)
    y = Number(numero2.value)
    //z = Number(numero3.value)
    
    console.log(x>y)
    console.log("teste")
    console.log(x, y)
}

function test2() {
    x = Number(numero1.value)
    y = Number(numero2.value)
    //z = Number(numero3.value)
    
    console.log(x == y)  
}

function test3() {
    x = Number(numero1.value)
    y = Number(numero2.value)
    //z = Number(numero3.value)
    
    console.log(x !== y)      
}

function test4() {
    x = Number(numero1.value)
    y = Number(numero2.value)
    z = Number(numero3.value)
    
    alert(z == (x + y))      
}