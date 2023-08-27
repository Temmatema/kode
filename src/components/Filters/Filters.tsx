import { FC } from "react";
import FilterButton from "./FilterButton/FilterButton";
import styles from "./filters.module.scss";

const filterNames = [
  "Все",
  "Designers",
  "Analysts",
  "Managers",
  "iOS",
  "Android",
];

const filterKeys = [
  "all",
  "design",
  "analytics",
  "management",
  "ios",
  "android",
];

const Filters: FC = () => {

  return (
    <div className={styles.filters}>
      {filterNames.map((filterName, index) => (
        <FilterButton
          key={filterKeys[index]}
          filter={filterKeys[index]}
        >
          {filterName}
        </FilterButton>
      ))}
    </div>
  );
};

export default Filters;
