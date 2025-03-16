import { ChevronRight, SquareUser } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DiamondFillIcon,
  DiamondOutlineIcon,
  FigmaIcon,
  InProgressIcon,
  LabIcon,
  ChatIcon,
  UpDownLineIcon,
  DownUpIcon,
} from "@/assets/icons";
import ProductPlanning from "./product-planning";

interface IconWithTextProps {
  Icon: React.ElementType;
  text: string;
  className?: string;
  children?: React.ReactNode;
}

interface NotificationAssetCardProps {
  Icon: React.ElementType;
  title: string;
  desc: string;
  date: string;
  innerClassName: string;
  className?: string;
}

const notificationAssetsList = [
  {
    title: "Off Track",
    desc: "Unexpected roadblocks forced us to take a different…",
    icon: DownUpIcon,
    date: "Oct 28",
    innerClass: "text-red",
  },

  {
    title: "At risk",
    desc: "Progress slowed down last week because…",
    icon: UpDownLineIcon,
    date: "Oct 27",
    innerClass: "text-orange",
  },

  {
    title: "On track",
    desc: "We are ready to launch next Thursday",
    icon: ChatIcon,
    date: "Sep 8",
    innerClass: "text-lime",
  },
];

function IconWithText({
  className = "",
  Icon,
  text,
  children = null,
}: IconWithTextProps) {
  return (
    <div className={cn("flex items-center gap-1 text-lightgray", className)}>
      <Icon className="h-4 w-4" />
      <span className="text-sm font-medium">{text}</span>
      {children ? children : ""}
    </div>
  );
}

function NotificationAssetCard({
  Icon,
  title,
  date,
  desc,
  className = "",
  innerClassName = "",
}: NotificationAssetCardProps) {
  return (
    <div
      className={cn(
        "NotificationAsset_card space-y-4 font-medium border rounded-[16px]",
        className
      )}
    >
      <div className="NotificationAsset_card_inner">
        <div className={cn("flex gap-2 mb-1.5", innerClassName)}>
          <Icon className="h-5 w-5 bg-current/15 rounded-full" />
          <span>{title}</span>
        </div>
        <p className="pb-2.5">{desc}</p>
        <p className="text-dimgrey">{date}</p>
      </div>
    </div>
  );
}

export default function PlanningSection() {
  return (
    <section className="page_section py-40">
      <div className="container mx-auto px-4 font-medium">
        <div>
          <a href="#" className="mb-4 block group">
            <div className="flex items-center gap-2 text-lightgray mb-2">
              <div className="h-2 w-3.5 bg-lime rounded-full"></div>
              <div className="flex items-end gap-1.5 text-sm group-hover:gap-3 transition-all duration-150">
                <span>Project and long-term planning</span>
                <ChevronRight className="h-5 w-5" />
              </div>
            </div>
            <h2 className="tracking-tighter">Set the product direction</h2>
          </a>

          <p className="font-medium text-lg text-gray max-w-96">
            <span className="text-white pr-2">
              Align your team around a unified product timeline.
            </span>
            Plan, manage, and track all product initiatives with Linear's visual
            planning tools.
          </p>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto">
        <img
          className="page_planningHeroImage -ml-8"
          src="/images/roadmap-view.png"
          alt="Roadmap View"
        />
      </div>

      <div className="container mx-auto px-4 border-y grid grid-cols-2">
        <div className="py-14 border-r">
          <h3 className="mb-1 font-medium">Manage projects end-to-end</h3>
          <p className="text-gray text-lg leading-6 font-medium">
            Consolidate specs, milestones, tasks, and other documentation in one
            centralized location.
          </p>
          <div className="ProjectOverview_root">
            <div className="utils_gradientBorder">
              <div className="px-7 py-8 projectOverview_inner utils_gradientBorder mt-10">
                <h4 className="text-[22px] mb-5 font-medium">
                  Project Overview
                </h4>
                <div className="space-y-4.5">
                  <div className="flex text-gray">
                    <p className="text-sm min-w-24">Properties</p>
                    <div className="flex gap-4">
                      <IconWithText Icon={InProgressIcon} text="In Progress" />
                      <IconWithText Icon={SquareUser} text="ENG" />

                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((indexNum) => (
                          <img
                            key={`user-${indexNum}`}
                            src={`/images/avatar/user-${indexNum}.avif`}
                            alt={`User-${indexNum}`}
                            className="h-5 w-5 rounded-full -mr-1"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex text-gray">
                    <p className="text-sm min-w-24">Resources</p>
                    <div className="flex gap-4">
                      <IconWithText Icon={FigmaIcon} text="Exploration" />
                      <IconWithText Icon={LabIcon} text="User interviews" />
                    </div>
                  </div>

                  <div className="flex text-gray">
                    <p className="text-sm min-w-24">Milestone</p>
                    <div className="flex flex-col gap-4">
                      <IconWithText
                        Icon={DiamondFillIcon}
                        text="Design Review 100%"
                      />
                      <IconWithText
                        Icon={DiamondFillIcon}
                        text="Internal Alpha 100% of 10"
                      />
                      <IconWithText
                        Icon={DiamondOutlineIcon}
                        text="GA 25% of 53"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-14 pl-12">
          <h3 className="mb-1 font-medium">Project updates</h3>
          <p className="text-gray text-lg leading-6 font-medium">
            Communicate progress and project health with built-in project
            updates.
          </p>

          <div className="NotificationAsset_card_Root">
            <div className="NotificationAsset_cards mt-10">
              {notificationAssetsList.map((item) => (
                <NotificationAssetCard
                  key={item.title}
                  innerClassName={item.innerClass}
                  Icon={item.icon}
                  date={item.date}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProductPlanning />
    </section>
  );
}
