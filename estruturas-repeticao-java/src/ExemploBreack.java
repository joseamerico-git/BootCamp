public class ExemploBreack {
    public static void main(String[] args) {
        System.out.println("******Exemplo Break******");
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                break;
            }
            System.out.println(i);
        }
    

        System.out.println("******Exemplo Continue******");
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                continue;
            }
            System.out.println(i);
        }
    }
}
