import { FC } from "react";
import { TitleCard } from "./title-card";

export interface TitleCardData {
  title: string;
  alt: string;
  url: string;
  width: number;
  height: number;
}

export interface TitleCardGroupProps {
  title: string;
  items: TitleCardData[];
}

export const TitleCardGroup: FC<TitleCardGroupProps> = ({
  title,
  items = [],
}) => {
  const Cards = items.map(({ title, alt, url, width, height }) => (
    <TitleCard
      key={title}
      title={title}
      alt={alt}
      url={url}
      width={width}
      height={height}
    />
  ));

  return (
    <div>
      <header>{title}</header>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 mx-2 lg:grid-cols-4">
        {Cards}
      </div>
    </div>
  );
};
