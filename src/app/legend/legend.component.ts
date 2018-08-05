import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.css']
})
export class LegendComponent implements OnInit {
  // chart has 'any' type in ng2-chart library
  @Input() chart: any;

  constructor() { }

  ngOnInit() {
  }

  onSelect(isSelected, index) {
    const meta = this.chart.getDatasetMeta(index);
    meta.hidden = meta.hidden === null ? !this.chart.data.datasets[index].hidden : null;
    this.chart.update();
  }
}
