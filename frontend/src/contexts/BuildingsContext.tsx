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

interface IBuildingsProviderProps {
  children: ReactNode;
}

export interface IBuildingsContextData {
  buildings: IBuilding[];
  fetchBuildings: () => Promise<void>;
}

export const BuildingsContext = createContext<IBuildingsContextData>(
  {} as IBuildingsContextData
);

export function BuildingsProvider({ children }: IBuildingsProviderProps) {
  const [buildings, setBuildings] = useState<IBuilding[]>([]);

  const fetchBuildings = useCallback(async () => {
    const response = await api.get("/buildings");

    setBuildings(response.data);
  }, []);

  const contextValue = useMemo(
    () => ({ buildings, fetchBuildings }),
    [buildings, fetchBuildings]
  );

  useEffect(() => {
    fetchBuildings();
  }, [fetchBuildings]);

  return (
    <BuildingsContext.Provider value={contextValue}>
      {children}
    </BuildingsContext.Provider>
  );
}
