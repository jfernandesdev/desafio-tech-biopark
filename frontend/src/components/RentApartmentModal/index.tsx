import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { LadderSimple, Bed, CurrencyCircleDollar, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useBuildings } from "../../hooks/useBuildings";
import { priceFormatter } from "../../util/priceFormatter";
import { Button } from "../Button";
import {
  Form,
  SubtitleInfo,
  Label,
  FooterForm,
  RowTwoColumns,
  RowThreeColumns,
} from "../Form/styles";
import { Input } from "../Input";
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalCloseButton,
} from "../Modal/styles";

interface IRentApartmentModal {
  apartmentData: {
    id: string;
    number: number;
    floor: number;
    number_of_bedrooms: number;
    rent_value: number;
  };
}

const newRentFormSchema = z.object({
  cpf: z.string().min(11),
  name: z.string().min(3),
  email: z.string().email(),
  date_of_birth: z.coerce.date(),
  phone: z.string().min(3),
  start_date: z.coerce.date(),
  end_date: z.coerce.date(),
});

type NewRentFormInputs = z.infer<typeof newRentFormSchema>;

export function RentApartmentModal({ apartmentData }: IRentApartmentModal) {
  const { createRent } = useBuildings();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewRentFormInputs>({
    resolver: zodResolver(newRentFormSchema),
  });

  async function handleNewRent(data: NewRentFormInputs) {
    await createRent(apartmentData.id, data);

    reset();
    window.location.reload();
  }

  return (
    <Dialog.Portal>
      <ModalOverlay />

      <ModalContent>
        <ModalTitle>
          Alugando o <span>Apto. {apartmentData.number}</span>
        </ModalTitle>

        <SubtitleInfo>
          <span>
            <LadderSimple /> {apartmentData.floor}º andar
          </span>
          <span>
            <Bed />
            {apartmentData.number_of_bedrooms} quartos
          </span>
          <span>
            <CurrencyCircleDollar />
            {priceFormatter.format(apartmentData.rent_value)}/mês
          </span>
        </SubtitleInfo>

        <ModalCloseButton>
          <X size={24} weight="bold" />
        </ModalCloseButton>

        <Form onSubmit={handleSubmit(handleNewRent)}>
          <RowThreeColumns>
            <Label htmlFor="locator">
              Locador:
              <Input type="text" id="locator" value="Biopark" readOnly />
            </Label>

            <Label htmlFor="start_date">
              Data de início:
              <Input
                type="date"
                id="start_date"
                {...register("start_date")}
                error={!!errors.start_date}
                required
              />
            </Label>

            <Label htmlFor="end_date">
              Data de término:
              <Input
                type="date"
                id="end_date"
                {...register("end_date")}
                error={!!errors.end_date}
                required
              />
            </Label>
          </RowThreeColumns>

          <strong>Dados do Locatário:</strong>

          <RowThreeColumns>
            <Label htmlFor="name">
              Nome completo:
              <Input
                type="text"
                id="name"
                {...register("name")}
                error={!!errors.name}
                required
              />
            </Label>

            <Label htmlFor="cpf">
              CPF:
              <Input
                type="text"
                id="cpf"
                placeholder="000.000.000-00"
                {...register("cpf")}
                error={!!errors.cpf}
                required
              />
            </Label>

            <Label htmlFor="date_of_birth">
              Data de nascimento:
              <Input
                type="date"
                id="date_of_birth"
                {...register("date_of_birth")}
                error={!!errors.date_of_birth}
                required
              />
            </Label>
          </RowThreeColumns>

          <RowTwoColumns>
            <Label htmlFor="email">
              E-mail:
              <Input
                type="email"
                id="email"
                {...register("email")}
                error={!!errors.email}
                required
              />
            </Label>

            <Label htmlFor="phone">
              Telefone:
              <Input
                type="phone"
                id="phone"
                placeholder="(00) 0000-0000"
                {...register("phone")}
                error={!!errors.phone}
                required
              />
            </Label>
          </RowTwoColumns>

          <FooterForm>
            <Dialog.Close asChild>
              <Button
                type="reset"
                variant="secondary"
                text="Cancelar"
                onClick={() => reset()}
              />
            </Dialog.Close>
            <Button
              type="submit"
              disabled={isSubmitting}
              text={isSubmitting ? "Alugando..." : "Alugar apartamento"}
            />
          </FooterForm>
        </Form>
      </ModalContent>
    </Dialog.Portal>
  );
}
