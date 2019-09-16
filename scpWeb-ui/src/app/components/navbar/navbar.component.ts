import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../core/general.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
  }

  toggleSideNav(){
    this.generalService.toggleSideNav();
  }

}
