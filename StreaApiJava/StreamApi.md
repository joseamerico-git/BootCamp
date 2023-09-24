# Ganhando Produtividade com Sream Api

Traz uma nova opção para manipular coleções, 
diferente da programação OO, e sim com uma linguagem funcional
porgramamos de forma imperativa.

```
	// Exeplo Carrinho de Compras percorrendo o valor total dos itens
	
	//Forma imperativa


	public class CarrinhoCompras{
		private List<Item> itemList;
	    public CarrinhoCompras(){
			this.itemList = new ArrayList<>();
		}

		//Método para somar o valor total dos itens do estoque
		public double calculaValorTotal(){
			double valorTotal = 0d;
			if(!itemList.isEmpty()){
				for(Item item: itemList){
					double valorItem = item.getPreço()* item.getQuant();
				valorTotal = += valorItem;
				}
				return valorTotal;
			}els{
				throw new RuntimeExeption("A lista está vazia");
			}
			
		}
	}

```

Utilizando o Stream Api
//Conhecendo o Stream Api, facilita e diminui a quantidade de códigos.


 
```
//Forma declaravia
	public class CarrinhoCompras(){
		private List<Item> itemList;
	}

	public double calculaValorTotal(){
		if(itemList.isEmpty){
			throw new RuntimeException("A lista está vazia");
		}

		return itemList.stream()
		.mapToDouble(item-> item.getPreco() * item.getQuantidade())
		.sum();
	}



```

# Expressões Lambda

Permitem representar interfaces funcionais(interfaces com um único método abstrato de forma mais concisa e permitem escrever códigos no estilo funcional)

Desempnham um papel crucial na programação funcional, pois servem de base para o uso de exprssões lambda.

Função lambda é uma função sem declaração, isto é, não é necessário colocar um nome, um tipo de retorno e nem modificadores de acesso.

A idéia é que o método seja declarado no mesmo lugar que será utilizado.
como funções encadeadas.

## Escrevendo essa expressão lambda estamos escrevendo uma interface funcional

  item             ->            item.getPreco() * item.getQuantidade() 
  argumento     flecha    e      corpo

# Lambda representar interfaces funcionais(com um único método abstrato)

O método sort recebe uma lambda
método .sort((p1,p2)->Double.compare(p1.getAltura(),p2.getAltura()))

# Method Reference é uma forma mais simples de escrever expressões lambda

A partir do Java 8 é um novo recurso que permite fazer referência a um método ou construtor de uma classe(de forma funcional) e assim indicar que ele deve ser utilizado em um ponto específico do código deixando-o mais simples e legível.

Utiliza [::] para referêciar construtores e métodos
pessoaPorAltura.sort(Comparator(Pessoa::getAltura))

# Stream Api na Prática

# Supplier

Representa uma operação que não aceita nenhum argumento e retorna um resultado do tipo ?. Cria e fornece novos objetos de um determinado tipo.

Supplier<String> saudacao = () -> "Olá seja bem vindo!";
                                     //generate recebe como parâmetro um supplier(fornecedor de nóvos objetos)
 
 List<String> listaSaudacoes = Stream.generate(saudacao)
        .limit(5) //limita o número de vezes
		 //collect coloca dentro de uma lista
        .collect(Collectors.toList());
		//ou somente .toList();

Suplier não recebe parãmetros ()

# Function Example


# PREDICATE

# BinaryOperator

# Optional

Fornece uma abordagem mais segura e expressiva para tratar casos em que um valor pode ser null ou ausente. A partir do Java 8, para evitar NullPointException (NPE) . Permite encapsular um valor que pode ser nulo dentro de um objeto Optional. Isso indica explicitamente que o valor pode ou não ser nulo e requerer o código que deseja acessá-lo faça uma verificação explicita.


[Camila-GitHub](
https://github.com/digitalinnovationone/ganhando_produtividade_com_Stream_API_Java) 
