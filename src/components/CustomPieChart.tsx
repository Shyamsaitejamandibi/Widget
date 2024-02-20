import { Cell, Label, Pie, PieChart } from "recharts";
import CardNav from "./CardNav";

const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#FF6969", "#54D787", "#F2E144", "#5E5ADB"];

function CustomPieChart() {
  return (
    <div>
      <CardNav
        number={1}
        className="bg-white text-customBlack shadow-md rounded-bl-none rounded-br-none"
      />
      <PieChart
        width={180}
        height={160}
        margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: 10,
        }}
        className="bg-white rounded-b-2xl shadow-md"
      >
        <Pie
          data={pieData}
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
          cornerRadius={3}
        >
          <Label
            width={30}
            position="center"
            content={<CustomLabel value1={"Orders"} value2={"89000"} />}
          ></Label>
          {pieData.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

interface CustomLabelProps {
  value1: string;
  value2: string;
}

function CustomLabel({ value1, value2 }: CustomLabelProps) {
  const cx = 90;
  const cy = 80;
  return (
    <>
      <text
        x={cx}
        y={cy - 5}
        fill="rgba(0, 0, 0, 0.87)"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan alignmentBaseline="middle" fontSize="21.5px">
          {value2}
        </tspan>
      </text>
      <text
        x={cx}
        y={cy + 10}
        fill="rgba(0, 0, 0, 0.54)"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan fontSize="12.3px">{value1}</tspan>
      </text>
    </>
  );
}

export default CustomPieChart;
