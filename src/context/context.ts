import { createContext } from "react";
import { IFilterContext } from "../types/context.types";

export const FilterContext = createContext<IFilterContext | null>(null)