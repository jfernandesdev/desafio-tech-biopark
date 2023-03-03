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

const createApartmentBodySchema = z.object({
  number: z.number().int(),
  number_of_bedrooms: z.number().int(),
  rent_value: z.number(),
  availability: z.boolean(),
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

  app.post("/:id/apartments", async (request, reply) => {
    try {
      const getBuildingParams = z.object({ id: z.string() });

      const { id } = getBuildingParams.parse(request.params);
      const apartmentInfo = createApartmentBodySchema.parse(request.body);

      const building = await prisma.buildings.findUnique({
        where: {
          id,
        },
      });

      if (!building) {
        return reply.status(400).send({
          message: "Building not found!",
        });
      }

      const apartment = await prisma.apartments.create({
        data: {
          id: randomUUID(),
          building_id: id,
          number: apartmentInfo.number,
          number_of_bedrooms: apartmentInfo.number_of_bedrooms,
          rent_value: apartmentInfo.rent_value,
          availability: apartmentInfo.availability,
        },
      });

      return reply.status(201).send({ apartment });
    } catch (error) {
      const errorMessage =
        error instanceof z.ZodError
          ? `${error.issues[0].message} in ${error.issues[0].path[0]}`
          : "Validation error";

      return reply.status(400).send({ message: errorMessage });
    }
  });
}
