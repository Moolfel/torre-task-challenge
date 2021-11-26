import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../../shared/services/backend.service';

@Component({
    selector: 'recommendation',
    templateUrl: 'recommendation.component.html',
    styleUrls: ['recommendation.component.scss']
})
export class RecommendationComponent implements OnInit{

    constructor(private backendService: BackendService) { }

    ngOnInit() {
       
    }
}
