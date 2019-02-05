import { DatashareService } from './../dataShare/datashare.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private datashare: DatashareService, public toastr: ToastrManager) { }

  ngOnInit() {
  }

  signout() {
    localStorage.clear();
    clearInterval(this.datashare.timercontroller);
    this.toastr.infoToastr("You have been successfully signed out!!", "Success")
    this.router.navigate(['/login']);
  }

}
