import { FC } from "react";
import { UserProfile } from "../../types/profile";
import ProfileItem from "./ProfileItem/ProfileItem";

interface ListProps {
  items: UserProfile[];
}

const ProfileList: FC<ListProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((el) => {
        return <ProfileItem key={el.id} props={el} />;
      })}
    </div>
  );
};

export default ProfileList;
