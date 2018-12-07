import { Component, OnInit } from '@angular/core';
import {ConnectedService} from "../connected.service";

@Component({
  selector: 'app-navbarheader',
  templateUrl: './navbarheader.component.html',
  styleUrls: ['./navbarheader.component.css']
})
export class NavbarheaderComponent implements OnInit {

  constructor(public connectedService: ConnectedService) { }

  ngOnInit() {
    console.log(localStorage.getItem("type") === "student", "TOOOOOOO");
  }

  logout(){
    this.connectedService.connecting();
    this.connectedService.disconnecting();
    console.log("logged out");
  }

  isStudent(): boolean {
    return localStorage.getItem("type") === "student";
  }

  getCurrentPersonName(): string {
    if(localStorage.getItem("type") == "student"){
      return this.connectedService.studentConnected.name;
    } else {
      return this.connectedService.tutorConnected.username;
    }
  }


}
