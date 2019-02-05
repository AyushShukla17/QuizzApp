import { DatashareService } from './../dataShare/datashare.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private datashare: DatashareService, private router: Router) { }

  ngOnInit() {

  }

}
