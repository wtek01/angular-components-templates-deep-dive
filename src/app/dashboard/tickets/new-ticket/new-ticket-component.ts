import {
  Component,
  ElementRef,
  Input,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

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

  @Input() title: string = '';
  @Input() request: string = '';

  onSubmitTicket(title: string, textTicket: string) {
    console.log(title, textTicket);
    this.form().nativeElement.reset();
  }
}
