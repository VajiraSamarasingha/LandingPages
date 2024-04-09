import React from "react";

const sizes = {
  s: "text-[27px] font-semibold md:text-[25px] sm:text-[23px]",
  md: "text-5xl font-bold md:text-[44px] sm:text-[38px]",
  xs: "text-[21px] font-semibold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-deep_purple-500 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
