import { Component, OnInit } from '@angular/core';
import { Ticket } from './tickets.model';
import { TicketsService } from './tickets.service';
import { NewTicketComponent } from './new-ticket/new-ticket-component';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(private ticketsService: TicketsService) {}

  ngOnInit() {
    this.ticketsService.getTickets().subscribe(tickets => {
      this.tickets = tickets;
    });
  }

  onAddTicket(ticketData: { title: string; request: string }) {
    this.ticketsService.addTicket(ticketData.title, ticketData.request);
  }

  onCloseTicket(status: 'open' | 'closed', ticketId: string) {
    this.ticketsService.updateTicketStatus(ticketId, status);
  }

  onDeleteTicket(ticketId: string) {
    this.ticketsService.deleteTicket(ticketId);
  }
}
