## Sintaxe Básica em JavaScript 
(Diana Martini)

Desenvolvedora Front-end
[Diana Martini](https://github.com/dianamartine)

## O que é JavaScript 

     É uma linguagem de programação de alto nível que integram apps e páginas web.
      Uma das linguagens mais utilizadas no mundo do desenvolvimento.
      alto nível  --> próximo a linguagem humana
      baixo nível --> próximo da linguagem de máquina bytecodes..

     ### História
     Em 1995 Brendan Eich que trabalhava na NetScape implementou uma linguagem chamada Moch, depois mudo o nome para LiveScript, mas na época a linguagem Java era muito popular então mudou para JavaScript como jogada de Marketing.

     HTML --> Estrutura
     CSS  --> Design

     JavaScript --> Parte interativa

# Ferramentas
VsCode
LiveServer

## Boas Práticas

Externar o arquivo JS.
Colocar script no final antes do fechamento do body.

## Variáveis em JavaScript

    Funcionamento das tipagens
    Funciona como regras de tipos de dados
    em JavasScript a tipagem é fraca, converte (funciona dinamicamente).
    Variáveis pode guardard dados de vários tipos.

    booleanos, null, undefined, number, string, inteiros,arrays, objetos e funcões.



 - O que são variáveis e como utiliza-las

  
  var vouf = false;
  console.log(vouf);

  var numero =10;
  console.log(numero);
  console.log(TypeOf(numero))

  abrindo o navegador na haba mains ferramentas podemos observar o resultado.
    
    // Tipos Primitivos

//Boolean recebem um valor v ou f
var vouf = false;
console.log(vouf)

//Number

var numero = 10;
console.log(numero)
console.log(typeof(numero)); //retorna o tipo de dados que a variável está armazenando.

// String

var nome = "José";
console.log(nome);
console.log(typeof(nome))



  

- Operadores aritméticos
# Extensões que vamos utilizar

### Exemplo da caixa imagine que a variável é uma caixa que armazena valores.

como armazenar variáves (tres modos)

var   --> genérica escopo local e global

let   --> escopo local de bloco por convensão.

const --> escopo local de bloco valor inicial obrigatório e somente leitura.

## Declaração de variaveis.
```
    var variavel = 10;
    let variavel1 = "joseamerico";
    const variavel2 = "mxzh";
```

### Escopos 

 - global --> a variável é declarada fora do bloco e fica disponivel em todo o código.

 - local  --> a variável é declarada dentro de um bloco de código

 ## Boas Práticas

 Utilizar Camel Case ou utilizando underscore _
 Iniciar variáveis no início do escopo

 # Atribuição

 =  -> em JavaScript não significa igualdade e sim atribuição

 # Comparação

 == -> em JavaScript significa comparação entre valores

 # Comparação Idêntica 

 === -> Compara o valor e o tipo da variável.

 
//Comparação

var comparacao = '0' ==0;
console.log(comparacao); // --> retorna true ou false

//Comparação Idêntica

var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica); //-->retorna false poise compara o valor e o tipo.

//Operadores aritméticos


//Adição
var adicao = 1+1;
console.log(adicao);

//Subtração

var subtracao = 1-1;
console.log(subtracao);

//Multiplicação

var multiplicacao = 1*1;
console.log(multiplicacao);

//Divisão

var divisaoReal = 1/1;
console.log(divisaoReal);

//Divisão inteira

var divisaoInteira = 1%1;
console.log(divisaoInteira);

//Potênciação

var potenciacao = 2**10;
console.log(potenciacao);

# Operadores Relacionais
  ```
  > maior que
  < menor que
 >= maior igual que
 <= menor igual que 
 ```
var maiorQue = 5 >2;
console.log(maiorQue);

var menorQue = 1 >2;
console.log(menorQue);

var maiorIgualA = 6>2;
console.log(maiorIgualA);

var menorIgualA = 6>2;
console.log(menorIgualA);

//Operadores Lógicos

/*
&& - e   - considera que todoso os valores sejam verdadeiros.
|| - ou  - considera que qualquer valor seja verdadeiro.
!  - não - inverte o valor de uma variável

*/


var e = true && false;
console.log(e);

var ou = true && false;
console.log(ou);

var nao = !true;
console.log(nao);

## Vetores||Arrays 

Um tipo de lista ou matriz de variáveis pode ter vários tipos
Uma caixa contendo várias caixas que contém valores 

Array[`string`,1,true,false,array[1], `array[2]`...];











