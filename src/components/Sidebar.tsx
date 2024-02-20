import { Nav } from "./ui/nav";

import {
  Activity,
  BarChart4Icon,
  Layers3,
  MessagesSquareIcon,
} from "lucide-react";
function Sidebar() {
  return (
    <div className="relative z-10  min-w-[60px] border-r-2 px-3 pt-8 flex flex-col justify-between">
      <Nav
        isCollapsed={true}
        links={[
          {
            title: "Activity",
            icon: Activity,
            variant: "ghost",
          },
          {
            title: "Chat Square",
            icon: MessagesSquareIcon,
            variant: "ghost",
          },
          {
            title: "Three Layer",
            icon: Layers3,
            variant: "ghost",
          },
          {
            title: "Bar charts",
            icon: BarChart4Icon,
            variant: "default",
          },
        ]}
      />
      <div className="pb-8 pl-0.5 hover:cursor-pointer">
        <img src="/Avatar.svg" />
      </div>
    </div>
  );
}

export default Sidebar;
