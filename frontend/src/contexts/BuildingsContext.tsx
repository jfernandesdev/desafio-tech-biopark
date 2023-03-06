import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  ReactNode,
} from "react";

import { api } from "../lib/axios";

interface IBuilding {
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

interface ICreateBuildingInput {
  name: string;
  address: string;
  number_of_floors: number;
  opening_date: Date;
}

interface IBuildingsProviderProps {
  children: ReactNode;
}

export interface IBuildingsContextData {
  buildings: IBuilding[];
  fetchBuildings: () => Promise<void>;
  createBuilding: (data: ICreateBuildingInput) => Promise<void>;
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

  const contextValue = useMemo(() => {
    return { buildings, createBuilding, fetchBuildings };
  }, [buildings, fetchBuildings, createBuilding]);

  useEffect(() => {
    fetchBuildings();
  }, [fetchBuildings]);

  return (
    <BuildingsContext.Provider value={contextValue}>
      {children}
    </BuildingsContext.Provider>
  );
}
