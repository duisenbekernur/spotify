import React from "react";

// components
import Playlist from "./Playlists/Playlist";
import PlaylistContainer from "./Playlists/PlaylistContainer";

const TheMain = () => {
  return (
    <main className="text-white relative">
      <div className="h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full"></div>
      <div className="relative pt-[24px] pb-[48px] px-[32px] space-y-9 max-w-screen-5xl">
        
        <PlaylistContainer />

        <PlaylistContainer />

        <PlaylistContainer />

      </div>
    </main>
  );
};

export default TheMain;
