import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Separator } from "./ui/separator";
import { CardDemo } from "./CardDemo";
import { useState } from "react";

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

interface WidgetBoardProps {
  desc: string;
}

function WidgetBoard({ desc }: WidgetBoardProps) {
  const [activeColor, setActiveColor] = useState("bg-white");
  const [number, setNumber] = useState(1);
  return (
    <div className="flex border rounded-md bg-customLightPurple/10 border-customLightPurple">
      <div>
        <div>
          <TransformWrapper>
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <div className="flex flex-row justify-between pt-4 px-4">
                  <div> 1 X 1</div>
                  <div className="flex flex-row-reverse">
                    <div className="bg-white flex px-0 py-0.5">
                      <button
                        className="px-0.5"
                        onClick={() => resetTransform()}
                      >
                        <div className="p-1 text-gray-500 border">100%</div>
                      </button>
                      <button className="px-2" onClick={() => zoomIn()}>
                        <img className="h-5 w-5" src="/zoom-in.svg" alt="" />
                      </button>
                      <Separator orientation="vertical" />
                      <button className="px-2" onClick={() => zoomOut()}>
                        <img className="h-5 w-5" src="/zoom-out.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <TransformComponent>
                  <div className="w-[641px] flex justify-center">
                    <div className="flex flex-col py-12 items-center">
                      <div className="text-customBlack font-bold">{desc}</div>
                      <CardDemo
                        number={number}
                        products={data.products}
                        className={activeColor}
                        total={data.total}
                      />
                    </div>
                  </div>
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>

        <div className="flex justify-center pt-12">
          <button
            onClick={() => {
              setActiveColor("bg-customBlack");
              setNumber(3);
            }}
            className="h-6 w-6 rounded-full bg-customBlack border-customWhite mr-4 hover:ring-2 hover:ring-offset-2 hover:border-customWhite hover:ring-2-customLightPurple hover:ring-customLightPurple/5 focus:outline-none focus:ring-customLightPurple/5  focus:ring-offset-customLightPurple/5"
          ></button>
          <button
            onClick={() => {
              setActiveColor("bg-white");
              setNumber(1);
            }}
            className="h-6 w-6 rounded-full bg-white border border-customWhite mr-4 hover:ring-2 hover:ring-offset-2 hover:border-customWhite hover:ring-2-customLightPurple hover:ring-customLightPurple/5 focus:outline-none focus:ring-customLightPurple/5  focus:ring-offset-customLightPurple/5"
          ></button>
          <button
            onClick={() => {
              setActiveColor("bg-customPurple");
              setNumber(2);
            }}
            className="h-6 w-6 rounded-full bg-customPurple border-customWhite mr-4 hover:ring-2 hover:ring-offset-2 hover:border-customWhite hover:ring-2-customLightPurple hover:ring-customLightPurple/5 focus:outline-none focus:ring-customLightPurple/5  focus:ring-offset-customLightPurple/5"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default WidgetBoard;
