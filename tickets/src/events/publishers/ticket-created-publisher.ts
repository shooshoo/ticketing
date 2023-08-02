import { TicketCreatedEvent, Publisher, Subjects } from "@shhktickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
