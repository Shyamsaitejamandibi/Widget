import BarCard from "./BarCard";
import { CardDemo } from "./CardDemo";
import CardNav from "./CardNav";
import { Summary } from "./Summary";
import CustomLineChart from "./Charts/LineChart";
import CustomPieChart from "./CustomPieChart";
import CustomBar from "./Charts/BarChart";

const data = {
  products: [
    {
      name: "Reusable",
      quarters: [{ "Q1-23": 10 }, { "Q2-23": 4 }],
    },
    {
      name: "Natural Resource",
      quarters: [{ "Q1-23": 2 }, { "Q2-23": 11 }],
    },
    {
      name: "Compost Compound",
      quarters: [{ "Q1-23": 7 }, { "Q2-23": 5 }],
    },
    {
      name: "Reusable Materials",
      quarters: [{ "Q1-23": 3 }, { "Q2-23": 4 }],
    },
  ],
  total: {
    "Q1-23": 8,
    "Q2-23": 12,
  },
};

const data2 = {
  products: [
    {
      name: "Reusable",
      quarters: [
        {
          "Q1-23": 10,
        },
        { "Q2-23": 4 },
        { "Q3-23": 4 },
        { "Q4-23": 4 },
        { "Q1-24": 4 },
      ],
    },
    {
      name: "Natural Resource",
      quarters: [
        { "Q1-23": 2 },
        { "Q2-23": 11 },
        { "Q3-23": 11 },
        { "Q4-23": 11 },
        { "Q1-24": 11 },
      ],
    },
    {
      name: "Compost Compound",
      quarters: [
        { "Q1-23": 7 },
        { "Q2-23": 5 },
        { "Q3-23": 5 },
        { "Q4-23": 5 },
        { "Q1-24": 5 },
      ],
    },
    {
      name: "Reusable Materials",
      quarters: [
        { "Q1-23": 3 },
        { "Q2-23": 4 },
        { "Q3-23": 4 },
        { "Q4-23": 4 },
        { "Q1-24": 4 },
      ],
    },
    {
      name: "Reusable",
      quarters: [
        {
          "Q1-23": 10,
        },
        { "Q2-23": 4 },
        { "Q3-23": 4 },
        { "Q4-23": 4 },
        { "Q1-24": 4 },
      ],
    },
    {
      name: "Natural Resource",
      quarters: [
        { "Q1-23": 2 },
        { "Q2-23": 11 },
        { "Q3-23": 11 },
        { "Q4-23": 11 },
        { "Q1-24": 11 },
      ],
    },
    {
      name: "Compost Compound",
      quarters: [
        { "Q1-23": 7 },
        { "Q2-23": 5 },
        { "Q3-23": 5 },
        { "Q4-23": 5 },
        { "Q1-24": 5 },
      ],
    },
    {
      name: "Reusable Materials",
      quarters: [
        { "Q1-23": 3 },
        { "Q2-23": 4 },
        { "Q3-23": 4 },
        { "Q4-23": 4 },
        { "Q1-24": 4 },
      ],
    },
    {
      name: "Reusable",
      quarters: [
        {
          "Q1-23": 10,
        },
        { "Q2-23": 4 },
        { "Q3-23": 4 },
        { "Q4-23": 4 },
        { "Q1-24": 4 },
      ],
    },
    {
      name: "Natural Resource",
      quarters: [
        { "Q1-23": 2 },
        { "Q2-23": 11 },
        { "Q3-23": 11 },
        { "Q4-23": 11 },
        { "Q1-24": 11 },
      ],
    },
    {
      name: "Compost Compound",
      quarters: [
        { "Q1-23": 7 },
        { "Q2-23": 5 },
        { "Q3-23": 5 },
        { "Q4-23": 5 },
        { "Q1-24": 5 },
      ],
    },
    {
      name: "Reusable Materials",
      quarters: [
        { "Q1-23": 3 },
        { "Q2-23": 4 },
        { "Q3-23": 4 },
        { "Q4-23": 4 },
        { "Q1-24": 4 },
      ],
    },
    {
      name: "Reusable",
      quarters: [
        {
          "Q1-23": 10,
        },
        { "Q2-23": 4 },
        { "Q3-23": 4 },
        { "Q4-23": 4 },
        { "Q1-24": 4 },
      ],
    },
    {
      name: "Natural Resource",
      quarters: [
        { "Q1-23": 2 },
        { "Q2-23": 11 },
        { "Q3-23": 11 },
        { "Q4-23": 11 },
        { "Q1-24": 11 },
      ],
    },
    {
      name: "Compost Compound",
      quarters: [
        { "Q1-23": 7 },
        { "Q2-23": 5 },
        { "Q3-23": 5 },
        { "Q4-23": 5 },
        { "Q1-24": 5 },
      ],
    },
  ],
  total: {
    "Q1-23": 8,
    "Q2-23": 12,
    "Q3-23": 7,
    "Q4-23": 20,
    "Q1-24": 3,
  },
};

export default function Home() {
  return (
    <div>
      <div className="flex pl-10 gap-6">
        <div>
          <CardDemo
            number={1}
            products={data.products}
            total={data.total}
            className="bg-white"
          />
        </div>
        <div>
          <CardDemo
            number={2}
            products={data.products}
            total={data.total}
            className="bg-customPurple"
          />
        </div>
        <div>
          <BarCard />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <div className="pl-10 pr-6 pt-4">
            <CardDemo
              number={3}
              products={data2.products}
              total={data2.total}
              className="bg-customBlack"
            />
          </div>
          <div className="flex pl-10 pt-2 gap-6">
            <div className="pt-4">
              <CardDemo
                number={3}
                products={data.products}
                total={data.total}
                className="bg-customBlack"
                pagination={true}
              />
            </div>
            <div className="pt-4">
              <CardDemo
                number={2}
                products={data.products}
                total={data.total}
                className="bg-customPurple"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="pt-4">
            <CardNav
              number={2}
              className="bg-white pl-4 text-customBlack hover:text-black focus:bg-transparent focus:text-black rounded-bl-none rounded-br-none"
            />
            <Summary
              className="w-[407px]"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus impedit nesciunt, rem dolore fugit iure praesentium odit, assumenda officiis vero dolores iusto quasi saepe illo laboriosam soluta vel delectus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus impedit nesciunt, rem dolore fugit iure praesentium odit, assumenda officiis vero dolores iusto quasi saepe illo laboriosam soluta vel delectus?"
            />
          </div>
          <div className="flex pt-4">
            <div className="flex-col">
              <CustomLineChart
                number={1}
                width={180}
                height={220}
                className="rounded-b-none"
                scroll={1}
              />
            </div>
            <div>
              <CardDemo
                number={3}
                products={data.products}
                total={data.total}
                className="bg-customBlack"
              />
              <div className="pt-4">
                <CustomLineChart
                  number={1}
                  width={200}
                  height={180}
                  scroll={0}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 pl-6">
          <CustomLineChart
            number={3}
            width={180}
            height={290}
            className="bg-customBlack text-white shadow-md rounded-bl-none rounded-br-none"
            scroll={2}
          />
        </div>
        <div className="flex flex-col pl-2">
          <div className="pt-4">
            <CustomPieChart />
          </div>
          <div className="pt-4">
            <CardNav
              number={1}
              className="bg-white text-customBlack shadow-md rounded-bl-none rounded-br-none"
            />
            <CustomBar
              width={180}
              height={400}
              className="bg-white shadow-md rounded-b-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
