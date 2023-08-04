import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguagesType } from '../languages.constants';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public translate: TranslateService) { }

  switchLangInNav = (lang: string) => {
    this.translate.use(lang)
  }
}


