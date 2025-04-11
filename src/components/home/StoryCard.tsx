import React from "react";

interface StoryCardProps {
  imageUrl: string;
  content: string;
  likes?: number;
  comments?: number;
  showStats?: boolean;
  className?: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  imageUrl,
  content,
  likes,
  comments,
  showStats = false,
  className = "",
}) => {
  // Split content to handle the "Read More" part
  const contentParts = content.includes("Read More")
    ? content.split("Read More")
    : [content, ""];

  return (
    <div className={`flex items-stretch gap-2 ${className}`}>
      <img
        src={imageUrl}
        className="aspect-[1.23] object-contain w-[70px] shrink-0 rounded-[0px_0px_0px_0px]"
        alt="Story thumbnail"
      />
      <div className="flex gap-[5px] grow shrink basis-auto mt-[11px]">
        <div className="mt-4 text-[11px] text-[rgba(191,186,186,1)] font-light">
          {contentParts[0]}
          {contentParts.length > 1 && (
            <span className="font-semibold">Read More</span>
          )}
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/745e7af5abadbb71c177661441ae9d5077d845f6?placeholderIfAbsent=true"
          className="aspect-[3.8] object-contain w-[19px] shrink-0"
          alt="More options"
        />
      </div>

      {showStats && (
        <div className="text-[11px] text-[rgba(191,186,186,1)] font-extrabold">
          <div className="flex items-stretch gap-[7px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/61c2222d85246ce16ef495db741112c2e068b44f?placeholderIfAbsent=true"
              className="aspect-[1.12] object-contain w-[18px] shrink-0"
              alt="Likes"
            />
            <div>{likes}</div>
          </div>
          <div className="flex items-stretch gap-[7px] mt-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/086e32bf576dd88001e46094e25fbf868dce3e95?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[18px] shrink-0"
              alt="Comments"
            />
            <div>{comments}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryCard;
