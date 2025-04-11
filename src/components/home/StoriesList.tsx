import React from "react";
import StoryCard from "./StoryCard";
import StoryWithStats from "./StoryWithStats";

const StoriesList: React.FC = () => {
  return (
    <section aria-labelledby="stories-section">
      <div className="flex w-full max-w-[334px] items-stretch gap-[11px] mt-[15px]">
        <StoryCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/24b544a80f9fb2378fc1543a4e339174db95d5a6?placeholderIfAbsent=true"
          content="Join us for a healthy run through the main city gates and back to the forum... Read More"
        />
      </div>

      <div className="mt-3">
        <StoryWithStats imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d5328f1a5ff3913c91d49f94df59e30ae31ec8c4?placeholderIfAbsent=true" likes={19} comments={11} />
      </div>

      <div className="bg-[rgba(153,153,153,1)] flex w-[344px] shrink-0 max-w-full h-px mt-[15px]" />

      <div className="self-center flex w-full max-w-[333px] items-stretch gap-2.5 mt-5">
        <StoryCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/9396b7cc72b1a26c5deebbcb3759858479d17e50?placeholderIfAbsent=true"
          content="Help your local community of children for their drive to learn, study and evolve... Read More"
          className="text-[11px] text-[rgba(191,186,186,1)] font-light"
        />
      </div>

      <div className="mt-[19px]">
        <StoryWithStats imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/65907c3a5ec6ca1843c07208033f2200914c423f?placeholderIfAbsent=true" likes={19} comments={11} />
      </div>
    </section>
  );
};

export default StoriesList;
