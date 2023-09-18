import java.util.concurrent.ThreadLocalRandom;

public class ExemploWile {
    public static void main(String[] args) {
        System.out.println("Exemplo While");

        int numero = 0;


        //Testa antes de executar o código

        while(numero<5){
            System.out.println("Numero: "+numero);
            numero++;
        }

        //Segundo exemplo
        double valorDoce = valorAleatorio();
        double valorMesada = 100.0;

        while(valorMesada>0){
             System.out.println(" Valor da Mesada atual "+ valorMesada);
            valorMesada = valorMesada - valorDoce;
           
        }


    }
    public static double valorAleatorio(){
        return ThreadLocalRandom.current().nextDouble(2,15);
    }
}
