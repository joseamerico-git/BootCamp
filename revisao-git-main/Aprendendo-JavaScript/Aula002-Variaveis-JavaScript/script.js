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

//Declaração de variáveis 

var variavel = 10;
let variavel1 = "joseamerico";
const variavel2 = "mxzh";

//Escopos


//Global
var escopoGlobal ='variável de escopo global';
console.log(escopoGlobal);

//Local
function escopoLocal(){
    let escopoLocal ='variável de escopo local';
    console.log(escopoLocal);
}
escopoLocal();

//Atribuição

var atribuicao = "diana";
console.log(atribuicao);

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

//Operadores Relacionais

/*
> maior que
< menor que
>= maior igual que
<= menor igual que 

*/

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















