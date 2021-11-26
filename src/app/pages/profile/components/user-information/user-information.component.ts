import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { BackendService } from '../../../../shared/services/backend.service';

@Component({
    selector: 'user-information',
    templateUrl: 'user-information.component.html',
    styleUrls: ['user-information.component.scss']
})
export class UserInformationComponent implements OnInit {
    user;
    @Input() editProfile: boolean;

    constructor(private backendService: BackendService) { }

    ngOnInit() {
        this.backendService.getUser(1)
            .subscribe(res => {
                this.user = res;
            });
    }
}
