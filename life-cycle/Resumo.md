

## Introdução a Ecossistemas Angular 

## Bem vindo ao Mundo Angular

- Framework baseado em JavaScript --> mantido pelo Google --> typescript como principal linguagem 
- SPAs são seu foco Single Pages Application (1 página só) --> vários componentes --> roteamento --> renderizados na mesma tela
- Components
- Estrutura organizada
- Sistema de Tooling muito rico: CLI, HTTP, Router

# Caracteristicas: 

- Estrutura organizada permite isolar as partes do projeto como componentes
- Sistema de Tooling -> RICO -> engloba vários pacotes já necessário e criação do projeto e organização pré definidos

# Em projetos pequenos talvez melhor opatar por utilizar HTML, CSS e JavaScript sem framework

# Requisitos 
- HTML e CSS
- NODE e NPM
- JAVASCRIPT e TYPESCRIPT

# ANGULARJS VS ANGULAR 

# ANGULARJS
- São dois frameworks distintos Em 2010 <> colchetes angulares a idéia era trabalhar de maneiras mais amigaveis era utilizado AngularJS. Cuidava da complexidade.

# ANGULAR (outro produto bem diferente do ANGULARJS)
- A partir do Angular 2.0 foi reescrito e optando por TypeScript 
- A partir do 2.0 foi totalmente alterado.               
- ANGULARJS != ANGULAR

# Frameworks atuais 
- ANGULAR
- REACT 
- AURELIA
- VUE etc...

# Todas são soluções citadas, são equivalentes com estratégias diferentes, mas chegam ao mesmo destino soluções de empresas diferentes que fazem a mesma coisa.

# REACT VS ANGULAR

- É uma questão de gosto --> 
- React é o mais popular julgado o mais simples curva de aprendizado mais branda
- Angular é uma curva de aprendizado mais alta

Em questão de aprendizado React mais fácil 
Em questão de mercado Angular -->Maior número de vagas proque muitos focaram no React por optar por facilidades.

React   --> (Biblioteca) baixo nível de setup (arquivos) deixa você livre para você tomar muitas decisões->Sua organização depende do programador

Angular --> Estrutura bem definida --> cada coisa tem que estar no seu lugar -> programa bem estruturado -> alto nível de setup(vários arquivos)

React - soft para começar ao longo do tempo do desenvolvimento umca caracteristica conforme a app cresce precisa muitas bibliotécas de terceiros

Angular - Bem completo --> não precisa adicionar tanta coisa.

# Observação: 

- Suas peculiaridades não desmerecem nem a e nem b.

# React permite trabalhar com typescript, porém não é imposição

# Inposição do Angular trabalhar com typescript -> 

- React   -> mobile
- Angular -> ainda não chegou com força no mundo mobile.

# Aprender conceitos Componentes, Rotas etc... pode ser reaproveitado em ambos.

- Aprendendo a base HTML, CSS, JavaScript --> e conceitos dos frameworks -> facilita transitar para outras ferramentas com facilidade.

# Não existe melhor existe proficional que utliza bem a ferramenta.

# Estratégias do Angular comparado com outras ferramentas

ANGULAR                       VS                       REACT

GOOGLE                <-  Powered by  ->              FACEBOOK
FRAMEWORK             <-  Defitition  ->              Library
HTML+TS               <-  Templating  ->              JS + JSX
2 WAY                 <-  Binding     ->              Uni-direcional
REGULAR DOM           <-    DOM       ->              Virtual DOM
SERVICES            <-Application logic/state->       flux/Redux ou context api


# 4 CONCEITOS QUE SERVEM PARA QUALQUER UMA DAS FERRAMENTAS.

# COMPONENTES              
--> São as partes visuais da nossa aplicação permite trabalhar de maneira isolada. 
--> caracteristicas: Visual, customizável e reutilizavel passado dinâmicamente. Ex: Card, Banner, Menu, Botão etc..

# GERENCIAMENTO DE ESTADO  
--> Gerenciamento de States 

Responsável por garantir que as infomações dos componentes não estão sem sincronia e fancilitar comunicação de um componente do outro 
Exemplo: Atualizar carriho de compras ao clicar no botão de comprar um produto.
<componente-produto> --> tem suas propriedades e se está adicionado no carrinho ou não manualmente utilizaria muitos if(s)
# STATES
## Os states gerênciam os estados dos componentes facilitam as comunicações entre os componentes e seus estados

