import { DatashareService } from './../dataShare/datashare.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications'

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  constructor(private datashare: DatashareService, private router: Router,public toastr: ToastrManager) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.datashare.validateUser(username, password).subscribe(
      data => {
        if (data && data.isAuthorised) {
          localStorage.clear();
          localStorage.setItem("username", data.username);
          this.router.navigateByUrl('/quizz')
        }else {
          this.toastr.errorToastr("Username or Password Incorrect","Error");
        }
      }, err => {
        console.error(err);
        this.toastr.errorToastr("Unfortunately an eroor has occurred","Error")
      }
    )
  }

}
