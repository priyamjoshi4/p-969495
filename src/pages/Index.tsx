import React, { useState } from "react";
import Header from "@/components/home/Header";
import Logo from "@/components/home/Logo";
import SearchBar from "@/components/home/SearchBar";
import SectionTitle from "@/components/home/SectionTitle";
import EventsList from "@/components/home/EventsList";
import StoriesList from "@/components/home/StoriesList";
import BottomBar from "@/components/home/BottomBar";

const Index: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // In a real app, you would trigger a search here
    console.log("Searching for:", query);
  };

  return (
    <main className="bg-[rgba(44,44,44,1)] max-w-[480px] w-full overflow-hidden mx-auto pt-[11px]">
      <div className="flex w-full flex-col pl-[23px]">
        {/* Header with time and status */}
        <Header />

        {/* Logo section */}
        <Logo />

        {/* Search bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Popular Events Section */}
        <SectionTitle title="Popular Events Nearby" className="mt-4" />
        <EventsList />

        {/* Recent Stories Section */}
        <SectionTitle title="View Recent Stories" className="mt-3" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0eabc0d9fb9d2414ee65f287fc02840440c905ee?placeholderIfAbsent=true"
          className="aspect-[6.1] object-contain w-[366px] rounded-md"
          alt="Stories banner"
        />

        {/* Stories List */}
        <StoriesList />
      </div>

      {/* Bottom Bar */}
      <BottomBar />
    </main>
  );
};

export default Index;
