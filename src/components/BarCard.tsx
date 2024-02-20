import { CardDemo } from "./CardDemo";
import CardNav from "./CardNav";
import CustomBar from "./Charts/BarChart";
import { Summary } from "./Summary";

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

function BarCard() {
  const des =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus impedit nesciunt, rem dolore fugit iure praesentium odit, assumenda officiis vero dolores iusto quasi saepe illo laboriosam soluta vel delectus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus impedit nesciunt, rem dolore fugit iure praesentium odit, assumenda officiis vero dolores iusto quasi saepe illo laboriosam soluta vel delectus?";
  return (
    <div className="flex">
      <div>
        <CardNav
          number={3}
          className="bg-customBlack rounded-tl-2xl rounded-r-none rounded-bl-none"
        />
        <div>
          <CustomBar width={200} height={169} />
        </div>
      </div>
      <CardDemo
        products={data.products}
        total={data.total}
        number={1}
        className="bg-white rounded-none"
      />
      <div>
        <CardNav
          number={2}
          className=" bg-white pl-4 text-customPurple hover:text-customPurple focus:bg-transparent focus:text-customPurple rounded-none rounded-tr-2xl"
        />
        <div>
          <Summary className="rounded-bl-none w-[402px]" description={des} />
        </div>
      </div>
    </div>
  );
}

export default BarCard;
