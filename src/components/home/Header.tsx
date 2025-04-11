import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex w-full max-w-[303px] items-stretch gap-5 justify-between">
      <div className="text-white text-xs font-bold my-auto">22:22</div>
      <div className="flex items-stretch gap-[17px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/baeb02044c985ac22deb28833506d11f1a8c0ae6?placeholderIfAbsent=true"
          className="aspect-[0.94] object-contain w-[15px] shrink-0"
          alt="Signal icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b190dc756e4aa98911ca6405ed4916794209acc4?placeholderIfAbsent=true"
          className="aspect-[1.46] object-contain w-[19px] shrink-0 my-auto"
          alt="Battery icon"
        />
      </div>
    </div>
  );
};

export default Header;
