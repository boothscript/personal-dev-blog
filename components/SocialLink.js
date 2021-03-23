import React from "react";

const SocialLink = ({ Icon, text, href }) => {
  return (
    <button className="bg-pink hover:bg-primary text-gray-900 py-2 pl-4 pr-4 rounded-sm mx-2">
      <Icon color="rgb(17,24,39)" />
      {text ?? (
        <>
          <span className="opacity-0">..</span>
          {text}
        </>
      )}

      {text}
    </button>
  );
};

export default SocialLink;
