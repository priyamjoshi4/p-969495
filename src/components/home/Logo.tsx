import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-stretch gap-[13px] text-[25px] text-white font-normal whitespace-nowrap ml-2.5 mt-6">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/55765b2b53bf3fb265f862ce30edba903a2f3ffa?placeholderIfAbsent=true"
        className="aspect-[2.48] object-contain w-[77px] shrink-0"
        alt="LOOP logo"
      />
      <div>LOOP</div>
    </div>
  );
};

export default Logo;
