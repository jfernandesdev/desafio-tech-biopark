import { FastifyInstance } from "fastify";
import { z } from "zod";

import { prisma } from "../lib/prisma";

const createRentsBodySchema = z.object({
  cpf: z.string(),
  name: z.string(),
  date_of_birth: z.coerce.date(),
  email: z.string().email(),
  phone: z.string(),
  start_date: z.coerce.date(),
  end_date: z.coerce.date(),
});

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

  app.post("/apartments/:id/rent", async (request, reply) => {
    const getApartmentParams = z.object({ id: z.string() });

    const { id } = getApartmentParams.parse(request.params);

    const apartment = await prisma.apartments.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        availability: true,
        rent_value: true,
      },
    });

    if (!apartment) {
      return reply.status(400).send({ message: "Apartment not found!" });
    }

    if (!apartment.availability) {
      return reply.status(400).send({ message: "Apartment unavailable." });
    }

    try {
      const rentalInfo = createRentsBodySchema.parse(request.body);

      const tenant = await prisma.tenants.findUnique({
        where: {
          cpf: rentalInfo.cpf,
        },
      });

      if (!tenant) {
        await prisma.tenants.create({
          data: {
            cpf: rentalInfo.cpf,
            name: rentalInfo.name,
            date_of_birth: rentalInfo.date_of_birth,
            email: rentalInfo.email,
            phone: rentalInfo.phone,
          },
        });
      }

      const rental = await prisma.rents.create({
        data: {
          apartment_id: apartment.id,
          rent_value: apartment.rent_value,
          tenant_id: rentalInfo.cpf,
          start_date: rentalInfo.start_date,
          end_date: rentalInfo.end_date,
        },
      });

      await prisma.apartments.update({
        where: {
          id: apartment.id,
        },
        data: {
          availability: false,
        },
      });

      return reply.status(201).send({ rental });
    } catch (error) {
      const errorMessage =
        error instanceof z.ZodError
          ? `${error.issues[0].message} in ${error.issues[0].path[0]}`
          : "Validation error";

      return reply.status(400).send({ message: errorMessage });
    }
  });
}
