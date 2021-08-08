import { FC } from "react";
import { Header } from "./header";

export const Layout: FC = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen min-w-full flex flex-col">
      <Header className="p-2" />
      <main className="flex-auto flex p-4">{children}</main>
    </div>
  );
};
