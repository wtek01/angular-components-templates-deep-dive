import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket-component.html',
  styleUrls: ['./new-ticket-component.css'],
  standalone: true,
  imports: [FormsModule, ButtonComponent, ControlComponent],
})
export class NewTicketComponent {
  //@ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  @Output() add = new EventEmitter<{title: string; text: string}>();

  onSubmitTicket(title: string, ticketText: string) {
    this.add.emit({title, text: ticketText});
    this.form().nativeElement.reset();
  }
}
