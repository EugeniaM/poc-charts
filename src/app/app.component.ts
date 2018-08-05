// tslint:disable:no-any
import { Component, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ BaseChartDirective ]
})
export class AppComponent {
  @ViewChild('myChart') myChart: BaseChartDirective;

  // lineChart
  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', yAxisID: 'y-axis-1'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', yAxisID: 'y-axis-1'},
    {data: [1, 4, 7, 9, 1, 2, 4], label: 'Series C', yAxisID: 'y-axis-2'}
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true,
    elements: {
      line: {
        tension: 0, // disables bezier curves
      }
    },
    scales: {
      yAxes: [{
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      }, {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',

        // grid line settings
        gridLines: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      }]
    }
  };
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'rgba(0,110,210,1)',
      pointBackgroundColor: 'rgba(0,0,0,0)',
      pointBorderColor: 'rgba(0,0,0,0)',
      pointHoverBackgroundColor: 'rgba(0,0,0,0)',
      pointHoverBorderColor: 'rgba(0,0,0,0)',
      borderWidth: 2,
      borderDash: [3, 3]
    },
    {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'rgba(110,151,0,1)',
      pointBackgroundColor: 'rgba(0,0,0,0)',
      pointBorderColor: 'rgba(0,0,0,0)',
      pointHoverBackgroundColor: 'rgba(0,0,0,0)',
      pointHoverBorderColor: 'rgba(0,0,0,0)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'rgba(214,22,0,1)',
      pointBackgroundColor: 'rgba(0,0,0,0)',
      pointBorderColor: 'rgba(0,0,0,0)',
      pointHoverBackgroundColor: 'rgba(0,0,0,0)',
      pointHoverBorderColor: 'rgba(0,0,0,0)',
      borderWidth: 2,
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(
  ) { }
}
