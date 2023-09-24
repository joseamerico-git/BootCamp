package exemplos;

import java.util.List;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class SupplierExample {

    public static void main(String[] args) {
        Supplier<String> saudacao = () ->"Olá, seja bem vindo!";
        List<String> listaSaudacoes = Stream.generate(saudacao)
        .limit(5)
        .collect(Collectors.toList());

        //Usando metodo reference
        listaSaudacoes.forEach(System.out::println);
    }
    
}
