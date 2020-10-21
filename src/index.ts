import { Options } from "graphql-yoga";
import { createConnection } from "typeorm";
import app from "./app";
import connectionOptions from "./ormConfig";

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT,
  getEndpoint: true,
};

createConnection(connectionOptions)
  .then(() => {
    app.start(appOptions, () =>
      console.log(`The server is running on port: ${PORT}`),
    );
  })
  .catch((err) => console.error(err));
