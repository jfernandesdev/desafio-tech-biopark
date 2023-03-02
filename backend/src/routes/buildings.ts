import { FastifyInstance } from "fastify";
import { randomUUID } from "node:crypto";
import { z } from "zod";

import { prisma } from "../lib/prisma";

const createBuildingBodySchema = z.object({
  name: z.string(),
  address: z.string(),
  number_of_floors: z.number(),
  opening_date: z.string(),
});

export async function buildingsRoutes(app: FastifyInstance) {
  app.post("/", async (request, reply) => {
    try {
      const buildingInfo = createBuildingBodySchema.parse(request.body);

      const building = await prisma.buildings.findUnique({
        where: {
          name: buildingInfo.name,
        },
      });

      if (building) {
        return reply.status(400).send({
          message: "There is already a building with this name.",
        });
      }

      await prisma.buildings.create({
        data: {
          id: randomUUID(),
          name: buildingInfo.name,
          address: buildingInfo.address,
          number_of_floors: Number(buildingInfo.number_of_floors),
          opening_date: new Date(buildingInfo.opening_date),
        },
      });

      return reply.status(201).send();
    } catch (error) {
      const errorMessage =
        error instanceof z.ZodError
          ? `${error.issues[0].message} in ${error.issues[0].path[0]}`
          : "Validation error";

      return reply.status(400).send({ message: errorMessage });
    }
  });
}
