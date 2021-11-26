/**  
 __author__ = "Egide Niyomukiza"
 __copyright__ = "Copyright 2021, TORRE"
 **/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { NgbProgressbarModule, NgbCollapseModule, NgbRatingModule, NgbDropdownModule, NgbButtonsModule, NgbRadioGroup } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope, faGlobe, faVenus, faMars, faCheck, faAngleUp, faAngleDown, faCaretDown, faArrowDown, faCogs, faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

import { BackendService } from './../../shared/services/backend.service';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { UserReputationComponent } from './components/user-reputation/user-reputation.component';
import { InterestComponent } from './components/interest/interest.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FormsModule } from '@angular/forms';

library.add(faPhone, faTimes, faEnvelope, faGlobe, faVenus, faMars, faCheck, faAngleDown, faAngleUp, faCogs, faPencilAlt);

@NgModule({
  declarations: [
    UserProfileComponent,
    UserInformationComponent,
    RecommendationComponent,
    UserReputationComponent,
    InterestComponent,
    ExperienceComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbProgressbarModule,
    NgbCollapseModule,
    NgbRatingModule,
    NgbDropdownModule,
    NgbButtonsModule,
    FormsModule
  ],
  providers: [
    BackendService
  ],
  bootstrap: [UserProfileComponent],
  exports: [
    UserProfileComponent
  ]
})
export class ProfileModule { }
