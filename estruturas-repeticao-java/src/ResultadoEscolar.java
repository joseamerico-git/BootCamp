public class ResultadoEscolar {
    public static void main(String[] args) {


        int nota = 6;
        System.out.println("******Utilizando Condições simples******\n");  
        //if sempre a primeira
        if (nota >= 7) {
            System.out.printf("%s %d \n", "Aprovado! Nota ", nota);
            //else sempre a ultima
        } else {
            System.out.printf("%s %d \n", "Reprovado! Nota ", nota);
        }

         System.out.println("******Utilizando Condições encadadas******\n");  

        int nota1 = 6;
        if (nota1 >= 7) {
            System.out.printf("%s %d \n", " Aprovado! Nota ", nota1);
        } else if(nota1>=5 && nota1<7){
            System.out.println(" Recuperação! ");
        }
        
        
        else {
            System.out.printf("%s %d \n", "Reprovado! Nota", nota1);
        }

        
          System.out.println("******Utilizando ternários******\n");  
          String resultado = nota > 7 ? " Aprovado! " : " Reprovado! ";
          System.out.println(resultado);
    }
}
