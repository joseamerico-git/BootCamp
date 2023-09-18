public class SwichCase {
    public static void main(String[] args) {
        char sexo = 'F';
        // condicionais com if-else
        if (sexo == 'M')
            System.out.println("Sexo masculino");
        else if (sexo == 'F') {
            System.out.println("Sexo feminino");
        } else {
            System.out.println("Sexo indefinido");
        }

        // condicionais com switch-case OBSERVAR SEMPRE O breack, continue etc.

        switch (sexo) {
            case 'M': {
                System.out.println("Sexo masculino");
                break;
            }
            case 'F': {
                System.out.println("Sexo feminino");
                break;
            }
            default:
                System.out.println("Sexo indefinido");

        }

    }
}