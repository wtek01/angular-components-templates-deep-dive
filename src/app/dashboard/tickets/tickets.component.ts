import { Component, OnInit } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket-component';
import { Ticket } from './tickets.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[] = [];
  private readonly STORAGE_KEY = 'tickets';

  ngOnInit() {
    // Charger les tickets depuis le localStorage au démarrage
    const savedTickets = localStorage.getItem(this.STORAGE_KEY);
    if (savedTickets) {
      this.tickets = JSON.parse(savedTickets);
    }
  }

  onAddTicket(ticket: {title: string; text: string}) {
    const newTicket: Ticket = {
      id: crypto.randomUUID(),
      title: ticket.title,
      request: ticket.text,
      status: 'open',
    };
    
    this.tickets.unshift(newTicket);
    // Sauvegarder dans le localStorage après ajout
    this.saveTickets();
  }

  public saveTickets() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.tickets));
  }

  onCloseTicket(newStatus: 'open' | 'closed', ticketId: string) {
    const ticket = this.tickets.find(t => t.id === ticketId);
    if (ticket) {
      ticket.status = newStatus;
      this.saveTickets();
    }
  }

  onDeleteTicket(ticketId: string) {
    this.tickets = this.tickets.filter(t => t.id !== ticketId);
    this.saveTickets();
  }
}
