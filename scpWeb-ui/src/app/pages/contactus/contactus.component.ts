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
    new officerContactInfo("Ambassador", "Willie McClinton", "wmcclinton@mail.usf.edu"),
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