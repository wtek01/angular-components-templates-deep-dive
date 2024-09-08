import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css'],
})
export class DashboardItemComponent {
  @Input({ required: true }) image!: { src: string; alt: string };
  @Input() title!: string;
}
