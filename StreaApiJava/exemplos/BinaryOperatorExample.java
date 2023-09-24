package exemplos;
/*  Representa uma operação que combina dois argumentos to tipo T e retorna  um resultado to tipo T. 
É usada para realizar operações de redução em pares de elmentos, como *   somar números ou combinar objetos.

 */

import java.util.Arrays;
import java.util.List;
import java.util.function.BinaryOperator;

public class BinaryOperatorExample {

   public static void main(String[] args) {
     //Cria uma lista de números inteiros
    List<Integer> numeros = Arrays.asList(1,2,3,4,5);
    
    //BinaryOperator<Integer> somar = (num1,num2) -> num1 + num2;
    BinaryOperator<Integer> somar = Integer::sum;

    //Usar o BinaryOperator para somar todos os números do Stram

    int resultado = numeros.stream()
            //variável de referência
    .reduce(0, somar);

    System.out.println(resultado);
   }
    
    

    
}
