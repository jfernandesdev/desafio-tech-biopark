import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

import { api } from "../lib/axios";
import {
  IBuilding,
  ICreateBuildingInput,
  IBuildingsProviderProps,
  ICreateApartmentInput,
  ICreateRentInput,
} from "./Interfaces";

export interface IBuildingsContextData {
  buildings: IBuilding[];
  fetchBuildings: () => Promise<void>;
  createBuilding: (data: ICreateBuildingInput) => Promise<void>;
  createRent: (id_apartment: string, data: ICreateRentInput) => Promise<void>;
  createApartment: (
    id_building: string,
    data: ICreateApartmentInput
  ) => Promise<void>;
}

export const BuildingsContext = createContext({} as IBuildingsContextData);

export function BuildingsProvider({ children }: IBuildingsProviderProps) {
  const [buildings, setBuildings] = useState<IBuilding[]>([]);

  const fetchBuildings = useCallback(async () => {
    try {
      const response = await api.get("/buildings");
      setBuildings(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const createBuilding = useCallback(async (data: ICreateBuildingInput) => {
    const { name, address, number_of_floors, opening_date } = data;

    const response = await api.post("/buildings", {
      name,
      address,
      number_of_floors,
      opening_date: new Date(opening_date),
    });

    setBuildings((state) => [response.data, ...state]);
  }, []);

  const createApartment = useCallback(
    async (id_building: string, data: ICreateApartmentInput) => {
      const { number, floor, number_of_bedrooms, rent_value } = data;

      try {
        await api.post(`/buildings/${id_building}/apartments`, {
          number,
          floor,
          number_of_bedrooms,
          rent_value,
          availability: true,
        });

        console.log("Apartamento criado com sucesso!");
      } catch (err) {
        console.log(err);
      }
    },
    []
  );

  const createRent = useCallback(
    async (id_apartment: string, data: ICreateRentInput) => {
      const { cpf, name, email, date_of_birth, phone, start_date, end_date } =
        data;

      try {
        await api.post(`/apartments/${id_apartment}/rent`, {
          cpf,
          name,
          email,
          date_of_birth,
          phone,
          start_date,
          end_date,
        });

        console.log("Apartamento alugado com sucesso!");
      } catch (err) {
        console.log(err);
      }
    },
    []
  );

  const contextValue = useMemo(() => {
    return {
      buildings,
      createBuilding,
      fetchBuildings,
      createApartment,
      createRent,
    };
  }, [buildings, fetchBuildings, createBuilding, createApartment, createRent]);

  useEffect(() => {
    fetchBuildings();
  }, [fetchBuildings]);

  return (
    <BuildingsContext.Provider value={contextValue}>
      {children}
    </BuildingsContext.Provider>
  );
}
