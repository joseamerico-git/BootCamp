public class CondicionaisEncadeadas{
    public static void main(String[] args) {
        System.out.println("******Utilizando Condições encadadas******\n");  

        int nota1 = 7;

        if (nota1 >= 7) {
            System.out.printf("%s %d \n", " Aprovado! Nota ", nota1);
        } else if(nota1>=5 && nota1<7){
            System.out.println(" Recuperação! ");
        }
        
        
        else {
            System.out.printf("%s %d \n", "Reprovado! Nota", nota1);
        }
    }
}