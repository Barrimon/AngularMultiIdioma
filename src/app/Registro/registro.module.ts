import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    IndexComponent
  ]
})
export class RegistroModule { }
