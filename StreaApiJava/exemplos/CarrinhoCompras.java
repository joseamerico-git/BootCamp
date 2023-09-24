package exemplos;

import java.util.ArrayList;
import java.util.List;

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
					double valorItem = item.getPreco()* item.getQuantidade();
				valorTotal  += valorItem;
				}
				return valorTotal;
			}else{
				throw new RuntimeException("A lista está vazia");
			}
			
		}
	}