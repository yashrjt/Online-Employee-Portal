import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  adminLoggedIn: boolean;
  empLoggedIn: boolean;
  constructor() { }

  ngOnInit() {
    // this.adminLoggedIn=true;
    this.empLoggedIn = true;
  }

}
