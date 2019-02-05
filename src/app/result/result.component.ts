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

  pieChartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 24
      }
    }
  }

  pieChartLabels = ['Correct', 'Incorrect'];
  pieChartData: any = [
    {
      data: []
    }
  ];
  pieChartColor: any = [
    {
      backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)'
      ]
    }
  ]
  ngOnInit() {
    if (!this.datashare.userAns.length) {
      this.router.navigate(['/quizz']);
    }
    this.pieChartData = [{ "data": [this.datashare.correctAnswer, 3 - this.datashare.correctAnswer] }]
  }

}
