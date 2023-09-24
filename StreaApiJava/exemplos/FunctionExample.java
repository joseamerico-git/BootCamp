package exemplos;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class FunctionExample {
    public static void main(String[] args) {
        List<Integer> numeros = Arrays.asList(1,2,3,4);

        //Usar a Function com expressão lambda para dobrar todos os números
        // T - R
            //<typeIn , //TypeOut>  //variavel da função
        Function<Integer, Integer> dobrar = numero -> numero *2;
        
        List<Integer> numerosDobrados = numeros.stream()
        .map(dobrar)
        .collect(Collectors.toList());

        numerosDobrados.forEach(n -> System.out.println(n));
    }
}
