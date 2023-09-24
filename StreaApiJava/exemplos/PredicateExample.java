package exemplos;

import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class PredicateExample {

    public static void main(String[] args) {
        // Criar uma lista de palavras
        List<String> palavras = Arrays.asList("JAVA", "KOTLIN", "PYTHON", "JAVASCRIPT", "C", "GO", "RUBY");

        // Crie um predicate que verifica se a palavra tem mais de 5 caracteres

        Predicate<String> maisDeCincoCaracteres = palavra -> palavra.length() >5;
 
        //Utilizando o stream().filter(), para filtrar as palavras com mais de cinco caracteres
        palavras.stream().filter(maisDeCincoCaracteres)
                .forEach(System.out::println);
    }

}
