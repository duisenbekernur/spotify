import React from "react";

//components
import Playlist from "./Playlist";

const PlaylistContainer = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
        <div>
          <h2 className="text-2xl font-semibold hover:underline capitalize">
            <a href="/">Lorem ipsum dolor sit</a>
          </h2>
        </div>
        <a
          href="#"
          className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"
        >
          See all
        </a>
      </div>
      <div className="flex flex-wrap gap-4">
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    </div>
  );
};

export default PlaylistContainer;
