/**  
 __author__ = "Egide Niyomukiza"
 __copyright__ = "Copyright 2021, TORRE"
 **/

import { Component, EventEmitter, Output} from '@angular/core';
import { Properties } from '../../utils/properties';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  colorThemes: any[];

  @Output() changeTheme: EventEmitter<any> = new EventEmitter();

  constructor(private translate: TranslateService) {
    this.colorThemes = Properties.COLOR_THEMES;
  }

  selectTheme(color: string) {
    this.changeTheme.emit(color);
  }

  selectLanguage(lang: string) {
    this.translate.use(lang);
  }
}
