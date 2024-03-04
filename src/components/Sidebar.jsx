import React from "react";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../constants/navigation";
import { FcBullish } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base my-1";

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      key={item.key}
      className={classNames(
        pathname === item.path
          ? "text-white bg-neutral-700"
          : "text-neutral-400",
        linkClasses
      )}
    >
      <span className="text-lg">{item.icon}</span>
      {item.label}
    </Link>
  );
}

export default function Sidebar() {
  return (
    <div className="bg-neutral-900 w-64 p-3 flex flex-col justify-between">
      <div className="flex flex-row items-center gap-2 px-1 py-3 text-white">
        <FcBullish fontSize={24} />
        <span className="text-lg">OpenShop</span>
      </div>
      <div className="flex-1 flex-col py-5 gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <div className={classNames("text-red-500 cursor-pointer", linkClasses)}>
          <span className="text-lg">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}
