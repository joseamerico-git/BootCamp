public class CaixaEletronico{
    public static void main(String[] args) {
        double saldo = 25.0;
        double valorSolicitado = 26.0;
        

        //Controle de fluxo simples quando só se tem uma proposição que é verdadeira ou falsa


        if(valorSolicitado < saldo){
            saldo = saldo - valorSolicitado;
            System.out.println("Saque de : "+valorSolicitado +" realizado com sucesso!");
            System.out.println("Saldo atual: "+ saldo);
        }

        // Fluxo composto ou condicionais composta --> mais de uma condição

        
    
    }
}