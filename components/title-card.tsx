import { FC } from "react";
import Image from "next/image";
import getConfig from "next/config";
import classNames from "classnames";

const { publicRuntimeConfig } = getConfig();
const sizes = publicRuntimeConfig.thumbnailSizes;

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
    <div className=" flex flex-col overflow-hidden">
      <div className="flex-auto flex flex-col justify-center">
        <Image
          className=""
          src={url}
          alt={alt}
          height={height}
          width={width}
          sizes={sizes}
          quality={10}
          layout="responsive"
        />
      </div>
      <div className="text-center m-1 font-body text-base">{title}</div>
    </div>
  );
};
