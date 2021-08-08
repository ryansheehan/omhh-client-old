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
    <div className="flex flex-col gap-2">
      <header className="bg-gray-200 text-center font-header text-2xl">
        {title}
      </header>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 mx-2 lg:grid-cols-4">
        {Cards}
      </div>
    </div>
  );
};
