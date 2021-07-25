import { FC } from "react";
import { Header } from "./header";

export const Layout: FC = ({ children }) => {
  return (
    <div className="container min-h-screen flex flex-col">
      <Header className="p-2" />
      <main className="bg-yellow-400 flex-auto flex">{children}</main>
    </div>
  );
};
