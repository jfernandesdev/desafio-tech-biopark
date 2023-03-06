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

const newBuildingFormSchema = z.object({
  name: z.string().min(3),
  address: z.string().min(3),
  number_of_floors: z.coerce.number().min(1),
  opening_date: z.coerce.date(),
});

type NewBuildingFormInputs = z.infer<typeof newBuildingFormSchema>;

export function NewBuildingModal() {
  const { createBuilding } = useBuildings();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewBuildingFormInputs>({
    resolver: zodResolver(newBuildingFormSchema),
  });

  async function handleNewBuilding(data: NewBuildingFormInputs) {
    await createBuilding(data);

    reset();
  }

  return (
    <Dialog.Portal>
      <ModalOverlay />

      <ModalContent>
        <ModalTitle>
          Cadastrando novo <span>Edifício</span>
        </ModalTitle>

        <ModalCloseButton>
          <X size={24} weight="bold" />
        </ModalCloseButton>

        <Form onSubmit={handleSubmit(handleNewBuilding)}>
          <Label htmlFor="name">
            Nome do edifício:
            <Input
              type="text"
              id="name"
              {...register("name")}
              error={!!errors.name}
              required
            />
          </Label>

          <Label htmlFor="address">
            Endereço:
            <Input
              type="text"
              id="address"
              {...register("address")}
              error={!!errors.address}
              required
            />
          </Label>

          <RowTwoColumns>
            <Label htmlFor="number_of_floors">
              Número de andares:
              <Input
                type="number"
                id="number_of_floors"
                min="1"
                max="99"
                {...register("number_of_floors")}
                error={!!errors.number_of_floors}
                required
              />
            </Label>

            <Label htmlFor="opening_date">
              Data de inauguração:
              <Input
                type="date"
                id="opening_date"
                {...register("opening_date")}
                error={!!errors.opening_date}
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
              text={isSubmitting ? "Cadastrando..." : "Cadastrar edifício"}
            />
          </FooterForm>
        </Form>
      </ModalContent>
    </Dialog.Portal>
  );
}
