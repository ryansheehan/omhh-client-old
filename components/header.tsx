import { FC } from "react";
import classnames from "classnames";

import { OmhhLogo } from "./omhh-logo";

export const Header: FC<{ className?: string }> = ({ className }) => {
  return (
    <header className={classnames("flex justify-center", className)}>
      <OmhhLogo className="w-72" />
    </header>
  );
};
