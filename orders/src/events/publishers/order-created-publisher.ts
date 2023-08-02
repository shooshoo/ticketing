import { Publisher, OrderCreatedEvent, Subjects } from "@shhktickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
