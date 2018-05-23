import { TarefaService } from './shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './listar';

@NgModule({
  imports: [
    CommonModule
    
  ],
  declarations: [
    ListarTarefaComponent
  ],
  providers:[
    TarefaService
  ]
})
export class TarefasModule { }
