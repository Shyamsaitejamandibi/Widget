import { cn } from "@/lib/utils";
import CardNav from "../CardNav";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import LineCard from "../LineCard";
const linedata = [
  {
    name: "",
    uv: 40,
    pv: 24,
    amt: 24,
    k: 13,
    l: 5,
  },
  {
    name: "Instagram",
    uv: 30,
    pv: 13,
    amt: 22,
    k: 20,
    l: 15,
  },
  {
    name: "Facebook",
    uv: 20,
    pv: 38,
    amt: 22,
    k: 5,
    l: 10,
  },
  {
    name: "google",
    uv: 27,
    pv: 39,
    amt: 20,
    k: 25,
    l: 30,
  },
  {
    name: "TickTok",
    uv: 18,
    pv: 5,
    amt: 21,
    k: 10,
    l: 12,
  },
];

interface CustomLineChartProps {
  width: number;
  height: number;
  scroll: number;
  number: number;
  className?: string;
}

function CustomLineChart({
  width,
  height,
  number,
  className,
  scroll,
}: CustomLineChartProps) {
  const bottom = Number(`${height > 180 ? 40 : 20}`);
  return (
    <div className="pr-4">
      <CardNav
        number={number}
        className={cn("bg-white rounded-bl-none rounded-br-none", className)}
      />
      <LineChart
        className={cn("bg-white text-xs border pb-4 rounded-b-2xl", className)}
        data={linedata}
        width={width}
        height={height}
        margin={{
          top: 30,
          right: 20,
          left: -10,
          bottom: bottom,
        }}
      >
        {height > 180 && (
          <XAxis
            className="text-sm"
            dataKey="name"
            angle={-90}
            textAnchor="end"
            axisLine={false}
            tickLine={false}
          />
        )}
        <YAxis
          dataKey="uv"
          domain={[0, 40]}
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `${value}k`}
        />
        <CartesianGrid horizontal={false} opacity={0.5} />
        <Line
          dataKey="uv"
          strokeLinejoin="round"
          stroke="#5E5ADB"
          dot={false}
          strokeWidth={3}
        />
        <Line
          dataKey="pv"
          strokeLinejoin="round"
          stroke="#5FDC8F"
          dot={false}
          strokeWidth={3}
        />
        <Line
          dataKey="amt"
          strokeLinejoin="round"
          stroke="#FF8E8E"
          dot={false}
          strokeWidth={3}
        />
        {/* <Line
          dataKey="k"
          strokeLinejoin="round"
          stroke="#82D1DB"
          dot={false}
          strokeWidth={3}
        />
        <Line
          dataKey="l"
          strokeLinejoin="round"
          stroke="#F0AB24"
          dot={false}
          strokeWidth={3}
        /> */}
      </LineChart>
      <LineCard scroll={scroll} />
    </div>
  );
}

export default CustomLineChart;
