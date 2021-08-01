import { FC } from "react";
import classNames from "classnames";

export interface TitleCardProps {
  title: string;
}

export const TitleCard: FC<TitleCardProps> = ({ title }) => {
  return (
    <div className="bg-gray-300 h-64 grid place-items-center">
      <div>{title}</div>
    </div>
  );
};
