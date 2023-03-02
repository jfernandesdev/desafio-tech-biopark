import fastify from "fastify";

import { buildingsRoutes } from "./routes/buildings";

export const app = fastify();

app.register(buildingsRoutes, {
  prefix: "buildings",
});
