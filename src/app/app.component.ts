import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages, LanguagesDefault } from './shared/languages.constants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public translate: TranslateService) {

    translate.addLangs(Languages);
    const lang = translate.getBrowserLang() || '';
    if (!Languages.includes(lang)) {
      translate.setDefaultLang(LanguagesDefault);
    } else {
      translate.setDefaultLang(lang);
    }
  }

  title = 'multilenguaje';
}
