import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesContatosPage } from './detalhes-contatos';

@NgModule({
  declarations: [
    DetalhesContatosPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesContatosPage),
  ],
})
export class DetalhesContatosPageModule {}
