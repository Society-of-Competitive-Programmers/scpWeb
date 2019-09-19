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
    {name: "Spotlight", icon:"assistant_photo", path:"spotlight"},
    {name: "Contact Us", icon:"email", path:"contact-us"},
    {name: "Hackathon Travel Form", icon:"format_list_numbered", path:"hackathon-travel-form"} 
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
