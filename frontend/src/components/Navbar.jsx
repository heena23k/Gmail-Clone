import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";

const Navbar = () => {
  const user = false;
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 hover:bg-gray-200 rounded-full cursor-pointer">
            <RxHamburgerMenu />
          </div>
          <img
            className="w-8 h-6"
            src="https://static.vecteezy.com/system/resources/previews/013/948/544/non_2x/gmail-logo-on-transparent-white-background-free-vector.jpg"
            alt="logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      {user && (
        <div className="flex items-center gap-1">
          <div className="p-2 rounded-full hover:bg-gray-200">
            <FaRegQuestionCircle size={"24"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200">
            <IoSettingsOutline size={"24"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200">
            <TbGridDots size={"24"} />
          </div>
          <Avatar
            src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?w=360"
            size="40"
            round={true}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
