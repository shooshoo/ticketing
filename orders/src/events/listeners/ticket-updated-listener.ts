import { Subjects, Listener, TicketUpdatedEvent } from "@shhktickets/common";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/ticket";
import { queueGroupName } from "./queue-group-name";

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
  queueGroupName = queueGroupName;

  async onMessage(data: TicketUpdatedEvent["data"], msg: Message) {
    const ticket = await Ticket.findByEvent(data);

    try {
      if (!ticket) {
        throw new Error("ticket not found!");
      }

      const { price, title } = data;
      ticket.set({ title, price });
      await ticket.save();

      msg.ack();
    } catch (error) {
      console.error(error);
    }
  }
}
