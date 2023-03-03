import fastify from "fastify";

import { apartmentsRoutes } from "./routes/apartment";
import { buildingsRoutes } from "./routes/buildings";

export const app = fastify();

app.register(buildingsRoutes);
app.register(apartmentsRoutes);
