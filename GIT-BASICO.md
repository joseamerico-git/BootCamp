
✍️ REVISÃO DOS COMANDOS BÁSICOS DO GIT


🔗###  Versionamento de códigos com git 

    GIT     Uma ferramenta de controle de versão de códigos open-source 

    GitHub  Um servidor de Hospedagem, em que utiliza-se o Git.



🔗  ### Tornando a pasta atual em repositório git
    
    ```

        // Iniciando um repositório local como um repositório git
            git URL
        
        // Buscar URL do repositório no GitHub sem especificar a brach
            

            git remote add origin link

            git remote v
    ```
    

🔗  ### Clonando um repositório do git na pasta criada**

    ```

        // Clonando um repositório git

            git clone URL

        // Clonar um repositório git, especificando a brach 
            git clone URL --branch nome-brach --single-brach

    ```


🔗 ### Salvando alterações em um repositório local
    
    ``` 
        // Adicionando as alterações na árvore

           git add nome-file ou git add . 

        // Mostrando status da árvore de trabalho.
    
           git status 

       // Salvando alterações em um commit passando a descrição.   
    
           git commit -m"desc-commit"

       //Mostrar os estados em que se encontram os commits
        
           git log

    ```

🔗 ### Pastas vazias inserir ao menos um arquivo vazio dentro da pasta ou asicionar ao gitignore
    
    ```

      //touch resumos/resumos-aula1.md
      //ex:
      //Podemos igonorar a pasta 

          echo resumos/ > .gitignore
    
          git status

    ```
🔗 ### DESFAZENDO COISAS

    ##  PARA O GIT RECONHECEER PASTAS VAZIAS  - $ mkdir aulas
      // PARA O GIT RECONHECEER PASTAS VAZIAS  - $ mkdir aulas

    ```
         touch aulas/.gitkeep

         git add .

        git status

        git commit -m"adiciona git igonere diretórios"


    ```

🔗 ### DESFAZENDO COISAS

## Para fazer com que o repositório iniciado com git deixe de ser um repo git

    ```
    //git remova recursivamente a força o diretório .git 

    rm -rf .git 

    ```     


## Restaurando arquivos para nossa árvore

Para retornar o estado de um arquivo.
atenção...
descarta todas as alterações feitas localmente.

```
git restore


## Alterando mensagem de commits
```
1 - git commit amend -m"novadescricao"
ou
2 - git commit --amend (vai abrir o editor VIM para você)

```
## DESFAZER O COMMIT VOLTANDO PARA O COMMIT ANTERIOR

```
    git reset --soft [hash] 
    retorna os arquivos para a área de preparaçaõ 
    git status (mostra todos os arquivos que estavam no commit )

    git resete --mixed [hash] 

  //(comando padrão do reset) 
  //Pega os arquivos que estavam nos commits posteriores e volta para arvore

    git reset --hard [hash]

```

Ignorou o arquivo que estavam no meu commit anterior e desfaz eles apaga os arquivos.
comando detalhado 

```
   git reflog

```
# Para remover arquivos da area de preparação

```
    git restore --staged nomearquivo
```    

# Enviando e baixando alterações do GitHub

```
    git add .
    git remote add origin URL
    git status 
    git log
    git commit -m"desccommit"
    git push -u origin main (-u abreviacao de upstrean)

```

## Após as alterções serem feitas no repositório remoto precisamos fazer um git pull no repo local para atualizar os arquivos

```
    // puxar as alterações realizadas atualizando meu repositório
    git pull 

```


## Trabalhando com Braches

Braches são ramificações do projeto. 
Criada uma brach incia-se uma nova brcah que aponta para o mesmo commit da brach de onde foi criada.

## Criando uma brach

```
    git log 

    //para ver a brach e o commit atual

    git checkout -B nome-brach

    //Voltar para a brech anterior

    git checkout nome-brach

    //Listando as brachs

    git brach -v

    //Mesclando as braches

    git merge nome-brech

    //Após mesclar as breaches

    git brach -v

    git -d nome-brach-a-deletar

    //Ver convensões de nomeação padrão de breches e commits
```
## ALGUMAS SITUAÇÕES QUE POSSAM OCORRER

 CONFLITOS DE MERGE
 Existem alterações no repositório remoto que ainda não estão no repositório local

```
 git pull mostrará o conflito

```
 cabe a nós decidirmos qual alteração permanece vigente.

 
## AULA DE HTML5 E CSS

# História

Tim Bearnes 1991. versão 1.

Funcinamento do HTML

```
<!DOCTYPE html> não é elemento html diz ao navegador o que você esta escrevendo
<head> contem meta-informações para o navegador e buscador de internet necessita

a tag #<meta >

<head>
    <meta charset="utf-8">
    <title>Jose Americo<title>
</head>

