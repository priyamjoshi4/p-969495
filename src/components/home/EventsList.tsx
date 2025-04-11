import React from "react";
import EventCard from "./EventCard";

const EventsList: React.FC = () => {
  return (
    <div className="self-stretch flex items-stretch gap-[11px] mt-1.5">
      <EventCard title="Food Camps" imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2a0e7b09c634fc7da1c34ee30c524fe9dedb797c?placeholderIfAbsent=true" highlighted={true} />
      <EventCard title="Marathons" imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/f5983358917851cfc313f0b9ee6dfbbefe95ba78?placeholderIfAbsent=true" highlighted={true} />
      <div className="flex flex-col relative aspect-[0.702] w-[99px] text-[11px] text-white font-bold pt-[91px] rounded-[0px_0px_0px_0px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c56e0dbe31bd44eb362789694d8a1ccff15d0fe2?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Funding Camps"
        />
        <div className="relative pt-7 pb-[7px] px-[7px] rounded-md">
          Funding Camps
        </div>
      </div>
      <div className="flex flex-col relative aspect-[0.227] w-8 pt-[91px] rounded-[0px_0px_0px_0px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d31c7992adaadaaf06e16b710b9d6ff51e31624d?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="More events"
        />
        <div className="relative flex shrink-0 h-[50px] rounded-md" />
      </div>
    </div>
  );
};

export default EventsList;
