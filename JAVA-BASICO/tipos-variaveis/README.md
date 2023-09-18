## Getting Started

Welcome to the VS Code Java world. Here is a guideline to help you get started to write Java code in Visual Studio Code.

## Folder Structure

The workspace contains two folders by default, where:

- `src`: the folder to maintain sources
- `lib`: the folder to maintain dependencies

Meanwhile, the compiled output files will be generated in the `bin` folder by default.

> If you want to customize the folder structure, open `.vscode/settings.json` and update the related settings there.

## Dependency Management

The `JAVA PROJECTS` view allows you to manage your dependencies. More details can be found [here](https://github.com/microsoft/vscode-java-dependency#manage-dependencies).


# Objetivo 

Estrutura, história Fundamentos Básicos.

# História
Java é uma Linguagem composta por conjunto em definido de funcionalidades (features) que são
recomendadas para que os entusiastas em programação possam conhecer o máximo que puder.
O objetivo é simplicidade era o objetivo dos povos JavaSoft, porque tem que funcionar em dispositivos em que se tem pouco recurso de memória

A Linguagem Java é Orientada a Objetos. Isso signifíca que temos que criar Classes e Objetos
Plataforma é o ambiente de hardware e softare no qual o programa é executado.

Em Java o código fonte é compilado para bytecode e esse bytecode não está vinculado a nenhuma plataforma. Ele pode ser executado em qualquer dispositivo.

# O conceito de WORA ( Write Once Run Anywhere) o recurso independendente de plataforma tornana o Java.

# Portátil.
Podemos então dizer que podemos obter os mesmos resultados com o mesmo código para qualquer máquina. Compatibilidade entre hardwares ou plataformas, por conta da JVM e bytecode

# Robusta
É capaz de lidar com o enceramento inesperado de um programa 
Gerenciamento de memória forte.
Fornece coleta de lixo automática
Há tratamento de exceção

# SEGURA

Java verifica e faz pré análize de violação em nossos códigos.
Recursos de criptografia e decriptografia para proteger os dados contra espionagem.

# Compilada ou Interpretada

A Linguagem Java utiliza compilador gerando bytecodes que por sua vez são interpretados pela JVM.
Compilação é uma coversão de uma estrutura para outro para que possa traduzir.

# Thread 
(Linha de execução) É uma sequência de instruções que faz parte de um processo principal

# Multi-thread

É a execução de várias threads em massa em um mesmo processo.

# História 

A Sun Microsystem financiou em 1991 uma pesquisa interna com o codinome Green. 
O projeto resultou  no desenvolvimento de uma linguagem baseada em C e C++ que
seu criador, James Gosling, chamou de OaK(carvalho) em homenagem a uma árvore 
que dava para a janela do seu escritório na Sun.

![Alt text](image.png) 

# James Gosling

Quando a equipe da Sun visitou uma cafeteria local, o nome Java (cidade de origem de um tipo de café importado) foi sugerido e pegou
O projeto atravessava dificuldades com o mercado para dispositivos eletrônicos.
Quando a World Wide Web explodiu em popularidade em 1993 o pessoal da Sun viram o imediato potencial de utilizar Java para criar páginas da Web com o chamado conteúdo dinâmico. Isso revitalizou o projeto e em maio de 1995 a Sun anunciou formalmente em uma conferência. Java gerou interesse imediato nas comunidades comerciais.

# Java é agora utilizada praticamente em todo lugar
-Páginas Web com conteúdo interativo e dinâmico
-Aplicações corporativas de grande porte
-Softwares destinados ao consumidor final
-Aplicativos para Smartphones

# 25 Anos de existencia cada vez mais features

# Caracteristicas das versões com grande impacto

J2SE 5.0 30 setembro de 2004 Introduão dos Generics, Enumerações, Autoboxing, for-eac entre outros.

JSE 8.0 18 marcço de 2014 Exoressões Lambdas, foreach, Consumer, Interfaces, methods, methods references

JSE 11 25 setembro de 2018 Escrever strings em arquivos readString()
writeString() e outros métodos foram adicionados

# Escolha sua IDE Integrated Development Environment ou Ambiente de Desenvolimento
Aumentam a produtividade, aceleração de escrita com auto-complete ou intelliSense(expressões que implementam até um bloco de código)
Letras coloridas, melhor visibilidade análise de erro de sintaxe, compilação de programa
Depuração (acompanhamento) de execução do programa

Cada IDE dispõe de recursos comuns ou plugins específicos para auxiliar na agilidade

VsCode
NetBeans
Eclipse 
IntelliJIDEA --> Poderosa, porem tem plugins pagos

# Configuração do ambiente

Necessário JDK instalado
Determinar a versão do Java diante dos requisitos do projeto

Baixar o JDK[VERSÃO] pesquisar e baixar o .exe
Criar uma conta no site da Oracle
JSE 

next --> next 

Extensão para desenvolver com Java
vscode for Java -> Google 
BAIXAR VsCode development Java


ctrl+shift+p No VsCode para criar um programa java ou para configurar tamanho de letras etc...

Instalando Várias IDES
Integrando VsCode com git

# Criar repositório no GitHub

Conectar a conta no git com VsCode entrar configura sync
ctrl+shift+p git clone

# Resumo 

O compilador --> código fonte e converte --> código binário

![Alt text](image-1.png)

O Compilador converte um arquivo de extensão (.class) em (bytecode)

co bytecode

O javac (java compilador gera arquivos.class)
O arquivo .class contém o bytecode

javac [nomearquivo].extensão
gera um arquivo .class
java [nomeArquivo] 

# Objetivo do curso
Apresentar regras para desenvolver
Pré-requisitos
JDK
IDE 
DIRETÓRIO DO PROJETO

# Anatômia da Classe
Características
Criamos um arquivo.java
Utilizar nomenclatura coerente com o objetivo
Preferêncialmente escrever em inglês


```
  public class MinhaClass {
    //seu código

  }

```

Estrutura inicial
Padrão de Nomenclatura
Declaração de variáveis
Identação
Organização de arquivos
Java Beans



Funcionalidades

# Recursos
# Configurar ambiente
# Definir uma IDE e aumentar a produtividade

# Na declaração de variáveis caso o valor começe com zero talvez seja melhor utilizar do tipo string

flot pi = 3.14F;
double salario = 1275.33;
long cpf = 98765432109L; //CASO O VALOR COMEÇE COM ZERO É MELHOR UTILIZAR STRING

O tipo short vai até o 32000

Os tipos devem ser bem definidos para os valores

int numero = 1;

numero =2;

valor_numca podera_mudar ?

# Variáveis vs Constante

Constants são valores armazenados em memória que não podem ser modificados depois de definidos
em Java --> final (não queremos que mude) utilizar caixa alta

final double PI = 3.14;
ADICIONANDO O final garante que os valores não serão alterados

# Tipos primitivos
byte, short, int, long, boolean, char, float e double

# Das declarações de variáveis 
public static final int MAIORIDADE_PENAL = 18; //constante com nomenclatura utilizando convensão de caixa alta nesse caso

# static faz com que a variável em questão não esteja amarrada a um objeto.


# Classes
public Class MinhaClasse{

}

# Operadores 
Realizar operações 

Simbolos especiais que tem um significado

- Atribuição [ = ]

- Aritméticos [ + = * / %] 
 Observação quando utilizamos atribuição [+] em Strings significa concatenação

# Operadur unário  
+ 
-
Incrementação de números

//x quando temos repetição
int numero = 5; 
//incrementando de 2 em 2

numero + 2; //atribuição

int numero + 1;
numero++; --> numero = numero +1;

O incrementador tem régras 

System.out.println(numero ++) //Imprime 5; realiza a impressão antes de atribuir
System.out.println(++ numero) //Imprime 6; realiza a atribuição primeiro

negação de expressões booleanas

boolean variavel = true;
System.out.println(!variavel)

# Operador Ternário

É uma forma resumida de definir uma condição
como se fosse if

ex: <expressão condicional> ? <caso seja true> : <caso seja false>

int a, b;

a = 5;
b = 6;
String reslutado = "";

if(a==b){
    resultado ="verdadeiro";

}else 
    resultado = "falso"

ou 

a==b ? "verdadeiro" : "falso"; --> Operado ternário

# Operadores relacionais avaliam a relação entre duas variáveis

== IGUALDADE ENTRE VALORES
!= DIFERENTES
> MAIOR QUE 
< MENOR QUE
>= MAIOR IGUAL
<= MENOR IGUAL

o metodo equals() compara valores de um objeto

&& Operador   E
||           OU

Tabela da verdade

boolean condicao1 = true;
boolean condicao2 = fals;

if(condicao1 && condicao2){
    System.out.println("As duas condições são verdadeiras);
}

if(condicao1 || condicao2){
     System.out.println("Uma das condições são verdadeiras);
}

if(condicao1 || (7>4)){ //expressões booleanas (7>4) retorna true ou false
     System.out.println("Uma das condições são verdadeiras);
}

# Métodos

Critérios para criação de métodos, parametros e visibilidade

Uma classe é definida por atributos e métodos
Os métodos correspondem funções e sub-rotinas

Devem ser nomeados com verbo

Seguir padrão camelCase
ex:

somar(int n1, int n2){

}
findById(int id){}

calcularImprimir(){ // Por convensão está errado ou uma coisa ou outra

}

Analizar propósta do método
Tipo de retorno do método
Tipos e quantidades de parâmetros
Riscos de apresentar excessao
Visibilidade do método ( em toda a aplicação?)

public double dividir(int dividendo, int divisor)throws Exception{
    //lança uma excessão caso alguma informação errada.
}

# Escopos

Identificar a localização conveniênte para a escrita de algoritmos necessário para nosso programa.
Varia de acordo com o bloc onde a variável pode ser acessada


# Escopo de Classes

Nas classes podemos visualizar diferenças de escopos, as variáveis pode estar acessíveis em qualquer lugar da classe [ escopo global ]

# Escopo de Métodos

As variáveis de métodos só podem ser visibilizadas dentro do método

# Palavras reservadas 52 plavras reservadas
    Identificadores de uma linguagem que já possuem uma finalidade específica.
    
    import, package, switch, class, float, super, while, const, for, new, switch

   
# Palavras reservadas  Modificadores de acesso
    public, private, protected -> herança

    Primitios 
    int, long, short, void -> auxencia de um tipo


- Tipos Primitivos
- Classificações
- Escopo de uso
- Palavras "opostas"

# Modificadores de acesso palavras reservadas
abstract -> não pode ser instânciada 
class -> especifica uma classe
extends -> está estendendo 
final -> não pode ser extendida
implements -> indica as interfaces que uma classe ira implementar
native indica que um metodo está escrito dependente de plataforma como c
interface
new instancia um novo objeto
static faz com que um método ou variável pertence a classe ao invés de as instâncias
strictfp Usado em frente de um método ou classe precisão de dados
synchronized indica que um método pode ser acessado por uma thread de cada vez.
volatile indica que uma variável pode ser alterada durante o uso de threads
transient: impede a serialização de campos //Não serão armazenadas
brea sai do bloco em que ele está
case: executa um código dependendo do switch
continue: pla a execução do código que viria apos essa linha vai para proxima passagem

# Java Doc

Documentation
Documentação oficial

Manter convensõe e padrões 

@
javadoc - encoding UTF-8 -docencoding ISO-8859-1
-d ../docs src/*.java

# Terminal ou argumentos

Explorar opções de entrada/saída simpldes de dados

Formas de entradas array[]


- main args começam índices 0
Execução via terminal que receba parâmetros

```
    public static void main(String[] args) {
        String nome = args[0];
        String sobrenome = args[1];
        int idade = Integer.valueOf(args[2]);
        double altura = Double.valueOf(args[3]);

        System.out.println("Ola me chamo "+ nome + " "+sobrenome);
        System.out.println("Tenho "+idade+" anos");
        System.out.println("Minha altura é "+altura+ " cm");

    }
}
```
Utilizando Scanner

Entradas mais seguras 


















Depurar F10







