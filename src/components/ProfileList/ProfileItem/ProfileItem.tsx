import { FC } from "react";
import { UserProfile } from "../../../types/profile";
import styles from "../profile.module.scss";

interface ProfileItemProps {
  props: UserProfile;
}

function randomImg() {
  const number = Math.floor(Math.random() * 9) + 1;
  return `./src/img/face${number}.jpg`;
}

const ProfileItem: FC<ProfileItemProps> = ({ props }) => {
  return (
    <div className={styles.block}>
      <img alt="Аватар." src={randomImg()} className={styles.avatar}></img>
      <div>
        <div className="flex gap-1">
          <h2>{props.firstName}</h2>
          <p>{props.lastName}</p>
          <span className="text-slate-400">{props.userTag}</span>
        </div>
        <p className="text-slate-600">{props.position}</p>
      </div>
    </div>
  );
};

export default ProfileItem;
