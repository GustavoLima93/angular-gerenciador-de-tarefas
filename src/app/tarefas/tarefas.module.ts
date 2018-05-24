import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { ListarTarefaComponent } from './listar';
import { TarefaService,TarefaConcluidaDirective } from './shared';
import { CadastrarTarefasComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
    
  ],
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefasComponent,
    EditarTarefasComponent,
    TarefaConcluidaDirective
  ],
  providers:[
    TarefaService
  ]
})
export class TarefasModule { }
