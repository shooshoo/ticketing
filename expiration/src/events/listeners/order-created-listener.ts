import { Listener, Subjects, OrderCreatedEvent } from "@shhktickets/common";
import { queueGroupName } from "./queue-group-name";
import { Message } from "node-nats-streaming";
import { expirationQueue } from "../../queues/expiration-queue";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    // calculating the time that expiration service should wait before processing
    // the job and piblishing the expiration event for related order
    const delay = new Date(data.expiresAt).getTime() - new Date().getTime();
    console.log("Waiting this many miliseconds for job to expire: ", delay);
    await expirationQueue.add(
      {
        orderId: data.id,
      },
      {
        delay,
      }
    );

    msg.ack();
  }
}
