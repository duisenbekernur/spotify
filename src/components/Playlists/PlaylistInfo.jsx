import React from "react";

const PlaylistInfo = () => {
  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.";

  return (
    <div width={180}>
      <h3
        width={180}
        className="mt-4 mb-1 font-semibold tracking-wide capitalize"
      >
        Playlist title
      </h3>
      <p width={180} className="text-sm text-[#b3b3b3] line-clamp-2">
        {text.length < 40 ? text : `${text.substring(0, 40)}...`}
      </p>
    </div>
  );
};

export default PlaylistInfo;
