import { Component, OnInit, HostListener } from '@angular/core';
import { SpotlightInfo } from 'src/app/core/classes/classes';
import { GeneralService } from 'src/app/core/general.service';

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss']
})
export class SpotlightComponent implements OnInit {

  spotlightInfo: SpotlightInfo[] = [];

  constructor(private generalService: GeneralService) {
    this.generalService.getSpotlightInfo()
        .subscribe(spotlightInfo => 
          this.spotlightInfo = spotlightInfo
        ); 
  }

  ngOnInit() {

  }

}
