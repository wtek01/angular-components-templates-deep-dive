import { Component, Input } from '@angular/core';

interface TrafficData {
  id: number;
  value: number;
}

@Component({
  selector: 'app-traffic-chart',
  standalone: true,
  templateUrl: './traffic-chart.component.html',
})
export class TrafficChartComponent {
  dummyTrafficData = [
    { id: 'd1', value: 433 },
    { id: 'd2', value: 260 },
    { id: 'd3', value: 290 },
    { id: 'd4', value: 410 },
    { id: 'd5', value: 397 },
    { id: 'd6', value: 488 },
    { id: 'd47', value: 589 },
  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
}
