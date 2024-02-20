import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import WidgetNav from "./WidgetNav";
import WidgetBoard from "./WidgetBoard";
import { useState } from "react";
import { Input } from "./ui/input";
function Widget() {
  const [description, setDescription] = useState("");

  function onSubmit(data: string) {
    setDescription(data);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="cl"
          className="border border-customLightPurple bg-customLightPurple/5 hover:bg-customLightPurple"
        >
          <PlusIcon className=" text-customPurple pr-1 " />
          <p className=" text-customPurple ">Add Widget</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1060px] pt-12">
        <Dialog>
          <div className="flex justify-between">
            <div className="flex items-center">
              <img
                src="/layout-dashboard.svg"
                alt=""
                className="w-15 h-15 border border-customLightPurple rounded-md p-4"
              />
              <div className="ml-4 ">
                <DialogHeader className="text-customPurple text-xl font-semibold">
                  Create Widget
                </DialogHeader>
                <DialogDescription>
                  Manage the glossary of terms of your Database
                </DialogDescription>
              </div>
            </div>

            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent default form submission
                  onSubmit(description);
                }}
              >
                <Input
                  className="w-96 border-customPurple focus-visible:ring-customPurple"
                  placeholder="Reuseabilty Scores"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </form>
            </div>
          </div>
        </Dialog>
        <Separator />

        <div className="flex justify-between">
          <WidgetBoard desc={description} />
          <WidgetNav />
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default Widget;
