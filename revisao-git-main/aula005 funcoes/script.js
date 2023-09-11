//Criando uma função

function imprimir() {
    console.log("Imprimindo ....");
}

//chamada da função

imprimir();

//Passando parametros para a função

let nome = "Juninho";

function imprimirParametro(nome) {
    console.log("Imprimindo ...." + nome);
}

//chamada da função

imprimirParametro(nome);


let sexo = "masculino";
function imprimirVariosParametros(nome, sexo) {
    console.log("Imprimindo .... Nome " + nome, sexo);
}

imprimirVariosParametros(nome,sexo);
