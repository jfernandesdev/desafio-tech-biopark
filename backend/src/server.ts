import cors from "@fastify/cors";
import fastify from "fastify";

import { apartmentsRoutes } from "./routes/apartment";
import { buildingsRoutes } from "./routes/buildings";

async function bootstrap() {
  const app = fastify();

  await app.register(cors, {
    origin: true,
  });

  await app.register(buildingsRoutes);
  await app.register(apartmentsRoutes);

  await app
    .listen({
      port: process.env.PORT ? Number(process.env.PORT) : 3333,
      host: "0.0.0.0",
    })
    .then(() => {
      console.log("Server is running in port 3333... 🚀");
    });
}

bootstrap();
