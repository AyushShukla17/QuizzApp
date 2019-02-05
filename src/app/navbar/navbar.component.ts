import { DatashareService } from './../dataShare/datashare.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private datashare: DatashareService) { }

  ngOnInit() {
  }

  signout() {
    localStorage.clear();
    clearInterval(this.datashare.timercontroller);
    this.router.navigate(['/login']);
  }

}
