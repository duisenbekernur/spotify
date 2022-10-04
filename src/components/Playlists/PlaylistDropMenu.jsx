import React, { useState, useEffect, useRef } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";

const PlaylistDropMenu = ({ onClose }) => {
  const [subMenu, setSubMenu] = useState();

  const menuRef = useRef(null);

  function focusSubMenu() {
    setSubMenu(1);
  }
  
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!menuRef.current.contains(event.target)) {
        onClose();
      }
    });
  }, []);

  const dropMenu = [
    {
      label: "Add to Your Library",
    },
    {
      label: "Share",
      secondDropMenu: [
        {
          label: "Copy link to playlist",
        },
        {
          label: "Embed playlist",
        },
      ],
    },
    {
      label: "About recommendations",
    },
    {
      label: "Open in Desktop app",
    },
  ];

  return (
    <ul
      ref={menuRef}
      className="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10 hidden group-hover:block"
    >
      {dropMenu.map((element, i) => (
        <li key={i} className="relative">
          <label
            onMouseOut={() => setSubMenu()}
            onMouseOver={element.secondDropMenu && focusSubMenu}
            className="flex justify-between w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default"
          >
            {element.label}
            {element.secondDropMenu && <ChevronRightIcon className="w-5" />}

            {subMenu == i && (
              <ul className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default">
                {element.secondDropMenu.map((second, i) => (
                  <li key={i}>
                    <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                      {second.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default PlaylistDropMenu;
