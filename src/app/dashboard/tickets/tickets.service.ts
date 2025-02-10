import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ticket } from './tickets.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private tickets: Ticket[] = [];
  private ticketsSubject = new BehaviorSubject<Ticket[]>([]);

  constructor() {
    // Initialize with some demo tickets
    this.tickets = [
      {
        id: '1',
        title: 'Fix navigation bug',
        request: 'Users report that the back button is not working properly',
        status: 'open'
      },
      {
        id: '2',
        title: 'Update dependencies',
        request: 'Need to update Angular to the latest version',
        status: 'open'
      }
    ];
    this.ticketsSubject.next(this.tickets);
  }

  getTickets(): Observable<Ticket[]> {
    return this.ticketsSubject.asObservable();
  }

  addTicket(title: string, request: string): void {
    const newTicket: Ticket = {
      id: Date.now().toString(), // Simple ID generation
      title,
      request,
      status: 'open'
    };
    
    this.tickets = [...this.tickets, newTicket];
    this.ticketsSubject.next(this.tickets);
  }

  updateTicketStatus(ticketId: string, status: 'open' | 'closed'): void {
    this.tickets = this.tickets.map(ticket => 
      ticket.id === ticketId ? { ...ticket, status } : ticket
    );
    this.ticketsSubject.next(this.tickets);
  }

  deleteTicket(ticketId: string): void {
    this.tickets = this.tickets.filter(ticket => ticket.id !== ticketId);
    this.ticketsSubject.next(this.tickets);
  }
}
