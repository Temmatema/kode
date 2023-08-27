import { Dispatch, SetStateAction } from "react";

export interface IFilterContext {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}