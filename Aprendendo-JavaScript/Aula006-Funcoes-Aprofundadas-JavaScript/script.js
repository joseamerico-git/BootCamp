// Tipos de função

//Declarativas exigem nome da função 

function nomeFuncao(){
    console.log('Mensagem:')
}
nomeFuncao();

//Expressões de função 

//exemplo 1:
//expressão com nome da funçao
var funcao = function nomeFuncao(){
    console.log('Mensagem: Imprimindo expressão de funções com nome');
}

funcao();
//exemplo 2:

//expressão sem nome da função o JScript atribui o nome da variável à função

var funcao1 = function(){
    console.log('Mensagem Imprimindo expressão de funções sem nome');
}

funcao1();

//Arrow function --> são expressões de caracteristicas curtas e sempre serão anonimas

var funcao3 = ()=>{
    console.log('Arrow --> seta')
}

funcao3();

//Funções aritméticas