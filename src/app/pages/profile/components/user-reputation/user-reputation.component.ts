import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../../shared/services/backend.service';

@Component({
    selector: 'user-reputation',
    templateUrl: 'user-reputation.component.html',
    styleUrls: ['user-reputation.component.scss']
})
export class UserReputationComponent implements OnInit {

    constructor(private backendService: BackendService) { }

    ngOnInit() {
        
    }
}
