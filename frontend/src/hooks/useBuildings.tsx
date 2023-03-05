import { useContext } from "react";

import {
  BuildingsContext,
  IBuildingsContextData,
} from "../contexts/BuildingsContext";

export function useBuildings(): IBuildingsContextData {
  const context = useContext(BuildingsContext);

  return context;
}
