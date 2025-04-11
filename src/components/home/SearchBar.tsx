import React from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search Events",
  onSearch,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("searchQuery") as HTMLInputElement;
    if (onSearch && input.value) {
      onSearch(input.value);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[rgba(83,83,83,1)] flex items-stretch gap-[11px] text-xs text-[rgba(43,42,42,1)] font-semibold ml-[11px] mt-[5px] px-[9px] py-[7px] rounded-[10px]"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/13ff70a9b0d902ec14ce8fe820ff99343fc807f0?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-[18px] shrink-0"
        alt="Search icon"
      />
      <input
        type="text"
        name="searchQuery"
        placeholder={placeholder}
        className="basis-auto bg-transparent outline-none w-full"
        aria-label="Search events"
      />
    </form>
  );
};

export default SearchBar;
