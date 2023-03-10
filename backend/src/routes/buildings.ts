import { FastifyInstance } from "fastify";
import { randomUUID } from "node:crypto";
import { z } from "zod";

import { prisma } from "../lib/prisma";

const createBuildingBodySchema = z.object({
  name: z.string().min(3),
  address: z.string().min(3),
  number_of_floors: z.number().int().min(1),
  opening_date: z.coerce.date(),
});

const createApartmentBodySchema = z.object({
  number: z.number().int(),
  floor: z.number().int(),
  number_of_bedrooms: z.number().int(),
  rent_value: z.number(),
  availability: z.boolean(),
});

export async function buildingsRoutes(app: FastifyInstance) {
  app.post("/buildings", async (request, reply) => {
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

      const newBuilding = await prisma.buildings.create({
        data: {
          id: randomUUID(),
          name: buildingInfo.name,
          address: buildingInfo.address,
          number_of_floors: Number(buildingInfo.number_of_floors),
          opening_date: new Date(buildingInfo.opening_date),
        },
      });

      return reply.status(201).send(newBuilding);
    } catch (error) {
      const errorMessage =
        error instanceof z.ZodError
          ? `${error.issues[0].message} in ${error.issues[0].path[0]}`
          : "Validation error";

      return reply.status(400).send({ message: errorMessage });
    }
  });

  app.get("/buildings", async () => {
    const buildings = await prisma.buildings.findMany({
      include: {
        Apartments: {
          select: {
            id: true,
            availability: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return buildings;
  });

  app.get("/buildings/:id", async (request, reply) => {
    const getBuildingParams = z.object({ id: z.string() });

    const { id } = getBuildingParams.parse(request.params);

    const building = await prisma.buildings.findUnique({
      where: { id },
    });

    if (!building) {
      return reply.status(400).send({ message: "Building not found!" });
    }

    return building;
  });

  app.get("/buildings/:id/apartments", async (request, reply) => {
    const getBuildingParams = z.object({ id: z.string() });
    const { id } = getBuildingParams.parse(request.params);

    const building = await prisma.buildings.findUnique({
      where: {
        id,
      },
    });

    if (!building) {
      return reply.status(400).send({
        message: "Building not found.",
      });
    }

    const apartments = await prisma.apartments.findMany({
      where: { building_id: id },
      select: {
        id: true,
        number: true,
        floor: true,
        number_of_bedrooms: true,
        rent_value: true,
        availability: true,
      },
    });

    return apartments;
  });

  app.post("/buildings/:id/apartments", async (request, reply) => {
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

      const existingApartment = await prisma.apartments.findFirst({
        where: {
          building_id: id,
          number: apartmentInfo.number,
        },
      });

      if (existingApartment) {
        return reply.status(400).send({
          message: "The apartment already exists in the specified building.",
        });
      }

      await prisma.apartments.create({
        data: {
          id: randomUUID(),
          building_id: id,
          number: apartmentInfo.number,
          floor: apartmentInfo.floor,
          number_of_bedrooms: apartmentInfo.number_of_bedrooms,
          rent_value: apartmentInfo.rent_value,
          availability: apartmentInfo.availability,
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
