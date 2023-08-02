import { Publisher, Subjects, PaymentCreatedEvent } from "@shhktickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
