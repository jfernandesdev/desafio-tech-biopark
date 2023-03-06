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
} from "./Interfaces";

export interface IBuildingsContextData {
  buildings: IBuilding[];
  fetchBuildings: () => Promise<void>;
  createBuilding: (data: ICreateBuildingInput) => Promise<void>;
  createApartment: (
    id_building: string,
    data: ICreateApartmentInput
  ) => Promise<void>;
}

export const BuildingsContext = createContext({} as IBuildingsContextData);

export function BuildingsProvider({ children }: IBuildingsProviderProps) {
  const [buildings, setBuildings] = useState<IBuilding[]>([]);

  const fetchBuildings = useCallback(async () => {
    const response = await api.get("/buildings");

    setBuildings(response.data);
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

      await api.post(`/buildings/${id_building}/apartments`, {
        number,
        floor,
        number_of_bedrooms,
        rent_value,
        availability: true,
      });
    },
    []
  );

  const contextValue = useMemo(() => {
    return { buildings, createBuilding, fetchBuildings, createApartment };
  }, [buildings, fetchBuildings, createBuilding, createApartment]);

  useEffect(() => {
    fetchBuildings();
  }, [fetchBuildings]);

  return (
    <BuildingsContext.Provider value={contextValue}>
      {children}
    </BuildingsContext.Provider>
  );
}
