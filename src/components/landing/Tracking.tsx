import { CycleTimeChartSVG, LineChartSVG } from "@/assets";
import {
  ChevronRight,
  Circle,
  CircleX,
  Copy,
  DiamondPlus,
  Flame,
  Layers,
  ListFilter,
} from "lucide-react";
import FeatureLookupSection, {
  FeatureLookUpItemProps,
} from "@/components/landing/components/FeatureLookupComp";

function BentoGrid() {
  return (
    <div className="container mx-auto px-4 border-y grid md:grid-cols-2">
      <div className="py-14 border-r pr-6">
        <h3 className="mb-1 font-medium">Build momentum with Cycles</h3>
        <p className="text-gray text-lg leading-6 font-medium">
          Create healthy routines and focus your <br /> team on what work should
          happen next.
        </p>
        <div className="ProjectOverview_root">
          <div className="utils_gradientBorder">
            <div className="px-7 py-4 projectOverview_inner utils_gradientBorder mt-10">
              <h5 className="mb-4 font-medium">Cycle 55</h5>
              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-4 text-gray text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-[1px] bg-[#91959C]"></div>
                      <span>Scope</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-[1px] bg-yellow"></div>
                      <span>Started</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-[1px] bg-[#6771C5]"></div>
                      <span>Completed</span>
                    </div>
                  </div>
                </div>

                <LineChartSVG />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-14 pl-12">
        <h3 className="mb-1 font-medium">Manage incoming work with Triage</h3>
        <p className="text-gray text-lg leading-6 font-medium">
          Review and assign incoming bug reports, <br /> feature requests, and
          other unplanned work.
        </p>

        <div className="relative">
          <div className="absolute max-w-44 top-36 left-32 z-10 p-1 py-3 backdrop-blur-md border bg-white/10 border-white/10 space-y-3 font-medium rounded-8 text-sm text-gray">
            <div className="flex items-center gap-2 px-2">
              <DiamondPlus className="h-4 w-4" />
              <span>Accept</span>
            </div>

            <div className="flex items-center gap-2 px-2">
              <Copy className="h-4 w-4" />
              <span>Mark as duplicate</span>
            </div>

            <div className="flex items-center gap-2 px-2">
              <CircleX className="h-4 w-4" />
              <span>Decline</span>
            </div>
          </div>
          <div className="ProjectOverview_root">
            <div className="utils_gradientBorder">
              <div className="px-7 py-4 projectOverview_inner utils_gradientBorder mt-10">
                <h5 className="mb-4 font-medium">Triage</h5>
                <div className="text-gray space-y-4 relative">
                  <div className="space-y-3 border p-2.5 rounded-[6px] bg-[#ffffff0d]">
                    <p>Users report unexpected rate limiting</p>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-4 w-4 rounded-full"
                        src="/images/avatar/user-7.avif"
                        alt="Tom profile"
                      />
                      <span>Tom</span>
                    </div>
                  </div>

                  <div className="space-y-3 p-2.5">
                    <p>RangeError: Index 0 out of range</p>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-4 w-4 rounded-full"
                        src="/images/avatar/user-4.avif"
                        alt="Tom profile"
                      />
                      <span>Rome</span>
                    </div>
                  </div>

                  <div className="space-y-3 p-2.5">
                    <p>Users report unexpected rate limiting</p>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-4 w-4 rounded-full"
                        src="/images/avatar/user-3.avif"
                        alt="Tom profile"
                      />
                      <span>John</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const featuresList: FeatureLookUpItemProps[] = [
  {
    title: "Tailored workflows",
    desc: "Track progress across custom issue flows for your team.",
    Icon: Circle,
  },
  {
    title: "Custom views",
    desc: "Switch between list and board. Group issues with swimlanes.",
    Icon: Layers,
  },
  {
    title: "Filters",
    desc: "Refine issue lists down to what's most relevant to you.",
    Icon: ListFilter,
  },
  {
    title: "SLAs",
    desc: "Automatically apply deadlines to time-sensitive tasks.",
    Icon: Flame,
  },
];

export default function TrackingSection() {
  return (
    <section className="page_section py-40 overflow-hidden">
      <div className="container mx-auto px-4 font-medium">
        <div>
          <a href="#" className="mb-4 block group">
            <div className="flex items-center gap-2 text-lightgray mb-2">
              <div className="h-2 w-3.5 bg-yellow rounded-full"></div>
              <div className="flex items-end gap-1.5 text-sm group-hover:gap-3 transition-all duration-150">
                <span>Task tracking and sprint planning</span>
                <ChevronRight className="h-5 w-5" />
              </div>
            </div>
            <h2 className="tracking-tighter max-w-sm leading-16">
              Issue tracking you'll enjoy using
            </h2>
          </a>

          <p className="font-medium text-lg text-gray max-w-96">
            <span className="text-white pr-2 block">
              Optimized for speed and efficiency.
            </span>
            Create tasks in seconds, discuss issues in context, and breeze
            through your work in views tailored to you and your team.
          </p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto -mt-8 page_planningHeroImage">
        <img
          className="-ml-10 h-full w-full"
          src="/images/high-priority.png"
          alt="screenshots high-priority tasks"
        />
      </div>
      <BentoGrid />

      <div className="container mx-auto px-4 mt-9">
        <div className="relative z-10">
          <h3 className="mb-1 font-medium">Linear Insights</h3>
          <p className="text-gray text-lg leading-6 font-medium">
            Take the guesswork out of product planning <br /> with realtime,
            actionable data analytics.
          </p>

          <a
            href="#"
            className="px-2 border inline-flex rounded-8 py-1 text-sm text-gray hover:text-white transition-colors duration-150 mt-6 gap-1 items-center bg-eerieblack"
          >
            <span>Learn more</span>
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="relative insight_image-wrapper overflow-hidden -mt-28">
          <CycleTimeChartSVG className="-ml-[28%] -mb-[25%]" />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <FeatureLookupSection listItems={featuresList} />
      </div>
    </section>
  );
}
