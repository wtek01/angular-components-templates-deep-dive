import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  @Input({ required: true }) ticket!: Ticket;
  @Output() markAsCompleted = new EventEmitter<{status: 'open' | 'closed', ticketId: string}>();
  @Output() deleteTicket = new EventEmitter<{ticketId: string}>();
  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  onMarkAsCompleted() {
    this.markAsCompleted.emit({ status: 'closed', ticketId: this.ticket.id });
  }

  onDeleteTicket() {
    this.deleteTicket.emit({ticketId: this.ticket.id });
  }
}
