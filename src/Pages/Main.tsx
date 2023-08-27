import { FC, useState } from "react";
import BlockSearch from "../components/BlockSearch/BlockSearch";
import Skeleton from "../components/Skeleton/Skeleton";
import ProfileList from "../components/ProfileList/ProfileList";
import Filters from "../components/Filters/Filters";
import { useProfiles } from "../hooks/useProfiles";
import { FilterContext } from "../context/context";

const Main: FC = () => {
  const [filter, setFilter] = useState("all");
  const { data, isLoading } = useProfiles(filter);

  return (
    <FilterContext.Provider value={{
      filter,
      setFilter
    }}>
      <div className="p-4 overflow-hidden">
        <BlockSearch />
        <Filters />
        {isLoading ? <Skeleton /> : data && <ProfileList items={data.items} />}
      </div>
    </FilterContext.Provider>
  );
};

export default Main;
