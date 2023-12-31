import "express-async-errors";
import express from "express";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError, currentUser } from "@shhktickets/common";
import { createChargeRouter } from "./routes/new";

const app = express();
app.set("trust proxy", true);
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    // this is for dev envirenment  secure: process.env.NODE_ENV !== "test",
    secure: false,
  })
);

app.use(currentUser);

app.use(createChargeRouter);

app.all("*", async (req, res, next) => {
  console.log("it is in the not found route");
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
