import { FC, memo } from "react";
import styles from "./skeleton.module.scss";

const Skeleton: FC = memo(() => {
  return (
    <div className={styles.wrap}>
      <div className={styles.block}>
        <div className={styles.avatar}></div>
        <div className={styles.block__right}>
          <div
           className={styles.block__title}></div>
          <div className={styles.block__text}></div>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.avatar}></div>
        <div className={styles.block__right}>
          <div
           className={styles.block__title}></div>
          <div className={styles.block__text}></div>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.avatar}></div>
        <div className={styles.block__right}>
          <div
           className={styles.block__title}></div>
          <div className={styles.block__text}></div>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.avatar}></div>
        <div className={styles.block__right}>
          <div
           className={styles.block__title}></div>
          <div className={styles.block__text}></div>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.avatar}></div>
        <div className={styles.block__right}>
          <div
           className={styles.block__title}></div>
          <div className={styles.block__text}></div>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.avatar}></div>
        <div className={styles.block__right}>
          <div
           className={styles.block__title}></div>
          <div className={styles.block__text}></div>
        </div>
      </div>
    </div>
  );
});

export default Skeleton;
