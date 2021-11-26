import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../../shared/services/backend.service';

@Component({
    selector: 'interest',
    templateUrl: 'interest.component.html',
    styleUrls: ['interest.component.scss']
})
export class InterestComponent implements OnInit {
    

    constructor(private backendService: BackendService) { }

    ngOnInit() {

    }
}
