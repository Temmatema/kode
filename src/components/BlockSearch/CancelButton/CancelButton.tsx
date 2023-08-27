import { Dispatch, FC, SetStateAction } from "react";
import styles from "../block.module.scss";

interface CancelButtonProps {
  setInputValue: Dispatch<SetStateAction<string>>;
}

const CancelButton: FC<CancelButtonProps> = ({ setInputValue }) => {

  const cancelHandler = () => {
    setInputValue('')
  }

  return (
    <button className={styles.btn} onClick={cancelHandler} type="button">
      Отмена
    </button>
  );
};

export default CancelButton;
