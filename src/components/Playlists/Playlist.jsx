import React, { useState } from "react";

//components
import PlaylistDropMenu from "./PlaylistDropMenu";
import PlaylistInfo from "./PlaylistInfo";
import PlaylistCover from "./PlaylistCover";

const Playlist = () => {
  const [isDropMenuOpen, setIsDropMenuOpen] = useState(false);

  function openDropMenu(event) {
    setIsDropMenuOpen(true);
    event.preventDefault();
  }

  function closeDropMenu() {
    setIsDropMenuOpen(false);
  }

  return (
    <div
      onContextMenu={openDropMenu}
      href="#"
      className="w-72 relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group"
    >
      <PlaylistCover />

      <PlaylistInfo />

      {isDropMenuOpen && <PlaylistDropMenu onClose={closeDropMenu} />}
    </div>
  );
};

export default Playlist;
