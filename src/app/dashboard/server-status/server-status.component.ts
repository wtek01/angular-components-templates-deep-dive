import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css'],
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  //private intervalId?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const intervalId = setInterval(() => {
      const random = Math.random();
      if (random < 0.5) {
        this.currentStatus = 'offline';
      } else if (random < 0.9) {
        this.currentStatus = 'online';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
    this.destroyRef.onDestroy(() => {
      clearInterval(intervalId);
    });
  }

  /* ngOnDestroy() {
    console.log('DESTROYED');
    clearTimeout(this.intervalId);
  }*/
}

