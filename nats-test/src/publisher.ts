import nats from "node-nats-streaming";
import { TicketCreatedPublisher } from "./events/ticket-created-publisher";

// Just to clear the console to see the events better in terminal u
console.clear();

const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", async () => {
  console.log("Publisher connected to NATS");

  const publisher = new TicketCreatedPublisher(stan);
  try {
    await publisher.publish({
      id: "123",
      title: "concert",
      price: 20,
    });
  } catch (error) {
    console.error(error);
  }

  /*   // data that is published can only be plain string
  const data = JSON.stringify({
    id: "123",
    title: "concert",
    price: 20,
  });

  // publish(<channel name>, <data to be published>,<call back on the event of publishing>)
  stan.publish("ticket:created", data, () => {
    console.log("Event published");
  }); */
});
