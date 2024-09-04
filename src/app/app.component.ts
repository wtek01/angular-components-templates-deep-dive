import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficChartComponent } from './dashboard/traffic/traffic-chart.component';
import { SupportTicketsComponent } from './dashboard/tickets/support-tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ServerStatusComponent,
    TrafficChartComponent,
    SupportTicketsComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
