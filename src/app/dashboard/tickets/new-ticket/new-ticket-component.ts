import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../shared/button/button.component";

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket-component.html',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
})
export class NewTicketComponent {
  @Input() title: string = '';
  @Input() request: string = '';

  submitTicket() {
    console.log(
      'Submit ticket',
      `Title: ${this.title}, Request: ${this.request}`
    );
    // Add logic to send the ticket to the server or perform any other necessary action
  }
}
