import React from "react";

interface StoryWithStatsProps {
  imageUrl: string;
  likes: number;
  comments: number;
}

const StoryWithStats: React.FC<StoryWithStatsProps> = ({
  imageUrl,
  likes,
  comments,
}) => {
  return (
    <div className="flex items-stretch gap-2 text-[11px] text-[rgba(191,186,186,1)] font-extrabold">
      <img
        src={imageUrl}
        className="aspect-[2.54] object-contain w-[247px] rounded-[0px_0px_0px_0px]"
        alt="Story image"
      />
      <div className="mt-[5px]">
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
    </div>
  );
};

export default StoryWithStats;
