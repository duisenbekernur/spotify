import React from "react";

const TheNavItem = (item) => {
  
  return (
    <a href="/" className={item.classes}>
      {item.icon}
      <span className="ml-4 text-sm font-semibold">{item.label}</span>
    </a>
  );
};

export default TheNavItem;
