/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

interface Props {
  border?: string;
  bgcolor?: string;
  children: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string;
  width?: string;
  color?: string;
  align?: any;
  padding?: string;
  margin?: string;
  font?: string;
  size?: "md" | "sm";
  className?: string;
  custom: "ourCommunity" | "contactUs";
}

const Button: React.FC<Props> = ({
  border,
  color,
  padding,
  margin,
  font,
  align,
  bgcolor,
  children,
  height,
  className,

  onClick,
  radius,
  width,

  custom = "ourCommunity",
}) => {
  const customs = {
    ourCommunity:
      "w-40   h-12 rounded-full leading-4  text-sm p-p2  shadow-shd2 bg-movfateh text-white  ",
    contactUs:
      "w-40   h-12 rounded-full leading-4 text-sm p-p2  shadow-shd2 bg-white text-black  ",
  };

  // const sizes = {
  //   sm: "w-[160px h-[32px]",
  //   xsm: "w-[168px] lg:w-[150px] h-[48px]",
  //   md: "w-[180px] h-[45px]",
  //   xmd: "w-[220px] h-[46px]",
  //   xl: "w-[771px] h-[48px]",
  // };
  // const borders = {
  //   borderNone: "border-none",
  // };
  // const fontS = {
  //   sm: "text-sm",
  //   md: "buttonf",
  // };

  // const bgcolors = {
  //   primary: "primary",
  //   secondary: "#722ed1",
  //   transparent: "Transparent",
  //   white: "#fff",
  // };

  return (
    <a
      onClick={onClick}
      style={{
        backgroundColor: bgcolor,
        color,
        padding,
        margin,
        borderRadius: radius,
        height,
        width,
        fontSize: font,
        border,
        textAlign: align,
      }}
      className={` ${customs[custom]} border ${className} `}
    >
      {children}
    </a>
  );
};

export default Button;
