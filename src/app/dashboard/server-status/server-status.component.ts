import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  templateUrl: './server-status.component.html',
})
export class ServerStatusComponent {
  @Input() currentStatus: 'offline' | 'unknown' | 'online' = 'online';
}
