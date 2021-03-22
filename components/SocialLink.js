import React from "react";

const SocialLink = ({ Icon, text, href }) => {
  return (
    <button className="bg-cream hover:bg-primary text-gray-900 p-2 rounded-sm ">
      <Icon color="rgb(17,24,39)" />
      <span className="opacity-0">.</span>
      {text}
    </button>
  );
};

export default SocialLink;
