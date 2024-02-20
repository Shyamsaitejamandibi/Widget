import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

interface CardNavProps {
  className?: string;
  number: number;
}

function CardNav({ className, number }: CardNavProps) {
  const [selectedItem, setSelectedItem] = useState("7d");
  return (
    <div
      className={cn(" flex flex-row justify-between rounded-2xl", className)}
    >
      <div className="flex justify-between text-sm">
        {number !== 2 ? (
          <>
            <div
              className={`pl-6 pr-3 pb-0 pt-3 cursor-pointer ${
                selectedItem === "7d"
                  ? "text-customPurple border-b-4 border-customPurple font-bold"
                  : "text-gray-500 "
              } ${
                selectedItem === "7d" && number === 3
                  ? "text-white border-b-4 border-white font-bold"
                  : " "
              } `}
              onClick={() => setSelectedItem("7d")}
            >
              7d
            </div>
            <div
              className={`pr-3 pl-2 pb-0  pt-3 cursor-pointer ${
                selectedItem === "14d"
                  ? "text-customPurple border-b-4 border-customPurple font-bold"
                  : "text-gray-500 "
              } ${
                selectedItem === "14d" && number === 3
                  ? "text-white border-b-4 border-white font-bold"
                  : " "
              }}`}
              onClick={() => setSelectedItem("14d")}
            >
              14d
            </div>
            <div
              className={`pr-3 pl-2 pb-0 pt-3 cursor-pointer ${
                selectedItem === "30d"
                  ? "text-customPurple border-b-4 border-customPurple font-bold"
                  : "text-gray-500 "
              } ${
                selectedItem === "30d" && number === 3
                  ? "text-white border-b-4 border-white font-bold"
                  : " "
              }`}
              onClick={() => setSelectedItem("30d")}
            >
              30d
            </div>
          </>
        ) : (
          <>
            <NavigationMenu className="relativepl-2 ">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent pb-0 text-white hover:bg-customPurple focus:bg-customPurple hover:text-white hover:bg-transparent focus:text-white",
                      className
                    )}
                  >
                    Today
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white text-customPurple font-semibold">
                    <div className="flex">
                      <button
                        className="p-2"
                        onClick={() => setSelectedItem("7d")}
                      >
                        7d
                      </button>
                      <button
                        className="p-2"
                        onClick={() => setSelectedItem("14d")}
                      >
                        14d
                      </button>
                      <button
                        className="p-2"
                        onClick={() => setSelectedItem("30d")}
                      >
                        30d
                      </button>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </>
        )}
      </div>
      <div className="cursor-pointer">
        <img src="/Frame 15.svg" alt="3dots" className="w-4 h-4 mr-4 mt-5" />
      </div>
    </div>
  );
}

export default CardNav;
