public class SmartTv {
    boolean ligada = true;
    int canal = 1;
    int volume = 25;
    

    public static void main(String[] args) {
        SmartTv smartTv = new SmartTv();

        smartTv.diminiurVolume();
        System.out.println("Tv ligada? " + smartTv.ligada);
        System.out.println("Canal selecionado? " + smartTv.canal);
        System.out.println("Volume selecionado? " + smartTv.volume);
        

        smartTv.ligada = false;
        System.out.println(smartTv.ligada ? "Ligando...":"Desligando...");
        smartTv.ligada = true;
        System.out.println(smartTv.ligada ? "Ligando...":"Desligando...");
        smartTv.mudarCanal(100);

    }

    public void ligar(){
        ligada = true;
    }

    public void desligar(){
        ligada = false;
    }

    public void aumentarVolume(){
        volume++;
    }
    public void diminiurVolume(){
        volume--;
    }
    public void aumentarCanal(){
        canal++;
    }
      public void diminiurCanal(){
        canal--;
    }
      public void mudarCanal(int novoCanal){
        System.out.println("Canal atual: "+ novoCanal);
    }
}
