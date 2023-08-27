import { FC, ReactNode, useContext } from "react";
import styles from "../filters.module.scss";
import { FilterContext } from "../../../context/context";
import { IFilterContext } from "../../../types/context.types";

interface ButtonProps {
  children: ReactNode;
  filter: string;
}

const FilterButton: FC<ButtonProps> = ({ children, filter }) => {
  const { filter: currentFilter, setFilter } = useContext(
    FilterContext
  ) as IFilterContext;

  const filterHandler = () => {
    setFilter(filter);
  };

  return (
    <button
      onClick={() => filterHandler()}
      className={`${styles.button} ${
        currentFilter === filter ? styles["button-active"] : ""
      }`}
    >
      {children}
    </button>
  );
};

export default FilterButton;
