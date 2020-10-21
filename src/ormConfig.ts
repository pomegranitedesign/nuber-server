import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
  type: "postgres",
  database: "nuber",
  synchronize: true,
  logging: true,
  entities: ["entities/**/*.*"],
  host: process.env.DB_ENDPOINT || "localhost",
  port: 3306,
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "mysql-rssapp-local",
};

export default connectionOptions;
