import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdMovie,
  MdBook,
  MdBarChart,
  MdPerson,
  MdImage,
  MdBookmark,
  MdMusicNote,
  MdGamepad,
  Md3DRotation,
  MdChat,
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <NFTMarketplace />,
  },
  {
    name: "Image Generation",
    layout: "/admin",
    path: "/image",
    icon: <MdImage className="h-6 w-6" />,
    component: <></>,
  },
  {
    name: "Narrative",
    layout: "/admin",
    path: "/narrative",
    icon: <MdBook className="h-6 w-6" />,
    component: <></>,
  },
  {
    name: "Comics and Manga",
    layout: "/admin",
    path: "/comics",
    icon: <MdBookmark className="h-6 w-6" />,
    component: <></>,
  },
  {
    name: "Animation",
    layout: "/admin",
    path: "/animation",
    icon: <MdMovie className="h-6 w-6" />,
    component: <></>,
  },
  {
    name: "Audio and Voice",
    layout: "/admin",
    path: "/audio",
    icon: <MdMusicNote className="h-6 w-6" />,
    component: <></>,
  },
  {
    name: "Game Creation",
    layout: "/admin",
    path: "/game",
    icon: <MdGamepad className="h-6 w-6" />,
    component: <></>,
  },
  {
    name: "3D Creation",
    layout: "/admin",
    path: "/3d",
    icon: <Md3DRotation className="h-6 w-6" />,
    component: <></>,
  },
  {
    name: "Chat",
    layout: "/admin",
    path: "/chat",
    icon: <MdChat className="h-6 w-6" />,
    component: <></>,
  },
  {
    name: "Statistics",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignIn />,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
