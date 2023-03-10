import { ReactNode } from "react";

export interface IBuildingsProviderProps {
  children: ReactNode;
}

export interface IBuilding {
  id: string;
  name: string;
  address: string;
  number_of_floors: number;
  opening_date: string;
  created_at: string;
  Apartments?: {
    id: string;
    availability: boolean;
  }[];
}

export interface ICreateBuildingInput {
  name: string;
  address: string;
  number_of_floors: number;
  opening_date: Date;
}

export interface ICreateApartmentInput {
  number: number;
  floor: number;
  number_of_bedrooms: number;
  rent_value: number;
}

export interface ICreateRentInput {
  cpf: string;
  name: string;
  email: string;
  date_of_birth: Date;
  phone: string;
  start_date: Date;
  end_date: Date;
}
