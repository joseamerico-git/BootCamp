import java.util.Locale;
import java.util.Scanner;

public class UtilizandoScanner {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

        System.out.println("Digite a sua altura");
        double altura = scanner.nextDouble();

        System.out.println("Digite a seu nome");
        String seuNome = scanner.next();

        System.out.println("Digite a seu peso");
        double peso = scanner.nextDouble();

        System.out.println("***********");

        System.out.println("Nome "+ seuNome);
        System.out.println("Altura "+ altura);
        System.out.println("Peso "+ peso);

    }
}
