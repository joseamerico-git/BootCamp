# Layout

1 - Menu fixo 

2 - Card com uma foto grande alinhado em linha

3 - Card contém um selo de exclusivo ou não

4 - Barra inferior do card

# Nese exemplo --> Vamos atomizar nossa aplicação

Construindo vários componentes que compõem um componente maior

Desvantagem criando mais coisas para compor um elemento

Conceito de SPA (Single Page Application) masterizar
Vantagem --> fácil manutenção no código.

O foco do projeto será a criação de componentes que compõem um componente maior

# Criando a base dos componentes

ng g c pages/home

ng g c components/card

ng g c components/menu-bar

Menu apareça independente da página 
pegar o seletor e colocar ele para aparecer 

colocar no app.component.html

# Definindo comportamentos globais

alteração do style.css

Começaremos formatando comportamento padrão global de fundo

reset 

*{
    padding: 0;
    margin: 0;
    border:0;
    box-sizing:border-box;
}

/*Definindo o fundo com [cssgradiente.io](https://cssgradient.io/) */

# Técnicas de atomização de componentes

Parte principal do card onde tem a imagem com efeito de zoom
a parte do preço
label preço

Componente card com sub-componentes

ng g c components/card/card-label

ng g c components/card/card-pricing


# Em CSS position:relative fica atraz e position:absolute na frente.


# Como passar propriedades dos elementos pais para filhos

Repassando de informações entre propriedades

# Dicas de refatoração.

Criar componentes grandes e depois refatorar para melhorar o código, transformando-os em outros componentes.

Supondo que gostariamos de transformar a parte do menu em outro componente
criariamos ourtro componente e levariamos o código 

ng g c components/menu-bar/menu-bar-item 





