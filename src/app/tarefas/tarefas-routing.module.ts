
import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { CadastrarTarefasComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar';

export const TarefasRoutes: Routes =[
    {
        path:'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefasComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefasComponent
    }
]

