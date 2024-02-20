import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

const navlinks = [
  {
    label: "Overview",
    icon: "/bar-chart-01.svg",
  },
  {
    label: "Customers",
    icon: "/graph-02.svg",
  },
  {
    label: "Products",
    icon: "/pie-chart-02.svg",
  },
];

function WidgetNav() {
  const [selectedDiv, setSelectedDiv] = useState(1);
  const [activeButton, setActiveButton] = useState(1);
  const [description, setDescription] = useState("");
  const form = useForm({
    defaultValues: {
      description: description,
    },
  });

  function onSubmit(data: string) {
    setDescription(data);
  }
  return (
    <div className="flex flex-col justify-between">
      <div>
        <h1 className="pb-2 text-gray-400 text-sm">COMPONENTS</h1>
        <div className="pb-4">
          <div
            className={` ${
              selectedDiv === 1
                ? "border-2 border-customPurple rounded-lg shadow-md"
                : ""
            }`}
            onClick={() => setSelectedDiv(1)}
          >
            <div className="border p-4 rounded-lg">
              <div>Data </div>
              <div className="text-sm text-gray-500">Random Description</div>
            </div>
          </div>
        </div>
        <div className={`w-[350px] pb-4`}>
          <div
            className={` ${
              selectedDiv === 2
                ? "border-2 border-customPurple rounded-lg shadow-md"
                : ""
            }`}
            onClick={() => setSelectedDiv(2)}
          >
            <div className="flex justify-between flex-col border p-4 rounded-lg">
              <div>
                <div>Graph</div>
                <div className="text-sm pb-2 text-gray-500">
                  Random Description
                </div>
              </div>
              <div className="flex items-center justify-center space-x-1 bg-gray-100 w-40 h-6 p-1 rounded-md">
                {navlinks.map((d, i) => (
                  <Button
                    className={`h-5 bg-gray-100 hover:bg-white ${
                      activeButton === i ? "bg-white shadow-md" : ""
                    }`}
                    onClick={() => setActiveButton(i)}
                  >
                    <img src={d.icon} alt="" className={`w-5 h-5 `} />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            selectedDiv === 3
              ? "border-2 rounded-lg border-customPurple shadow-md"
              : ""
          }`}
          onClick={() => setSelectedDiv(3)}
        >
          <div className="border p-4 rounded-lg">
            <div>Summary </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((data: { description: string }) =>
                  onSubmit(data.description)
                )}
                className="w-2/3 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="border-0 focus-visible:ring-transparent p-0"
                          placeholder="Random Description"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
        </div>
      </div>

      <div className=" pt-24 flex justify-between">
        <Button className=" border w-[59px] border-customLightPurple bg-customLightPurple/5 hover:bg-customLightPurple">
          <img src="/counter-clockwise-clock.svg" alt="" />
        </Button>
        <Button className="w-[122px] bg-white border hover:text-customPurple hover:bg-customLightPurple text-gray-400">
          Cancel
        </Button>
        <Button className="w-[122px] bg-customPurple hover:text-customPurple hover:bg-customLightPurple text-white">
          Save
        </Button>
      </div>
    </div>
  );
}

export default WidgetNav;
