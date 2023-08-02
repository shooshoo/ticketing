import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@shhktickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
