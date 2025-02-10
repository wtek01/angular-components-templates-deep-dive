import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
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
  @ViewChild('form', { static: true }) private form!: ElementRef<HTMLFormElement>;
  @Output() add = new EventEmitter<{title: string; request: string}>();

  onSubmitTicket(title: string, request: string) {
    this.add.emit({title, request});
    this.form.nativeElement.reset();
  }
}
