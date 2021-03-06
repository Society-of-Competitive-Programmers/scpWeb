import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { GeneralService } from './core/general.service';

import { 
  Router, 
  Event, 
  NavigationStart, 
  NavigationCancel, 
  NavigationEnd,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'scpWeb-ui';
  routes = [
    {name: "Home", icon: "home",path:"home"},
    {name: "About", icon: "info", path:"about"},
    {name: "Spotlight", icon:"star", path:"spotlight"},
    {name: "Contact Us", icon:"email", path:"contact-us"},
    //{name: "Hackathon Travel Form", icon:"code", path:"hackathon-travel-form"} // todo: checkout what icon is...
  ]
  loading = false;
  @ViewChild('sidenav', {static: true})
  public sidenav: MatSidenav;

  constructor(private generalService: GeneralService, private router: Router){
    this.router.events.subscribe((event: Event) => {
      switch(true){
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: break;
      }
    })
  }

  ngOnInit(): void {
    this.generalService.setSidenav(this.sidenav);
  }

  toggleSideNav() {
    this.generalService.toggleSideNav();
  }
}