<componente-foto> --> <component-button> quando o botão estiver indisonível na mão teriamos que fazer if para fazer tais alterações

Existem bibliotécas que gernciam states 

Em Angular 

- NGRX 
- NGXS

# ROTEAMENTO   
## Route navigation (Camada de Roteamento) Routes ou Routing & Navigation

Responsável pela forma de nvegar fazendo troca de URL sem Recarregar a página, mudando somente os componentes que são mostrados  

- meuapp/login

- meuapp/home

# Bibliotecas que cuidam do Roteamento
- History API
- React-Router
- Vue Router
- Angular RoutingModule

Auxiliam na renderização de componentes dando sensação que estamos trocando de página.

# RENDERIZAÇÃO 
## Render

Responsável pro decidir a melhor maneira de caessar e entregar para o brownser desenhar na janela sem complicações
Enquanto temos várias camadas

Routes, Components e Sates

# Existe 3 tipos de renderização

1 - 100% SERVER                 --> RENDERIZADO NO SERVIDOR E DEVOLVIDO PARA O CLIENTE
2 - PARTE SERVER E PARTE CLIENT --> METADE NO SERVIDOR METADE NO CLIENTE
3 - 100% CLIENT                 --> RENDERIZADO SOMENTE NO CLIENTE

# Em resumo são as camadas responsáveis por entregar pronto para o navegador renderizar e processar tudo com mais facilidade.

# Entendimento Geral das Camádas

## Componente, Gerenciamente de estados, roteamento e renderização

## Conseguimos fazer toda essa estratégia sem framework sem bibliotecas? 
### Sim mas teremos muito mais trabalho.

Com esses conceitos fica fácil diminui a complexidade e possibilita trabalhar com vários frameworks que existem ou que haverão der existir.

Todo WebApp tem --> componentes --> gerencimanteo de estados --> roteamento --renderização.

