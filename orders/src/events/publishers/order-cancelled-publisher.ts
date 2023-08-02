import { Subjects, OrderCancelledEvent, Publisher } from "@shhktickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
