import { Dispatch, FC, SetStateAction } from "react";
import styles from '../block.module.scss'

interface InputSearchProps {
  value: string;
  setInputValue: Dispatch<SetStateAction<string>>
}

const InputSearch: FC<InputSearchProps> = ({ setInputValue, value }) => {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={(event) => setInputValue(event.target.value)}
      type="text"
      placeholder="Введи имя, тег, почту..."
    />
  );
};

export default InputSearch;
