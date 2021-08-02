import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";

export interface TitleCardProps {
  title: string;
  alt: string;
  url: string;
  height: number;
  width: number;
}

export const TitleCard: FC<TitleCardProps> = ({
  title,
  alt,
  url,
  height,
  width,
}) => {
  return (
    <div className="bg-gray-300 flex flex-col">
      <div className="flex-auto flex flex-col justify-center">
        <Image
          className=""
          src={url}
          alt={alt}
          height={height}
          width={width}
          layout="responsive"
        />
      </div>
      <div className="self-center">{title}</div>
    </div>
  );
};
