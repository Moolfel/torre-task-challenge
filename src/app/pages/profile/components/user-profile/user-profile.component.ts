/**  
 __author__ = "Egide Niyomukiza"
 __copyright__ = "Copyright 2021, TORRE"
 **/

import { Component } from '@angular/core';

@Component({
    selector: 'user-profile',
    templateUrl: 'user-profile.component.html',
    styleUrls: ['user-profile.component.scss']
})
export class UserProfileComponent {

    edit: boolean = false;

    editProfile() {
        this.edit = true;
    }

    goBack() {
        this.edit = false;
    }
}
