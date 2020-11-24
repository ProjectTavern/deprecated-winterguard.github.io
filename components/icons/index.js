import React from "react";

import Github from "./Github";

const Icon = ({ children, name, ...props }) => {
  if (name) {
    return name;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Icon;

export { Github };
