import React from "react";
import {
  HomeIcon,
  ViewBoardsIcon,
  SearchIcon,
  PlusCircleIcon,
  HeartIcon,
} from "@heroicons/react/outline";

// components
import TheNavItem from "./TheNavItem";

const activeNavItemClasses =
  "flex items-center text-white bg-[#282828] mx-2 px-4 py-2 rounded";
const navItemClasses =
  "flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300";

const navItems = [
  {
    icon: <HomeIcon className="h-6 w-6" />,
    label: "Home",
    classes: activeNavItemClasses,
  },
  {
    icon: <SearchIcon className="h-6 w-6" />,
    label: "Search",
    classes: navItemClasses,
  },
  {
    icon: <ViewBoardsIcon className="h-6 w-6" />,
    label: "Your Library",
    classes: `${navItemClasses} mb-6`,
  },
  {
    icon: <PlusCircleIcon className="h-6 w-6" />,
    label: "Create Playlist",
    classes: navItemClasses,
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    label: "Liked Songs",
    classes: `${navItemClasses}`,
  },
];

const TheNav = () => {
  return (
    <nav>
      {navItems.map((item, i) => (
        <TheNavItem
          key={item.label}
          {...item}
        />
      ))}
    </nav>
  );
};

export default TheNav;
