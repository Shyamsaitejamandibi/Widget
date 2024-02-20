import { cn } from "@/lib/utils";
import { BarChart, Bar, Cell, YAxis } from "recharts";

const colors = [
  "#F1E254",
  "#FF8E8E",
  "#96D3FF",
  "#5FDC8F",
  "#F182F3",
  "#5E5ADB",
];

const data = [
  {
    name: "Page A",
    uv: 40,
  },
  {
    name: "Page B",
    uv: 30,
  },
  {
    name: "Page C",
    uv: 20,
  },
  {
    name: "Page D",
    uv: 27,
  },
  {
    name: "Page E",
    uv: 10,
  },
  {
    name: "Page F",
    uv: 23,
  },
];

interface CustomBarProps {
  width: number;
  height: number;
  className?: string;
}

export default function CustomBar({
  width,
  height,
  className,
}: CustomBarProps) {
  return (
    <BarChart
      className={cn(
        "bg-customBlack border shadow-md rounded-bl-2xl",
        className
      )}
      width={width}
      height={height}
      data={data}
      margin={{
        top: 30,
        right: 20,
        left: -10,
        bottom: 25,
      }}
    >
      <YAxis
        className="text-xs font-semibold text-customWhite"
        domain={[0, 40]}
        axisLine={false}
        tickLine={false}
        tickFormatter={(value) => `${value}k`}
      />
      <Bar dataKey="uv" fill="#8884d8" barSize={4} radius={[10, 10, 10, 10]}>
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}
