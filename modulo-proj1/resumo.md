ng g m lista

ng g c lista/input

ng shared --> componetes comuns

Bom criamos um modulo chamado lista

depois criamos dois componentes 

1 input e 1 list-view dentro do módulo lista 

no módulo lista.module.ts importamos os dois componentes e depois no app.component.ts somente o lista.modules 

import { InputComponent } from './input/input.component';
import { ListViewComponent } from './list-view/list-view.component';

Enfim todos os componentes do módulo que foi importado no app.module.ts fica visível pora a view principal.
