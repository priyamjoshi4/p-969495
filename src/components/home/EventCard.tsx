import React from "react";

interface EventCardProps {
  title: string;
  imageUrl: string;
  highlighted?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  imageUrl,
  highlighted = false,
}) => {
  return (
    <div
      className={`flex flex-col items-stretch text-[11px] text-white font-bold justify-center p-px rounded-lg ${
        highlighted ? "border-[rgba(64,124,242,1)] border-solid border-2" : ""
      }`}
    >
      <div className="flex flex-col relative aspect-[0.702] w-[99px] pt-[91px] pb-px px-px rounded-[0px_0px_0px_0px]">
        <img
          src={imageUrl}
          className="absolute h-full w-full object-cover inset-0"
          alt={title}
        />
        <div className="relative pt-[31px] pb-[3px] px-3.5 rounded-md">
          {title}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
