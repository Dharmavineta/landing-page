import React, { FC } from "react";

type props = {
  children: React.ReactNode;
  className?: string;
};

const Container: FC<props> = ({ children, className }) => {
  return (
    <div className={`max-w-[1440px] mx-auto px-5 ${className}`}>{children}</div>
  );
};

export default Container;
