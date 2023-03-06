import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useBuildings } from "../../hooks/useBuildings";
import { Button } from "../Button";
import { Form, Label, FooterForm, RowTwoColumns } from "../Form/styles";
import { Input } from "../Input";
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalCloseButton,
} from "../Modal/styles";

interface INewApartmentModal {
  buildingId: string;
  buildingName: string;
}

const newApartmentFormSchema = z.object({
  number: z.coerce.number().min(1),
  floor: z.coerce.number().min(1),
  number_of_bedrooms: z.coerce.number().min(1),
  rent_value: z.coerce.number().min(1),
});

type NewApartmentFormInputs = z.infer<typeof newApartmentFormSchema>;

export function NewApartmentModal({
  buildingId,
  buildingName,
}: INewApartmentModal) {
  const { createApartment } = useBuildings();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewApartmentFormInputs>({
    resolver: zodResolver(newApartmentFormSchema),
  });

  async function handleNewApartment(data: NewApartmentFormInputs) {
    await createApartment(buildingId, data);
    reset();
    window.location.reload();
  }

  return (
    <Dialog.Portal>
      <ModalOverlay />

      <ModalContent>
        <ModalTitle>
          Cadastrando novo <span>Apartamento</span>
        </ModalTitle>

        <ModalCloseButton>
          <X size={24} weight="bold" />
        </ModalCloseButton>

        <Form onSubmit={handleSubmit(handleNewApartment)}>
          <Label htmlFor="building_name">
            Edifício:
            <Input
              type="text"
              id="building_name"
              value={buildingName}
              readOnly
            />
          </Label>

          <RowTwoColumns>
            <Label htmlFor="number">
              Número do apartamento:
              <Input
                type="number"
                id="number"
                {...register("number")}
                error={!!errors.number}
                required
              />
            </Label>

            <Label htmlFor="floor">
              Andar:
              <Input
                type="number"
                id="floor"
                suffix="º"
                {...register("floor")}
                error={!!errors.floor}
                required
              />
            </Label>
          </RowTwoColumns>

          <RowTwoColumns>
            <Label htmlFor="number_of_bedrooms">
              Quantidade de quartos:
              <Input
                type="number"
                id="number_of_bedrooms"
                {...register("number_of_bedrooms")}
                error={!!errors.number_of_bedrooms}
                required
              />
            </Label>

            <Label htmlFor="rent_value">
              Valor do aluguel:
              <Input
                type="number"
                id="rent_value"
                prefix="R$"
                suffix="/mês"
                {...register("rent_value")}
                error={!!errors.rent_value}
                required
              />
            </Label>
          </RowTwoColumns>

          <FooterForm>
            <Dialog.Close asChild>
              <Button type="reset" variant="secondary" text="Cancelar" />
            </Dialog.Close>
            <Button
              type="submit"
              disabled={isSubmitting}
              text={isSubmitting ? "Cadastrando..." : "Cadastrar apartamento"}
            />
          </FooterForm>
        </Form>
      </ModalContent>
    </Dialog.Portal>
  );
}