```

## SEMANTICA HTML

<section> --> representa uma seção generica lista
<header>  --> cabeçalho de uma <section>
<article> --> artigo de um ex blog
<aside>   --> representa um conteúdo relacionado ao conteúdo principal da página biografi de autor etc..
<footer>  --> rodapé da página ou parte da página de um <article> ou <section> ...
<a href>  --> hiperlink pode ser uma página no site ou site externo
<a target="_blank">--> Indica como o link vai ser aberto _blank em nova haba

# Inserindo imagens no html

<img src="" alt=""> alt="descrição" o alt é altamente recomendado quando a foto não carregar vai aparecer a descrição.

## site legal unsplah
## site para melhorar img tynypng.com

## Listas em Html
<ul> -->lista em que ordem não importa
<ol> -->Ordem são extremamente importantes
<li> -->Item da lista


# Conceitos básicos CSS

 CSS --> Cria regras de estilo 

- SELETORES que são os elementos html 

[seletores]
a, p, h1,h3{
    declarações ex: 
    [propriedade : valor;] ===> declarações
    color:red;
}


# ID X CLASSES

No html 

```
    <header id="headers" class="headers"></header>

```

No CSS 

```
  #header --> representa id
  
    #header{
        padding:15px;

    }

 .header --> representa classes

    .header{
        padding:15px;
    }

```


### OS ID(S) SÓ PODEM SER USADOS 1 VEZ NA PÁGINA 
### ENQUANTO A CLASSE VÁRIAS VEZES


 📘[Material](https://web.dio.me/course/introducao-criacao-de-websites-com-html5-e-css3/learning/b9735f52-8518-49e1-b294-1d40caeeff43?back=/track/santander-bootcamp-2023-fullstack-java-angular&tab=undefined&moduleId=undefined)

 ### Padding e Margin
 
 
 ```

  .class{           
                 eixo y  esquerdo direito
        padding: 10px           5px

                topo direita   inferior  esque
        padding: 10px     15px    5px     0;
  }

 # image com CSS
  .class{
    bakground-image:url("img/");
  }
 
 ```

 # mdn para estudar

  - boras solid | drashed | dotted

 - Como separar a estilização de cada lado

    top right botton left
    ```
    .post{
        border-top: solid 1px green;
        border-right: dotted 3px yellow;
        border-botton: drashed 4px pink;
        border-left: dotted 2px red;

        ou 

        border: 3px solid #44444;
        
        ou 

        border-with:3px;
        border-color:pink;
        border-style:drashed;
    }

    # Mais específicos

        .post{
            border-top-right: 3px;
            border-top-color:#34333;
            border-top-style:drashed;    


        }
    # Border radius    

        .post{
            border-radius:10px;      --> quando definimos um valor todos os cantos.
            border-radius:50%;       --> Para tornar um círculo colocar 50%;
            border-radius:10% 20%;
            border-radius:10% 20% 15% 22%; 
        }

    ```
    ## Exercício

    Alinhar espaçamentos 
    texto com conteúdo 
    espaçamentos

    # zerar margin sempre na mesma direção é uma boa prática

    ## O HTML5 foi criado para compartilhar textos.

    web safe fontes (já estão presentes nos dispositivos)

    
    #title{
        font-family:Verdana;
    }

    .post-title{
        duas fontes, caso uma não funcione a segunda entra como beckup.
        font-family: Verdana, Arial;
        font-size:15px; --> altera tamanho das fontes;
        font-style: normal;
        font-style: italic; 
        
        -->Observação: Verificar se a fonte tem suporte a itálico para o navegador não destorcer e ficar feio.

        font-weight:normal; --> altera o peso do texto;
        font-weight: bold; -->negrito;

        text-transform: upercase; --> transorma o texto entre maiusculo em minusculo.
        text-transform: lowercase; 
        
        --> o valor uppercase (maiusculo) 
        --> o valor lowercase (minusculo)
        --> o valor captalize (primeiras letras de cada palavra em maiusculo)

        text-decoration: underline;    --> linha abaixo da palavra
        text-decoration: overline;     --> linha acima da palavra
        text-decoration: line-thought; --> linha ao centro cortando a palavra 


    }
    
    
    

    ## Estilizando Listas

    Existem listas ordenadas e não ordenadas

    
      ul{
            list-style-type:square;  -->LISTA NÃO ORDENADA ALTERANDO O SIMBOLO PARA QUADRADO
            list-style-type: none;
        } 
     
     ol{
         list-style-type:upper-roman; -->LISTA ORDENADA ALTERANDO MARCADOR DA LISTA PARA ALGARISMO ROMANO

       }
     ul{
        list-style-type:"\1F44D"; -->LISTA NÃO ORDENADA ALTERANDO MARCADOR PARA UM SIMBOLO.
       }

    ul{

        list-style-image: url("imagem.png");
    }
    

    Exercício

    alterando propriedades

    O site funciona como uma cascata

    podemos seguir o fluxo
    ex:
    contacts-list tem uma lista e tem o link

    
        .contacts-list li a {
            color: blue;
        }
    
    

    ## Dimensão e Alinhamentos

    width
    height


    - Max-height
    - Max-width
    - Margin
    - Text-align

    ## Exercício

    Delimitar as dimensões dos nossos elementos e alinhar nosso conteúdo.

    Delimitando o body em um valor menor que a imagem e a imagem vazar 

    
        .post_image{
         margin-bottom: 15px;
        width: 100%; --> a imagem respeitará o elemento que está de fora.
}
    
    

# Ineressante alinhar ao centro, porém cadas dispositivo tem telas de tamanhos diferentes então:

body{

    margin:auto;
}

esse valor cria um espaçamento em ambos os lados.

# ESTUDOS JAVASCRIPT

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



    O que são variáveis e como utiliza-las?

    ```
    var vouf = false;
    console.log(vouf);

    var numero =10;
    console.log(numero);
    console.log(TypeOf(numero))
    
    ```
    //abrindo o navegador na haba mains ferramentas podemos observar o resultado.
    
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

 
## Comparação

var comparacao = '0' ==0;
console.log(comparacao); // --> retorna true ou false

## Comparação Idêntica

var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica); //-->retorna false poise compara o valor e o tipo.

## Operadores aritméticos


### Adição
var adicao = 1+1;
console.log(adicao);

### Subtração

var subtracao = 1-1;
console.log(subtracao);

### Multiplicação

var multiplicacao = 1*1;
console.log(multiplicacao);

### Divisão

var divisaoReal = 1/1;
console.log(divisaoReal);

### Divisão inteira

var divisaoInteira = 1%1;
console.log(divisaoInteira);

### Potênciação

var potenciacao = 2**10;
console.log(potenciacao);

# Operadores Relacionais
  
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

```

