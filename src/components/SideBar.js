import React from "react";
import { AiFillHome, AiFillShop, AiFillFile } from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-test",
  },
  {
    title: "Products",
    path: "/products",
    icon: <AiFillShop />,
    cName: "nav-test",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <AiFillFile />,
    cName: "nav-test",
  },
];
