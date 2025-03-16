import { ChevronRight, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesList = [
  {
    title: "Purpose-built for product development",
    imageURL: "/images/development.jpeg",
    desc: "",
  },
  {
    title: "Designed to move fast",
    imageURL: "/images/move-fast.jpeg",
    desc: "",
  },
  {
    title: "Crafted to perfection",
    imageURL: "/images/crafted-to-perfection.jpeg",
    desc: "",
  },
];

export default function WhatMakesLinerDiff() {
  return (
    <section className="py-40 section_sectionWhatMakesLinearDifferent">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-20 place-items-center font-medium mb-14 px-4">
          <h2 className="text-[56px] leading-16 font-medium">
            Made for modern product teams
          </h2>
          <p className="text-gray px-6">
            Linear is shaped by the practices and principles that distinguish
            world-class product teams from the rest: relentless focus, fast
            execution, and a commitment to the quality of craft.
            <a
              href="#"
              className="inline-flex transition-all duration-150 gap-1.5 hover:gap-2.5 items-center px-1.5 text-white"
            >
              <span>Make the switch</span>
              <ChevronRight className="h-5 w-5 font-medium" />
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-2 text-white">
          {FeaturesList.map((feature) => (
            <Button
              key={feature.title}
              variant="default"
              className="flex group text-left flex-col relative text-white h-[360px] transition-all duration-150 !rounded-[30px] bg-richblack hover:bg-richblack hover:brightness-[175%]"
            >
              <img
                className="h-auto max-w-full rounded-t-[30px] mt-2 aspect-[336/336]"
                src={feature.imageURL}
                alt={feature.title}
              />

              <div className="flex items-end gap-6 justify-between relative bottom-8 px-2">
                <p className="text-xl whitespace-break-spaces max-w-[90%]">{feature.title}</p>

                <div className="rounded-full group-hover:bg-[#232326] transition-all duration-150 group-hover:border-transparent flex items-center justify-center border h-6 w-6 p-5">
                  <PlusIcon className="h-6 w-6" />
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
