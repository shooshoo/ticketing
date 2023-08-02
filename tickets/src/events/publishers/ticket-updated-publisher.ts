import { TicketUpdatedEvent, Publisher, Subjects } from "@shhktickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