# Conhecendo o Angular
Angular IO
[Angular.io](https://angular.io/)
- Paradigma orientado a objetos, programação para desktop, web e mobile.

# O que são componetns

Os components são elementos visuais, customisáveis e replicaveis.
Atomo da Aplicação
Geralmente é uma função JS/TS que retorna HTML, CSS e Carrega Eventos JS junto.
"Lego"
Componentes são funções que geram JS que carregam eventos, elmentos e retornam uma parte da aplicação.

# Injeção de dependências 

A composição dos componentes é montada através de injeção de dependência que é um padrão de desenvolvimento utilizada em diversos cenários diferentes, é uma estratégia de desenvolvimento muito utilizada.
Ocorre quando algo depende de outra para seu funcionamento, mas não é produzido sem algo externo.

# Fluxo de uma aplicação

Toda aplicação com framework utizam mais ou menos essa regra <card-components> --> <app-root> --> injetado no <component-html>
Componentes independentes são injetados ao 
AppRoot --> aplicação raiz
Index html --> faz referência ao AppRoot

# Utilizando o [StackBlitz.com](https://stackblitz.com/)
- Selecionamos experimentar Angular com TypeScript sem precisar instalar nada
Observamos que:

 - Em Files na pasta src são onde ficarão nossos códigos.
 - Fora de src estão os arquivos de configuração. package.json, tsconfig.json e dependências
 - No arquivo angular.json contém todas as configurações do projeto Angular: Onde está apontando a pasta src 
 - O main.ts é onde contém a inicialização de nossos projetos.

 # Dentro da pasta src
 Dentro desta pasta temos o index.html onde são injetados nossos components e que aponta para um único coponente --> main.app
 pol

 # Comparando React e Vue

 São muito similares, os conceitos são básicamente os mesmos


# Configurações para um projeto 
npm install -g @angular/cli
[https://marketplace.visualstudio.com/items?itemName=Angular.ng-template](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)

ng new my-app

ng serve --open

# Criando um component

- Criar uma pasta components dentro de src
- Criar os arquivos myComponent.component.ts, myComponent.component.html, e myComponent.component.css

Dentro do arquivo myComponent.component.ts 

import {Component} from '@angular/core';
para implementar o objeto do tipo component.

com isso chamamos o decorator que espera por um objeto com algumas propriedades padrões para nomear o seletor e puxar os arquivos de templates html e css.

As proprieadades desse componente serão 

1 - selector: 'nome-tag';  //este será o nome da tag seletora <myComponent> para ser utilizada na nossa app.component.html

2 - 0 template: '<html></html>' //passamos um html direto entre aspas

ou 

2 - 1 teplateUrl:'./[caminho de myComponent] //passamos o caminho myComponent.html

3 - styles:['h1{color:red}'] // Um array de css(s) escrito(s)

ou 

3 - 1 - styleUrls:['./[caminho do arquivo myComponent.css]]




@Component({

    selector:'my-component',
    templateUrl:'./myComponet.html,
    styles:['./myComponent.css']  

})

//temos que exportar a classe que representa nosso novo componente.

export class MyComponent {

}

//Feito os passos anteriores (Criar os arquivos .ts, .html e .css)

temos que alterar o arquivo app.module.ts para o angular encontrar o novo componente criado

![Alt text](./my-app/src/assets/images/image.png)

# Criando propriedades dos nossos componentes para tornar nossos componentes dinâmicos.

# Criando estilos para os components 
Observação: Caracteristica CSS --scoped tem seu estilo específico.

# Como saber se eu instalei certo o Angular

Utilizando o ng

```

ng help


```

# Caso dê alguma mensagem de erro no comando acima ( caso o windows não deixe habilitar)
- Entrar no PowerShell como administrador e digitar o comando 
Get-ExecutionPolicy -List
![Alt text](./src/assets/images/image4.png)

# Desinstale o pacote do ângular 

npm unistall -g @angular/cli

limpar o cache

npm cache clean --force

Para mudar o status do Restrict 
```
Get-ExecutionPolicy -List
C:\Windows\system32> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scoped CurrentUser
[A] sim para todos
npm install -g @angular/cli@14.1.2
```
Isso permite que ferramentas igual ng executem scripts remotos

# Conhecendo o ng

ng help --> ver os principais comandos


# Comandos mais utilizados

ng add <collection> instalar bibliotecas externas no projeto
ng new [name] cria um novo projeto
ng run <target> --> executa
ng server [porject] --> build, compila e cria um servidor para subir a aplicação
ng doc <keyword> --> busca documentação e abre o navegador 
ng generate --> Gera um esquema de arquivos 

# Para iniciar o projeto

Abrir a pasta com o VsCode, onde quer criar o projeto
Abrir o terminal do VsCode
digitar o comando 

ng new life-cycle --> Gera toda a estrutura do projeto
selecionar o estilo

# Conhecendo as pastas principais

- A pasta .vscode --> tem extensões que ele recomenda -->lounch.json --> task.json --> configurações extras do vscode para o npm não se perder
- Todos os arquivos dentro da src --> são armazenados os nossos códigos
- Fora do src são arquivos de configurações
- tsconfig.json -->configurações 
- pollyfills.ts --> compatibilidade entre navegadores
- assets --> guardar imagens, audios e tudo o que vamos utilizar

ng generate --help

ng generate component title 
ng generate  ng g c 

# Ciclo de vida 

Bebê -> Criança -> adolecente -> adulto ->idoso

ngOnInit():void{
  console.log("OnInit")
}

# Life Cycle Hooks

Dentro do Angular temos 8 ciclos de vida diferantes para um component angular

# OnChange

Sequencia da execução

Construtor
title.component.ts:17 Construtor
title.component.ts:20 OnChanges
title.component.ts:23 OnInit
title.component.ts:20 OnChanges
title.component.ts:23 OnInit

# Quando temos um Input() o método 
# OnChanges é aciondo 

# DoCheck --> quando há uma verificação em algum componente
Evento ocorre da seguinte maneira:

 -ngAfterContentInit() --Depois que o componente é iniciado
 -ngAfterContentChecked() --Quando algum elemnto é checked
 -ngAfterViewInit() --> Depois da inicialização da view

 ng generate component check-sample

ngDoCheck --> após alguma alteração
check-sample.component.ts:35 ngAfterContentChecked
check-sample.component.ts:43 ngAfterViewChecked

Quando acontece alguma alteração 
//checked --> verifica o content e depois a --> view


checked -> content -> view

# OnDestroy
Quando queremos tirar algum componente

ngOnDestroy(){

  }

Importante sempre manter uma lógica de destruir os componentes para não sobrecarregar a memória.m







