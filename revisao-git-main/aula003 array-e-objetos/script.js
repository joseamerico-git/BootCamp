//O que são vetores e arrays

//Como declarar um array
console.log("Um tipo de lista ou matriz de variáveis pode ter vários tipos"+
"É caixa contendo várias outras caixas que contém valores que podem ser de diversos tipos ")
console.log("Um array pode guardar vários tipos de dados:")

let array =['string',1,true];
console.log(array);

// Vários tipos de dados em arrays

let array1 =['string',1,true,['array1'],['array2'],['array3']];
console.log(array1);

console.log("Imprimindo uma posição específica do array:")
console.log(array1[3]);
//Uma array possui uma serie de métodos

//forEach()
array.forEach(function(item,indice){
   console.log(item,indice);
})

//push --> adiciona item no final do array

array.push('novo item')

console.log(array)

//podemos passar também um array
array.push([])
console.log(array)

// array.pop -->remove ultimo item do array

array.pop();
console.log(array);

//shift --> retira item do início do array

array.shift();
console.log(array);

//unShift --> adiciona item do início do array

array.unshift('novo item no inicio');
console.log(array);

console.log(array.indexOf(true))

//splice() --> remove ou substitui item pelo índice

array.splice(0,3);

//slice() --> retorna uma parte de um array existente

let novoArray = array.slice(0,3);
console.log(novoArray);

//Objetos

//# Dados que possuem propriedades e valores que definem suas caracteristicas
//ex xicara azul

/*
var xicara = {
    cor:'azul',
    tamanho:'p',
    function:tomarCafe()

}
*/

let object = {
    string:'string',
    number:1,
    boolean:true,
    array:['array'],
    objectInterno:{
        objectinterno:'Objeto Interno'
    }
};

console.log(object);

//retornando propriedades de um objeto objeto.propriedade

console.log(object.objectInterno.objectinterno)

//Desestruturação de objetos

var string = object.string;
console.log(string);
var lista = object.array;
console.log(lista)

//Desestruturação outra maneira

var {string, boolean,objectInterno} = object;
console.log(string,boolean,objectInterno)