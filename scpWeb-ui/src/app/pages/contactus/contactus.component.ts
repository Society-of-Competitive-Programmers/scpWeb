import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  dataSource: officerContactInfo[] = [
    new officerContactInfo("President", "Jamshidbek Mirzakhalov", "mirzakhalov@mail.usf.edu"),
    new officerContactInfo("Vice President", "Anoop Babu", "anoopbabu@mail.usf.edu"),
    new officerContactInfo("Treasurer", "Nhi Pham", "npham6@mail.usf.edu"),
    new officerContactInfo("Secretary", "Akash Singh", "akashsingh@mail.usf.edu"),
    new officerContactInfo("Technical Chair", "Brandon Wolfram", "bwolfram@mail.usf.edu"),
    new officerContactInfo("Ambassador", "Willie McClinton", "wmcclinton@mail.usf.edu"),
    new officerContactInfo("Graphic Designer", "Teresa Flaitz", "teresaflaitz@mail.usf.edu"),
    new officerContactInfo("Historian", "Lavaugh Brown", "lavaugh@mail.usf.edu"),
    new officerContactInfo("Expo Chair", "Dariia Bulhakova", "dariia@mail.usf.edu"),
    new officerContactInfo("Webmaster", "Andrew Fernandez", "andrewf1@mail.usf.edu"),
  ]

  displayedColumns = ["position", "name", "email"]
  
  constructor() { }

  ngOnInit() {
  }

}

class officerContactInfo {
  position: string;
  name: string;
  email: string;

  constructor(position: string, name: string, email: string){
    this.position = position;
    this.name = name;
    this.email = email;
  }
}