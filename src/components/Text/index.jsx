import React from "react";

const sizes = {
  xs: "text-sm font-medium",
  lg: "text-[22px] font-medium",
  s: "text-base font-normal",
  md: "text-lg font-normal",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
