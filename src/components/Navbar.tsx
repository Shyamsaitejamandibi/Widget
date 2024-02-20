import { useState } from "react";
import { Home, PlusIcon, Settings, X } from "lucide-react";
import { Button } from "./ui/button";
import Widget from "./Widget";

export default function Navbar() {
  const [activeButton, setActiveButton] = useState(0); // State to track active button

  const navlinks = [
    {
      label: "Overview",
      link: "#",
    },
    {
      label: "Customers",
      link: "#",
    },
    {
      label: "Products",
      link: "#",
    },
    {
      label: "Settings",
      link: "#",
    },
  ];

  return (
    <main className=" text-white">
      <nav className="flex justify-between px-8 items-center py-2">
        <div className="flex items-center gap-2">
          <section className="flex items-center gap-4 pr-2">
            {/* menu */}
            <Home className="text-xl text-gray-500 cursor-pointer" />
          </section>
          {navlinks.map((d, i) => (
            <Button
              key={i}
              variant="ghost"
              className={`border text-sm border-gray-200 text-gray-400 hover:text-customPurple${
                activeButton === i
                  ? "border border-customLightPurple bg-customLightPurple/5 text-customPurple"
                  : ""
              }`} // Conditionally apply bg-transparent class
              size="cl"
              onClick={() => setActiveButton(i)} // Set active button on click
            >
              {d.label}
              {activeButton === i ? (
                <X className="pl-2 text-customPurple w-7 h-7" />
              ) : (
                <div className="pl-2 w-7 h-7"></div>
              )}
            </Button>
          ))}
          <Button
            size="cl"
            className="border border-customLightPurple bg-customLightPurple/5 hover:bg-customLightPurple"
          >
            <PlusIcon className=" text-customPurple " />
          </Button>
        </div>
        <section className="flex items-center gap-4 pr-4">
          <Widget />
          <Settings className="text-xl text-gray-500 cursor-pointer" />
        </section>
      </nav>
      <hr className=" " />
    </main>
  );
}
