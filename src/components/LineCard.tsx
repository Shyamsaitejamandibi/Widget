import { ScrollArea } from "./ui/scroll-area";

interface LineCardProps {
  scroll: number;
}

const LineCard = ({ scroll }: LineCardProps) => {
  const codes = [
    { name: "Christmas25", value: 5700, color: "#FF8E8E" },
    { name: "BirthdaySpecial25", value: 27000, color: "#5E5ADB" },
    { name: "Newuser30", value: 12500, color: "#5FDC8F" },
    { name: "Newuser30", value: 16000, color: "#82D1DB" },
    { name: "Newuser30", value: 17500, color: "#F0AB24" },
  ];

  if (scroll === 1) {
    return (
      <ScrollArea className="h-44 border pt-2 pb-4 px-6 bg-white shadow-md rounded-b-2xl">
        {codes.map((code, index) => (
          <div key={index} className="flex items-center py-0.5">
            <div
              className="h-9 w-1 mr-2 rounded-sm"
              style={{ backgroundColor: code.color }}
            />
            <div>
              <h2 className="text-sm text-gray-400">{code.name}</h2>
              <p className="text-">{code.value}</p>
            </div>
          </div>
        ))}
      </ScrollArea>
    );
  }
  if (scroll === 2) {
    return (
      <div className="h-80 py-8 border border-t-0 pl-8 bg-customBlack shadow-md rounded-b-2xl">
        {codes.map((code, index) => (
          <div key={index} className="flex items-center py-0.5">
            <div
              className="h-9 w-1 mr-2 rounded-sm"
              style={{ backgroundColor: code.color }}
            />
            <div>
              <h2 className="text-sm text-gray-400">{code.name}</h2>
              <p className="text-white">{code.value}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (scroll === 3) {
    return;
  }
};

export default LineCard;
