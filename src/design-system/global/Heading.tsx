import React from "react";

interface Props {
  border?: string;
  children: React.ReactNode;
  children2: React.ReactNode;
  height?: string;
  width?: string;
  color?: string;
  align?: any;
  padding?: string;
  margin?: string;
  font?: string;
  className?: string;
  custom: "headingHero";
}
const Heading: React.FC<Props> = ({
  color,
  padding,
  margin,
  font,
  align,
  children,
  children2,
  height,
  className,
  width,

  custom,
}) => {
  const customs = {
    headingHero: "text-4xl font-bold text-primary leading-none sm:text-6xl ",
  };

  return (
    <h1
      style={{
        color,
        padding,
        margin,
        height,
        width,
        fontSize: font,

        textAlign: align,
      }}
      className={` ${customs[custom]}  ${className} `}
    >
      {children}
      <span>{children2}</span>
    </h1>
  );
};
export default Heading;
