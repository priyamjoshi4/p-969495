import React from "react";

const BottomBar: React.FC = () => {
  return (
    <div className="bg-[rgba(26,25,25,1)] shadow-[0px_-4px_4px_rgba(0,0,0,0.21)] flex items-stretch gap-2.5 text-[11px] text-[rgba(191,186,186,1)] font-light mt-[11px] pt-1.5 px-7">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5360c02f8a0cc6bd198a5d6f54b04d67e9e8c567?placeholderIfAbsent=true"
        className="aspect-[1.43] object-contain w-[70px] shrink-0 rounded-[0px_0px_0px_0px]"
        alt="Support image"
      />
      <div className="grow shrink w-[243px] basis-auto mt-[30px]">
        Now provide assistance to the blind community
        <br />
        of India by showing your support...{" "}
        <span className="font-semibold">Read More</span>
      </div>
    </div>
  );
};

export default BottomBar;
