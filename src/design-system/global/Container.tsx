import React from "react";
import picSection from "./../assets/b3e7029a-3aa9-4e0c-9d52-3bdd1ea04418.png";
import Button from "./Buttons";
import "../../index";
export const Container = () => {
  return (
    <section className=" bg-gradient-to-t   from-bluegrad  dark:text-gray-100">
      <div className="container  flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center  p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold text-primary leading-none sm:text-6xl">
            Your technology
            <span className="dark:text-violet-400 "> patner all-time</span>
          </h1>
          <p className="mt-6 text-sm text-gray-400 mb-8 text- text-lg sm:mb-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            voluptatum dolor iste consequuntur. Amet
          </p>

          <br className="hidden md:inline  lg:hidden" />
          <div className="flex  items-center mt-7 flex-col space-y-4 sm:items-center justify-center sm:flex-row sm:space-y-0  sm:space-x-4 lg:justify-start">
            <Button custom="ourCommunity"> Our Community</Button>
            <Button custom="contactUs"> Contact Us</Button>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={picSection}
            alt=""
            className="object-contain h-110 sm:h-80 lg:h-96 xl:h-112 w-full 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};
