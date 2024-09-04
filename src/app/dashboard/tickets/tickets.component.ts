import { Component } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './tickets.component.html',
})
export class TicketsComponent {}
