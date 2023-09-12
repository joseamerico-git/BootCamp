# História

Tim Bearnes 1991. versão 1.

Funcinamento do HTML

<!DOCTYPE html> não é elemento html diz ao navegador o que você esta escrevendo
<head> contem meta-informações para o navegador e buscador de internet necessita

a tag #<meta >
```
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
```
[seletores]
a, p, h1,h3{
    declarações ex: 
    [propriedade : valor;] ===> declarações
    color:red;
}

```
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

    - web safe fontes (já estão presentes nos dispositivos)

    ```
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
    
    
    ```

    ## Estilizando Listas

    Existem listas ordenadas e não ordenadas

    ```
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
    ```

    Exercício

    alterando propriedades

    O site funciona como uma cascata

    podemos seguir o fluxo
    ex:
    contacts-list tem uma lista e tem o link

    ```
        .contacts-list li a {
            color: blue;
        }
    
    ```

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

    ```
        .post_image{
         margin-bottom: 15px;
        width: 100%; --> a imagem respeitará o elemento que está de fora.
}
    
    ```

# Ineressante alinhar ao centro, porém cadas dispositivo tem telas de tamanhos diferentes então:
body{

    margin:auto;
}

esse valor cria um espaçamento em ambos os lados.




  












