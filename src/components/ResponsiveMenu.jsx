import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "lucide-react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ResponsiveMenu = ({ openNav, setOpenNav }) => {
  const { user } = useUser();
  return (
    <div
      className={`${
        openNav ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}
    >
      <div>
        <div className="flex items-center justify-start gap-3">
          {user ? <UserButton size={50} /> : <FaUserCircle size={50} />}
          <div>
            <h1>Hello, {user?.firstName}</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="flex flex-col gap-7 text-2xl font-semibold">
            <NavLink to={'/'} onClick={()=>setOpenNav(false)} className="cursor-pointer"><li>Trang chủ</li></NavLink>
            <NavLink to={"/products"} onClick={()=>setOpenNav(false)} className="cursor-pointer"><li>Sản phẩm</li></NavLink>
            <NavLink to={"/about"} onClick={()=>setOpenNav(false)} className="cursor-pointer"><li>Giới thiệu</li></NavLink>
            <NavLink to={"/contact"} onClick={()=>setOpenNav(false)} className="cursor-pointer"><li>Liên hệ</li></NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
