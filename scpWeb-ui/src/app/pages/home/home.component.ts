import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { GeneralService } from 'src/app/core/general.service';
import { SpotlightInfo, UpcomingHackathon, Meeting } from 'src/app/core/classes/classes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  UHDisplayedColumns = ['Hackathon', 'University', 'Date', 'Website'];
  MeetingDisplayedColumns = ['Workshop Name', 'Room #', 'Day of Week', 'Date'];
  spotlightInfo: SpotlightInfo[] = [];
  upcomingHackathonSrc: UpcomingHackathon[] = [];
  workshopSrc: Meeting[] = [];
  hackathonPrepSrc: Meeting[] = [];

  
  constructor(private generalService: GeneralService, public dialog: MatDialog) {
    this.generalService.getSpotlightInfo()
        .subscribe(spotlightInfo => 
          this.spotlightInfo = spotlightInfo
        );

    this.generalService.getUHInfo()
        .subscribe(uh => 
          this.upcomingHackathonSrc = uh
        );
    
    this.generalService.getMeetingInfo('W')
        .subscribe(wkshp => 
          this.workshopSrc = wkshp
        );

    this.generalService.getMeetingInfo('HP')
        .subscribe(hp => 
          this.hackathonPrepSrc = hp
        );
  }

  ngOnInit() {

  }

  openSpotlightDialog(index: number) {
    this.dialog.open(DialogDataExampleDialog, {
      data: this.spotlightInfo[index]
    });
  }
}

@Component({
  selector: 'spotlight-dialog',
  templateUrl: 'spotlightDialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: SpotlightInfo) {}
}