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
    this.connectedService.connecting();
  }

}
