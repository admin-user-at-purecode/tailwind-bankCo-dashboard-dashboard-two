import { useState } from "react";
import SearchBar from "../../forms/SearchBar";
import ModeToggler from "./ModeToggler";

function HeaderOne({ handleSidebar }) {
  const [popup, setPopup] = useState(false);

  const handlePopup = (name) => {
    setPopup({ [name]: popup?.[name] ? false : true });
  };

  return (
    <header className="header-wrapper fixed z-30 hidden w-full md:block">
      <div className="relative flex h-[108px] w-full items-center justify-between bg-white px-10 dark:bg-darkblack-600 2xl:px-[76px]">
        <SearchBar />

        <ModeToggler />
      </div>
    </header>
  );
}

export default HeaderOne;
