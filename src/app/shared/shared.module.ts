import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SwitchLangComponent } from './switch-lang/switch-lang.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    NavbarComponent,
    SwitchLangComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    NavbarComponent,
    SwitchLangComponent
  ]
})
export class SharedModule { }
