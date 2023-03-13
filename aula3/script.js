let Nome = prompt("Digite seu nome :")
alert(`Muito prazer ${Nome}`)

function sum(){
    let n1 = prompt("numero 1");
    let n2 = prompt("numero 2");
    console.log(+n1 + +n2);
    alert(+n1 + +n2)
}
function sub(){
    let n1 = prompt("numero 1");
    let n2 = prompt("numero 2");
    console.log(+n1 - +n2);
    alert(+n1 - +n2)
} 

function div(){
    let n1 = prompt("numero 1");
    let n2 = prompt("numero 2");
    console.log(+n1 / +n2);
    alert(+n1 / +n2)
}
function tim(){
    let n1 = prompt("numero 1");
    let n2 = prompt("numero 2");
    console.log(+n1 * +n2);
    alert(+n1 * +n2)
}
function mid(){
    let n1 = prompt("numero 1");
    let n2 = prompt("numero 2");
    var M = (+n1 + +n2) / 2;
    console.log(`a média entre ${n1} e ${n2} é:  ${M}`);
    alert(`a média entre ${n1} e ${n2} é:  ${M}`)
    
}
function abs(){
    let n = prompt("digite um numero")
    let nAbs = Math.abs(n)
    console.log(nAbs)
}
function pow(){
    let x = prompt("digite um numero")
    let y = prompt("digite outro numero")
    let nPow = Math.pow(x,y)
    console.log(nPow)
}
function sqrt(){
    let n = prompt("digite um numero")
    let nSqrt = Math.sqrt(n)
    console.log(nSqrt)
} 
function intSqrt(){
    let n = prompt("digite um numero")
    let nIntSqrt = parseInt(Math.sqrt(n))
    console.log(nIntSqrt)
}
function GPRad(){
    let n = prompt("digite um numero")
    let nGPRad = (Math.PI/180)*n
    console.log(nGPRad)
}
function CRad(){
    let n = prompt("digite um numero")
    let Rad = (Math.PI/180)*n
    let nCRad = Math.sin(Rad)
    console.log(`o seno de ${n} é ${nCRad}`)
}




