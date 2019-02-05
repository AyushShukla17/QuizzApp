import { DatashareService } from './../dataShare/datashare.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  constructor(private datashare: DatashareService, private router: Router) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.datashare.validateUser(username, password).subscribe(
      data => {
        if (data && data.isAuthorised) {
          localStorage.clear();
          localStorage.setItem("username", data.username);
          this.router.navigateByUrl('/quizz')
        }
      }, err => {
        console.error(err);
      }
    )
  }

}
