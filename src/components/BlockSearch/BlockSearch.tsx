import { FC, useState } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "./block.module.scss";
import InputSearch from "./InputSearch/InputSearch";
import CancelButton from "./CancelButton/CancelButton";

const BlockSearch: FC = () => {
  const [inputValue, setInputValue] = useState("");

  const inputStyle = {
    width: inputValue ? "calc(100% - 70px)" : "100%",
  };

  return (
    <div className="flex justify-between mb-2">
      <div style={inputStyle} className={styles.search}>
        <label className="flex w-full">
          <InputSearch
            setInputValue={setInputValue}
            value={inputValue}
          />
          <FiSearch className={styles.svg} />
        </label>
      </div>
      {inputValue ? (
        <CancelButton
          setInputValue={setInputValue}
        />
      ) : null}
    </div>
  );
};

export default BlockSearch;
