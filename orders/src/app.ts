import "express-async-errors";
import express from "express";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError, currentUser } from "@shhktickets/common";

import { newOrderRouter } from "./routes/new";
import { deleteOrderRouter } from "./routes/delete";
import { indexOrderRouter } from "./routes";
import { showOrderRouter } from "./routes/show";

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

app.use(newOrderRouter);
app.use(deleteOrderRouter);
app.use(indexOrderRouter);
app.use(showOrderRouter);

app.all("*", async (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
