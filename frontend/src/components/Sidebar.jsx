import React from "react";
import { LuPencil } from "react-icons/lu";
import {  MdMoveToInbox, MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineSend, MdOutlineStar, MdOutlineWatchLater } from "react-icons/md";

const Sidebar = () => {
  const sidebarItems = [
    { icon: <MdMoveToInbox size={"20px"} />, text: "Inbox" },
    { icon: <MdOutlineStar size={"20px"} />, text: "Starred" },
    { icon: <MdOutlineWatchLater size={"20px"} />, text: "Snoozed" },
    { icon: <MdOutlineSend size={"20px"} />, text: "Sent" },
    { icon: <MdOutlineDrafts  size={"20px"} />, text: "Drafts" },
    { icon: <MdOutlineKeyboardArrowDown size={"20px"} />, text: "More" },
  ];
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button className="flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md">
        
          <LuPencil size="20px" />
          Compose
        </button>
      </div>
      <div className="text-gray-500 ">
        {sidebarItems.map((item, index) => {
          return (
            <div className="flex items-center pl-6 py-1 gap-4 rounded-r-full my-2 cursor-pointer hover:bg-gray-200">
              {item.icon }
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
