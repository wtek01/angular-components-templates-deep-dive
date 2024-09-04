import { Component, Input } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
})
export class ServerStatusComponent {
  @Input() currentStatus: 'offline' | 'unknown' | 'online' = 'online';
}
