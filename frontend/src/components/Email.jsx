import React from "react";
import { MdCropSquare, MdStar, MdStarOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Email = () => {
    const navigate  = useNavigate();
    const openMail = ()=>{
        navigate("/mail/1234")

    }
  return (
    <div onClick={openMail} className="flex items-center justify-between border-b border-gray-200 px-4 py-2 text-sm hover:cursor-pointer hover:shadow-md">
      <div className="flex items-center gap-2 px-3 py-1 ">
        <div className="text-gray-400">
          <MdCropSquare size={"20px"} />
        </div>
        <div  className="text-gray-400">
            <MdStarOutline size={'20px'}/>
        </div>
        <div className="font-semibold ">
            <h1> coding ninja's</h1>
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          tempore fugiat alias sint officia dicta?
        </p>
      </div>
      <div className="flex-none text-gray text-sm">
        <p>12days ago</p>
      </div>
    </div>
  );
};

export default Email;
