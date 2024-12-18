import React from "react";
import email from "../../assets/media/Group.png";
import phone from "../../assets/media/Vector (4).png";
import Message from "./Message";
import SideDiv from "../DesignAccessories/SideDiv";

const Contact = ({ ownerInfo }) => {
  return (
    <section id="contact" className="flex flex-col space-y-10 w-[80%] 2xl:h-screen mb-4">
      <div className="flex flex-col justify-center items-center z-10 space-y-12">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl ">
          Contact Form<span className="text-[#8B6FC4]">.</span>
        </h1>
        <p className="text-[14px] text-center md:text-[16px] font-normal text-gray-500 leading-6">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Whether you have a question
          or just want to say hello, feel free to reach out. Looking forward to
          connecting with you!
        </p>
      </div>

      <div className="w-full flex justify-center">
        <div className="md:w-[80%] grid grid-cols-1 grid-rows-2  md:grid-cols-1 xl:grid-cols-2 md:grid-rows-1 gap-8 md:text-[14px] text-xs text-gray-600">
          <div className="flex items-center justify-center border border-[#E5EFFF] py-5 px-2 rounded-xl shadow-sm">
            <a
              href="mailto:omar.bendary.jr@gmail.com"
              className="flex w-full items-center justify-center"
            >
              <span className="mr-4">
                <img src={email} />
              </span>{" "}
              <span className="flex-1 md:flex-grow-0">
                {" "}
                {ownerInfo.email}
              </span>
            </a>
          </div>
          <div className="flex items-center justify-center border border-[#E5EFFF] py-5 px-2 rounded-xl shadow-sm">
            <a
              href="tel:+201288153092"
              className="flex w-full items-center md:justify-center"
            >
              <span className="mr-4 md:pr-20 lg:pr-0 ml-2">
                <img src={phone} />
              </span>{" "}
              <span className="flex-1 md:flex-grow-0 whitespace-nowrap">
                {ownerInfo.phone}
              </span>
            </a>
          </div>
        </div>
      </div>

      <Message />
      {/* <SideDiv position={"right"} top={"top-[4600px]"} left={"left-[-1500px]"} /> */}
    </section>
  );
};

export default Contact;
