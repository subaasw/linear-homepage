import { ChevronRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselItems = [
  {
    caption: "Customer Requests",
    title: "Build what customers actually want",
    imageURL: "/images/customers-requests.avif",
  },
  {
    caption: "Powerful git workflows",
    title: "Automate pull requests and commit workflows",
    imageURL: "/images/git-workflows.avif",
  },
  {
    caption: "Linear Mobile",
    title: "Move product work forward from anywhere",
    imageURL: "/images/linear-mobile.avif",
  },
  {
    caption: "Linear Asks",
    title: "Turn workplace requests into actionable issues",
    imageURL: "/images/linear-asks.avif",
  },
  {
    caption: "Linear integrations",
    title: "100+ ways to enhance your Linear experience",
    imageURL: "/images/linear-integrations.avif",
  },
  {
    caption: "Figma integrations",
    title: "Bridge the gap between engineering and design",
    imageURL: "/images/figma-integrations.avif",
  },
  {
    caption: "Built for developers",
    title: "Build your own add-ons with the Linear API",
    imageURL: "/images/linear-api.avif",
  },
];

function CarouselSection() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-4">
        {carouselItems.map((carousel) => (
          <CarouselItem
            key={carousel.caption}
            className="basis-full md:basis-1/2 lg:basis-1/3"
          >
            <a
              key={carousel.caption}
              href="#"
              className="group w-full max-w-[336px] bg-[#141516] relative rounded-[30px] transition-all duration-150 hover:brightness-125"
            >
              <div className="relative h-full Workflows_Carousel_topRightFade">
                <img
                  className="rounded-[30px]"
                  src={carousel.imageURL}
                  alt={carousel.caption}
                />

                <div className="flex w-full items-end gap-6 justify-between bottom-0 rounded-b-[30px] px-6 pb-11 pt-6 absolute bg-gradient-to-bl to-richblack/60 to-50% from-transparent">
                  <div className="max-w-48">
                    <h3 className="text-gray text-sm mb-1">
                      {carousel.caption}
                    </h3>
                    <p>{carousel.title}</p>
                  </div>

                  <div className="h-10 w-10 text-[#9c9da1] group-hover:bg-onyx group-hover:text-white rounded-full border grid place-content-center">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex items-center justify-center mt-12">
        <CarouselPrevious className="relative left-4 !rounded-full h-12 w-12 bg-gray border text-white hover:bg-dimgrey hover:text-white" />
        <CarouselNext className="relative !rounded-full h-12 w-12 bg-gray border text-white hover:bg-dimgrey hover:text-white" />
      </div>
    </Carousel>
  );
}

export default function WorkflowsSection() {
  return (
    <section className="page_section py-40">
      <div className="container mx-auto px-4 font-medium">
        <div className="grid md:grid-cols-2 gap-28 place-items-end mb-14">
          <div>
            <span className="mb-4 block">
              <div className="flex items-center gap-2 text-lightgray mb-2">
                <div className="h-2 w-3.5 bg-lavender rounded-full"></div>
                <div className="flex items-end gap-1.5 text-sm group-hover:gap-3 transition-all duration-150">
                  <span>Workflows and integrations </span>
                </div>
              </div>
              <h2 className="tracking-tighter leading-16">
                Collaborate across tools and teams
              </h2>
            </span>
          </div>

          <p className="text-gray font-medium">
            Expand the capabilities of the Linear system with a wide variety of
            integrations that keep everyone in your organization aligned and
            focused.
          </p>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto">
        <CarouselSection />
      </div>
    </section>
  );
}
