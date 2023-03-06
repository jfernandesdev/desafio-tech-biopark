type Tenant = {
  name: string;
  cpf: string;
  date_of_birth: string;
  email: string;
  phone: string;
};

type Rent = {
  id: string;
  locator: string;
  start_date: string;
  end_date: string;
  rent_value: number;
  tenant: Tenant;
};

type ApartmentData = {
  id: string;
  building_id: string;
  number: number;
  floor: number;
  number_of_bedrooms: number;
  rent_value: number;
  availability: boolean;
  created_at: string;
  building: {
    name: string;
  };
};

export interface IApartment {
  apartment: ApartmentData;
  lastRent?: Rent;
}
