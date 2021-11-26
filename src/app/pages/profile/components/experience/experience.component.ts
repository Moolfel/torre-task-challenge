import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../../shared/services/backend.service';

@Component({
    selector: 'experience',
    templateUrl: 'experience.component.html',
    styleUrls: ['experience.component.scss']
})
export class ExperienceComponent implements OnInit {

    constructor(private backendService: BackendService) { }

    ngOnInit() {

    }
}
