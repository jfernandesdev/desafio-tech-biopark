import { FastifyInstance } from "fastify";
import { z } from "zod";

import { prisma } from "../lib/prisma";

export async function apartmentsRoutes(app: FastifyInstance) {
  app.get("/apartments/:id", async (request, reply) => {
    const getApartmentParams = z.object({ id: z.string() });

    const { id } = getApartmentParams.parse(request.params);

    const apartment = await prisma.apartments.findUnique({
      where: { id },
    });

    if (!apartment) {
      return reply.status(400).send({ message: "Apartment not found!" });
    }

    return { apartment };
  });
}