### Operadores Lógicos


    && - e   - considera que todoso os valores sejam verdadeiros.
    || - ou  - considera que qualquer valor seja verdadeiro.
    !  - não - inverte o valor de uma variável


```

    var e = true && false;
    console.log(e);

    var ou = true && false;
    console.log(ou);

    var nao = !true;
    console.log(nao);

```

### Vetores ou Arrays 

    Um tipo de lista ou matriz de variáveis pode ter vários tipos
    Uma caixa contendo várias caixas que contém valores 

    Array[`string`,1,true,false,array[1], `array[2]`...];



### Como declarar um array
    console.log("Um tipo de lista ou matriz de variáveis pode ter vários tipos"+
    "É caixa contendo várias outras caixas que contém valores que podem ser de diversos tipos ")
    console.log("Um array pode guardar vários tipos de dados:")

    let array =['string',1,true];
    console.log(array);

### Em arrays podem ser armazenados diversos tipos de dados

    let array1 =['string',1,true,['array1'],['array2'],['array3']];
    console.log(array1);

    console.log("Imprimindo uma posição específica do array:")
    console.log(array1[3]);
    
### Métodos padrão de um array

    Uma array possui uma serie de métodos

    forEach()
    array.forEach(function(item,indice){
    console.log(item,indice);
    })

## push --> adiciona item no final do array

    array.push('novo item')
    console.log(array)

    //podemos passar também um array
    array.push([])
    console.log(array)

## array.pop -->remove ultimo item do array
 
    array.pop();
    console.log(array);


## shift --> retira item do início do array

    array.shift();
    console.log(array);

    //unShift --> adiciona item do início do array

    array.unshift('novo item no inicio');
    console.log(array);

    console.log(array.indexOf(true))

## splice() --> remove ou substitui item pelo índice

    array.splice(0,3);

    //slice() --> retorna uma parte de um array existente

    let novoArray = array.slice(0,3);
    console.log(novoArray);

### Objetos

 Dados que possuem propriedades e valores que definem suas caracteristicas
 Exemplo xicara azul

```
    var xicara = {
        cor:'azul',
        tamanho:'p',
        function:tomarCafe()

    }
```

```
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

```


### retornando propriedades de um objeto objeto.propriedade

```
console.log(object.objectInterno.objectinterno)

```

### Desestruturação de objetos

```
    var string = object.string;
    console.log(string);
    var lista = object.array;
    console.log(lista)
```

### Desestruturação outra maneira

```
    var {string, boolean,objectInterno} = object;
    console.log(string,boolean,objectInterno)

```   


# Resumo para avaliação ********************************************

# O que são vetore são tipos de listas onde cada variável possui um índice e um valores


Exemplos: Caixas com várias caixas e onde cada caixa possui um valor
Criação de uma variável do tipo array

let nome_array = ['string',1,true];

## Os arrays devem ser declarado entre colchetes [] e podem guardar qualquer valor dentro de seus índeices


# DECLARAÇÃO DE ARRAYS


let array = ['string',1,true];
console.log(array);

let array1 = ['string', 1,true,['array1'],['array2'],['array3']];
console.log(array);



## Acessando um índice de um array

console.log(array[2]);

## Métodos padrão para manipulação de um array

- forEach -> itera em um array
- push    -> insere item no final do array
- pop     -> remove item do final do array
- shift   -> remove item do início do array
- unshift -> adiciona item no início do array
- indexOf -> retorna o índice de um valor




[artigo dio]("https://web.dio.me/articles")
[Diana Martini](https://github.com/DianaMartine/curso-dio-sintaxe-basica-javascript)
