import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const resourcesItems = {
  company: [
    {
      title: "About",
      href: "#",
      description: "Meet the team",
    },
    {
      title: "Careers",
      href: "#",
      description: "We're hiring",
    },
  ],
  explore: [
    {
      title: "Linear Method",
      href: "#",
      description: "Practices for building",
    },
    {
      title: "Switch to Linear",
      href: "#",
      description: "Migration guide",
    },
    {
      title: "Security",
      href: "#",
      description: "Safe, secure, and private",
    },
    {
      title: "Download",
      href: "#",
      description: "Get the app",
    },

    {
      title: "Docs",
      href: "#",
      description: "How to use Linear",
    },
    {
      title: "Quality",
      href: "#",
      description: "Conversations on quality",
    },
  ],
};

const productsItems = {
  coreFeatures: [
    {
      title: "Plan",
      href: "#",
      description:
        "Set the direction and map out your product journey with Linear's purpose-built product planning features.",
    },
    {
      title: "Build",
      href: "#",
      description:
        "Issue tracking and sprint planning for teams who want to make progress. Purpose-built for modern product development.",
    },
  ],
  more: [
    {
      title: "Customer Requests",
      href: "#",
      description: "Manage user feedback",
    },
    {
      title: "Integrations",
      href: "#",
      description: "Collaborate across tools",
    },
    {
      title: "Insights",
      href: "#",
      description: "Realtime analytics",
    },
    {
      title: "Linear Asks",
      href: "#",
      description: "Workplace requests",
    },

    {
      title: "Mobile app",
      href: "#",
      description: "Linear in your pocket",
    },
    {
      title: "Changelog",
      href: "#",
      description: "See what's new",
    },
  ],
};

const ProductMenuContent: React.FC = () => {
  return (
    <NavigationMenuContent className="bg-[#0a0a0a]/90 p-2 backdrop-blur-lg">
      <ul className="bg-anchor-glass border-[#f7f8f8]/20 rounded-sm grid w-[420px] gap-3 md:w-[500px] md:grid-cols-3 lg:w-[700px] ">
        <li className="border-r border-[#f7f8f8]/10 py-4 px-5">
          <span className="text-xs text-gray-500 px-3 py-2.5 inline-block">
            Core Features
          </span>
          {productsItems.coreFeatures.map((feature) => (
            <ListItem
              key={feature.title}
              title={feature.title}
              href={feature.href}
            >
              {feature.description}
            </ListItem>
          ))}
        </li>

        <li className="col-span-2 py-4 pr-5">
          <span className="text-xs text-gray-500 px-3 py-2.5 inline-block">
            More
          </span>
          <div className="grid grid-cols-2">
            {productsItems.more.map((feature) => (
              <ListItem
                key={feature.title}
                title={feature.title}
                href={feature.href}
              >
                {feature.description}
              </ListItem>
            ))}
          </div>
        </li>
      </ul>
    </NavigationMenuContent>
  );
};

const ResourceMenuContent: React.FC = () => {
  return (
    <NavigationMenuContent className="bg-[#0a0a0a]/90 p-2 backdrop-blur-lg">
      <ul className="bg-anchor-glass border-[#f7f8f8]/20 rounded-sm grid w-[420px] gap-3 md:w-[500px] md:grid-cols-3 lg:w-[700px] ">
        <li className="border-r border-[#f7f8f8]/10 py-4 px-5">
          <span className="text-xs text-gray-500 px-3 py-2.5 inline-block">
            Company
          </span>
          {resourcesItems.company.map((item) => (
            <ListItem key={item.title} title={item.title} href={item.href}>
              {item.description}
            </ListItem>
          ))}
        </li>

        <li className="col-span-2 py-4 pr-5">
          <span className="text-xs text-gray-500 px-3 py-2.5 inline-block">
            Explore
          </span>
          <div className="grid grid-cols-2">
            {resourcesItems.explore.map((items) => (
              <ListItem key={items.title} title={items.title} href={items.href}>
                {items.description}
              </ListItem>
            ))}
          </div>
        </li>
      </ul>
    </NavigationMenuContent>
  );
};

interface NavListsProps {
  name: string;
  link: string;
  navMenuContent?: React.FC;
}

const NavLists: NavListsProps[] = [
  {
    name: "Product",
    link: "#",
    navMenuContent: ProductMenuContent,
  },
  {
    name: "Resources",
    link: "#",
    navMenuContent: ResourceMenuContent,
  },
  {
    name: "Pricing",
    link: "#",
  },
  {
    name: "Customers",
    link: "#",
  },
  {
    name: "Blog",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
];

export function MegaNavigationMenu() {
  return (
    <NavigationMenu className="hidden md:flex" delayDuration={100}>
      <NavigationMenuList className="gap-2">
        {NavLists.map((navItem, index) => (
          <NavigationMenuItem key={`${navItem.name}-${index} `}>
            {navItem.navMenuContent ? (
              <>
                <NavigationMenuTrigger className="inline-block bg-transparent rounded-8 text-gray-400 py-2 px-3 font-medium text-sm hover:bg-neutral-900 hover:text-alabaster transition-all duration-150">
                  {navItem.name}
                </NavigationMenuTrigger>
                <navItem.navMenuContent />
              </>
            ) : (
              <NavigationMenuLink
                href={navItem.link}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "inline-block bg-transparent rounded-8 text-gray-400 py-2 px-3 font-medium text-sm hover:bg-neutral-900 hover:text-alabaster transition-all duration-150"
                )}
              >
                {navItem.name}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </>
  );
});
ListItem.displayName = "ListItem";
