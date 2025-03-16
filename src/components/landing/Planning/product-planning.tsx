import { useState } from "react";
import {
  Users,
  GitMerge,
  Milestone,
  BarChart3,
  UserCircle2,
  MessageCircle,
  Check,
  Ellipsis,
  CircleDashed,
  ShieldHalf,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

import FeatureLookupSection, { FeatureLookUpItemProps } from "@/components/landing/components/FeatureLookupComp";
import { DocumentEditingLayoutSVG, TextSkeletonSVG } from "@/assets";

interface CollaborativeDocumentProps {
  Icon: React.ElementType;
  children?: React.ReactNode;
  titleElement: React.ReactNode;
}

function CollaborativeDocument({
  Icon,
  children,
  titleElement,
}: CollaborativeDocumentProps) {
  return (
    <div className="relative Editor_Container h-[490px]">
      <DocumentEditingLayoutSVG className="h-full w-full md:w-[initial]" />
      <div className="absolute mt-24 top-20 px-24 flex flex-col items-start collaborative-wrapper">
        <div className="bg-lime/10 p-2 rounded-8 inline-block mb-3">
          <Icon className="h-5 w-5 text-lime fill-lime stroke-lime" />
        </div>
        <span className="relative font-medium inline-block my-3">
          {titleElement}
        </span>

        <span className="text-gray inline-block text-sm leading-6 mb-7 relative">
          {children}
        </span>
        <TextSkeletonSVG />
      </div>
    </div>
  );
}

function TabContentWrapper({ activeTab = "" }) {
  switch (activeTab) {
    case "collaborative":
      return (
        <CollaborativeDocument
          titleElement={
            <>
              <span className="border-[1.5px] border-lime rounded-tl-sm rounded-bl-sm rounded-tr-xs rounded-br-xs px-1">
                Collaborate on
              </span>
              <span>
                <div className="inline-block absolute h-8 w-[1.5px] bg-lime -top-2.5 -ml-[1px]"></div>
                <Badge className="bg-lime text-white absolute -top-[23px] -ml-[1px] !rounded-xs text-xs font-medium">
                  zoe
                </Badge>
              </span>
              &nbsp; ideas
            </>
          }
          Icon={Users}
        >
          <>
            Write down product ideas and work together on feature specs in
            realtime, multiplayer
            <span className="relative px-1">
              project
              <div className="inline-block absolute h-6 w-[1.5px] bg-[#5e6ad2] -top-2.5 ml-0.5"></div>
              <Badge className="bg-[#5e6ad2] text-white absolute !rounded-xs -top-5 ml-0.5 text-xs font-medium">
                quinn
              </Badge>
            </span>
            <br />
            documents. Add
            <span className="text-dimgrey pl-1">**</span>style
            <span className="text-dimgrey">**</span> and
            <span className="text-dimgrey pl-1">##</span>structure with
            rich-text formatting options.
          </>
        </CollaborativeDocument>
      );

    case "inline":
      return (
        <CollaborativeDocument
          titleElement={<span>Collect feedback</span>}
          Icon={MessageCircle}
        >
          <span className="block">
            Discuss ideas directly in context and refine your project
            specifications
            <span className="bg-[#897844] mx-1 px-1 inline-block text-white leading-5 border-b border-[#c2a955] relative">
              with inline comments.
              <div className="absolute mt-1 right-0 w-64 bg-onyx rounded-sm border border-[#34343a] shadow-xl">
                <div className="px-4 py-2 flex items-start w-full">
                  <div className="flex items-center gap-2 flex-1">
                    <img
                      src="/images/avatar/user-4.avif"
                      alt="User avatar"
                      className="h-4 w-w rounded-full"
                    />

                    <div>
                      <span className="text-sm font-medium">julian</span>
                      <span className="text-gray-500 ml-2 text-sm">
                        just now
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-gray-500 hover:text-gray-400">
                      <Ellipsis className="h-4 w-4" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-400">
                      <Check className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <p className="text-sm px-4 py-1 pt-0">
                  sounds like a good idea!
                </p>

                <div className="border-t border-gray-800 p-4 flex items-center gap-2">
                  <img
                    src="/images/avatar/user-5.avif"
                    alt="User avatar"
                    className="h-4 w-w rounded-full"
                  />

                  <div className="flex-1 text-gray-500">Reply...</div>
                </div>
              </div>
            </span>
          </span>
        </CollaborativeDocument>
      );

    default:
      return (
        <CollaborativeDocument
          titleElement={<span>Convert text to issues</span>}
          Icon={Users}
        >
          <>
            <span>Seamlessly move between ideation and execution.</span>
            <ul className="font-medium flex flex-col gap-1 text-base mt-3.5">
              <li className="flex gap-2 items-center bg-eerieblack rounded-xs px-1.5">
                <CircleDashed className="h-4 w-4" />
                ENG-231 Implement contextual memory
              </li>
              <li className="flex gap-2 items-center bg-eerieblack rounded-xs px-1.5">
                <ShieldHalf className="h-4 w-4 text-yellow" />
                ENG-233 Upgrade model selection log
              </li>
              <li className="flex gap-2 items-center bg-eerieblack rounded-xs px-1.5">
                <ShieldHalf className="h-4 w-4 text-yellow" />
                ENG-231 Implement contextual memory
              </li>
            </ul>
          </>
        </CollaborativeDocument>
      );
  }
}

const featuresList: FeatureLookUpItemProps[] = [
  {
    title: "Initiatives",
    desc: "Coordinate strategic product efforts.",
    Icon: UserCircle2,
  },
  {
    title: "Cross-team projects",
    desc: "Collaborate across teams and departments.",
    Icon: GitMerge,
  },
  {
    title: "Milestones",
    desc: "Break projects down into concrete phases.",
    Icon: Milestone,
  },
  {
    title: "Progress insights",
    desc: "Track scope, velocity, and progress over time.",
    Icon: BarChart3,
  },
];

const tabs = [
  { id: "collaborative", label: "Collaborative documents" },
  { id: "inline", label: "Inline comments" },
  { id: "text-to-issue", label: "Text-to-issue commands" },
];

export default function ProductPlanning() {
  const [activeTab, setActiveTab] = useState("collaborative");

  return (
    <div className="container mx-auto px-4 flex flex-col text-white">
      <div className="flex-1 flex flex-col md:flex-row py-12 gap-8">
        <div className="md:w-2/5 mt-16 space-y-8">
          <div>
            <h3 className="text-2xl font-medium mb-2 max-w-60">
              Ideate and specify what to build next
            </h3>
          </div>

          <div className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2.5 w-full text-left py-0.5 transition-colors duration-150 delay-75",
                  activeTab === tab.id
                    ? "text-white"
                    : "text-dimgrey hover:text-gray-300"
                )}
              >
                <div
                  className={cn(
                    "h-6 w-1 rounded-full transition-colors duration-150 delay-75 bg-onyx",
                    activeTab === tab.id ? "bg-lime" : ""
                  )}
                ></div>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <TabContentWrapper activeTab={activeTab} />
      </div>
      <FeatureLookupSection listItems={featuresList} />
    </div>
  );
}
