// tslint:disable:no-any
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ BaseChartDirective ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('myChart') myChart: BaseChartDirective;

  // lineChart
  public lineChartData: Array<any> = [
    {data: [], label: 'Series A', yAxisID: 'y-axis-1'},
    {data: [], label: 'Series B', yAxisID: 'y-axis-2'},
    {data: [], label: 'Series C', yAxisID: 'y-axis-1'},
  ];
  public lineChartLabels: Array<any> = [];
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
        ticks: {
          max: 250,
          min: 0,
          stepSize: 50
        }
      }, {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',

        // grid line settings
        gridLines: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
        ticks: {
          max: 350,
          min: 0,
          stepSize: 50
        }
      }],
      xAxes: [{
        ticks: {
          max: 365,
          min: 0,
          stepSize: 50
        }
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

  ngAfterViewInit() {
    // for test purpose only
    for (let i = 0; i < 365; i++) {
      this.myChart.chart.data.datasets[0].data.push(Math.floor(Math.random() * (21)) + 80);
      this.myChart.chart.data.datasets[1].data.push(Math.floor(Math.random() * (51)) + 250);
      this.myChart.chart.data.datasets[2].data.push(Math.floor(Math.random() * (31)) + 70);
      this.myChart.chart.data.labels.push(`Some label ${i}`);
    }

    this.myChart.chart.update();
  }
}
