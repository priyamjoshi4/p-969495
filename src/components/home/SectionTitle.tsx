import React from "react";

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  className = "",
}) => {
  return (
    <h2 className={`text-white text-base font-semibold ${className}`}>
      {title}
    </h2>
  );
};

export default SectionTitle;
