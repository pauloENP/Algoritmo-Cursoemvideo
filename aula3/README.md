# Comandos de entrada

## Portugol:
Algoritmo "MeuNome"
var
    Nome: Caractere
inicio
    Escreva ("Digite seu nome :")
    Leia (Nome)
    Escreva ("Muito prazer ", Nome)
FimAlgoritmo

## JavaScript:
let Nome = prompt("Digite seu nome :")
alert(`Muito prazer ${Nome}`)

# Operadores aritimeticos e ordem de preferencia:
Os operadores aritimeticos e as ordem de preferencia são os mesmos tanto para Portugol quanto para JavaScript:

## Operadores aritimeticos:
| |                 |let A = 5|   |
|-|-----------------|---------|---|
| |                 |let B = 2|   |      
| |                 |         |   |                
|+|Adição           |A+B      |7  |       
|-|Subtração        |A-B      |3  |
|*|Multiplicação    |A*B      |10 |
|/|Divisão          |A/B      |2.5|
| \ |Divisão inteira  |A\B      |2  |
|^|Exponenciação    |A^B      |25 |
|%|Módulo           |A%B      |1  |

## Ordem de precedência:

()|Parênteses             |  
^ |Exponenciação          |
*/|Multiplicação e divisão|
+-|Adição e subtração     |




# Em JavaScript o tipo de dado da variavel é setado altomaticamente em tempo de execução. porem, em Portugol é necessario identificar o tipo de dado.

# Portugol:

    Algoritmo "Média"
    Var
    N1, N2, :Inteiro
    M: Real
    Inicio
    Escreva("Informe um numero")
    Leia(N1)
    Escreva("Infotme outro numero")
    Leia(N2)
    M <- (N1 + N2) / 2
    Escreva("A media entre", N1, "e", N2 "é: M")
    FimAlgoritmo

# JavaScript:


    let n1 = prompt("numero 1");
    let n2 = prompt("numero 2");
    var M = (+n1 + +n2) / 2;
    console.log(`a média entre ${n1} e ${n2} é:  ${M}`);
    alert(`a média entre ${n1} e ${n2} é:  ${M}`)
    
  




## Funções aritmeticas (Em JavaScript):
|                             |               |                |     |
|-----------------------------|---------------|----------------|-----|
|Math.abs()                   | Valor absoluto|Math.abs(-10)   |10   |
|Math.pow(x,y)                |Exponenciação  |Math.pow(3,2)   |9    |
|parseInt(string)             |Valor inteiro  |parseInt(3.9)   |3    |
|Math.sqrt()                  |Raiz quadrada  |Math.sqrt(25)   |5    |
|Math.PI                      |Retorna Pi     |Math.PI|3.14159 |     |
|Math.sin()                   |Seno(rad)      |Math.sin(0.523) |0.499|
|Math.cos()                   |Cosseno(rad)   |Math.cos(0.523) |0.866|
|Math.tan()                   |Tangente(rad)  |Math.tan(0.523) |0.576|
|(Math.PI/180)*Angulo_em_graus|Graus para Rad |(Math.PI/180)*30|0.523|

