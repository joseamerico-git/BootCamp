public class ExemploForArrays {
    public static void main(String[] args) {

        System.out.println("*********For*********");
        for (int i = 0; i < 5; i++) {
            System.out.println("Passada nº " + i);
        }

        System.out.println("*********For em Array(s)*********");


        String[] array = { "JOSE", "IVONE" };
        // em arrays o índice incia-se em zero
        for (int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
        }

        System.out.println("*********For em Array(s)*********");

        for(String pessoa: array){
            System.out.println(pessoa);
        }

    }
}
