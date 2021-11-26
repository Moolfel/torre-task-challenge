/**  
 __author__ = "Egide Niyomukiza"
 __copyright__ = "Copyright 2021, TORRE"
 **/


import { Component } from '@angular/core';
import { Properties } from './shared/utils/properties';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedTheme: string = Properties.DEFAULT_THEME;

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');

    translate.use('en');
  }

  changeTheme(event: any) {
    this.selectedTheme = event;
  }

  getTheme(): string {
    return 'theme-' + this.selectedTheme;
  }
}
