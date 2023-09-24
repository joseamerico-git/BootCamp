package exemplos;
/* Representa uma operação que aceita um argumento do tipo T e não retorna nenhum resultado.
É utilizada principalmente para realizar ações, ou efeitos colaterais nos elementos Stream sem modificar ou retornar um valor.
 */

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class ConsumerExample {

    public static void main(String[] args) {
        //Usar a expressão lambda para imprimir numeros pares
 List<Integer> numeros = Arrays.asList(0,1,2,3,4,5,6,7,8,9,10);
                                                 //numero representa cada elemento de dentro do meu list 
        Consumer<Integer> imprimirNumerosPares = numero -> {

            if(numero % 2 ==0){
                System.out.println(numero);
            }
        };

        //numeros.stream().forEach(imprimirNumerosPares);
        numeros.stream().forEach(numero -> {
            if(numero % 2==0){
                System.out.println(numero+ "\n");
            }
        
            
        });
    }

}
