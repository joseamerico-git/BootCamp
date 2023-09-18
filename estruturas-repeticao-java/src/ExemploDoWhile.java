import java.util.Random;
public class ExemploDoWhile {
    public static void main(String[] args) {
        int numero = 0;

        // testa depois da execução executa ao menos uma vez e depois executa
        do {
            System.out.println("Numero "+ numero);
            numero++;
        } while (numero < 5);


        //Exemplo do telefon
        System.out.println("Discando...");
        do{
            System.out.println("Telefone tocando...");
        }while(tocando());

    }

    private static boolean tocando(){
        boolean atendeu = new Random().nextInt(3)==1;
        System.out.println("Atendeu? "+ atendeu);
        return ! atendeu;
    }

}
