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
      {/* <div className="grid grid-cols-3 gap-2"> */}
      <CarouselContent className="-ml-4">
        {carouselItems.map((carousel) => (
          <CarouselItem
            key={carousel.caption}
            className="md:basis-1/2 lg:basis-1/3"
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

// export default function FeatureCarousel() {
//   return (
//     <div className="bg-black min-h-screen flex items-center justify-center p-6">
//       <div className="w-full max-w-6xl">
//         <Carousel className="w-full">
//           <CarouselContent className="-ml-4">
//             <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
//               <Card className="bg-gray-900/60 border-gray-800 rounded-3xl overflow-hidden">
//                 <CardContent className="p-0">
//                   <div className="p-6 space-y-6">
//                     {/* Intercom Message */}
//                     <div className="bg-gray-800/70 rounded-xl p-4 space-y-3">
//                       <div className="flex items-center gap-2 text-gray-400 text-sm">
//                         <MessageSquare className="h-4 w-4" />
//                         <span>Intercom · zoe@acme.inc</span>
//                       </div>
//                       <p className="text-gray-300">
//                         We need a cost breakdown across all clients in a single
//                         report or dashboard
//                       </p>
//                     </div>

//                     {/* ACME Inc Request */}
//                     <div className="flex items-center gap-3 text-gray-300 text-sm">
//                       <div className="bg-gray-700 h-6 w-6 rounded flex items-center justify-center text-xs">
//                         A
//                       </div>
//                       <span className="font-medium">ACME Inc</span>
//                       <span className="text-gray-500">New request</span>
//                     </div>

//                     {/* ENG-860 */}
//                     <div className="bg-gray-800/70 rounded-xl p-4 flex items-center gap-3">
//                       <span className="text-gray-400">ENG-860</span>
//                       <Badge
//                         variant="outline"
//                         className="bg-transparent text-gray-400 border-gray-700"
//                       >
//                         Multi-cloud cost dashboard
//                       </Badge>
//                     </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter className="p-6 pt-0">
//                   <div>
//                     <div className="text-gray-400 mb-1">Customer Requests</div>
//                     <h3 className="text-xl font-medium text-white">
//                       Build what customers actually want
//                     </h3>
//                   </div>
//                 </CardFooter>
//               </Card>
//             </CarouselItem>

//             {/* Git Workflows Card */}
//             <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
//               <Card className="bg-gray-900/60 border-gray-800 rounded-3xl overflow-hidden">
//                 <CardContent className="p-0">
//                   <div className="p-6 space-y-6">
//                     {/* GitHub Issue */}
//                     <div className="bg-gray-800/70 rounded-xl p-4">
//                       <div className="flex items-center gap-2 text-gray-400 text-sm">
//                         <GitPullRequest className="h-4 w-4" />
//                         <span>#20319 igor/lin 15287 add source</span>
//                       </div>
//                     </div>

//                     {/* Activity Items */}
//                     <div className="space-y-4">
//                       <div className="flex items-start gap-3">
//                         <div className="text-green-500 mt-1">
//                           <GitPullRequest className="h-4 w-4" />
//                         </div>
//                         <div>
//                           <div className="flex items-center gap-1">
//                             <span className="text-gray-300">igor</span>
//                             <span className="text-gray-500">linked</span>
//                             <GitPullRequest className="h-4 w-4 text-gray-500" />
//                             <span className="text-gray-300">
//                               igor/lin 15287
//                             </span>
//                             <span className="text-gray-500">add source</span>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex items-start gap-3">
//                         <div className="text-gray-500 mt-1">
//                           <Clock className="h-4 w-4" />
//                         </div>
//                         <div>
//                           <div className="flex items-center gap-1">
//                             <span className="text-gray-300">igor</span>
//                             <span className="text-gray-500">
//                               changed status from In Progress
//                             </span>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex items-start gap-3">
//                         <div className="text-gray-500 mt-1">
//                           <Circle className="h-4 w-4" />
//                         </div>
//                         <div>
//                           <div className="flex items-center gap-1">
//                             <span className="text-gray-300">GitHub</span>
//                             <span className="text-gray-500">
//                               changed status from In Review
//                             </span>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex items-start gap-3">
//                         <div className="text-gray-500 mt-1">
//                           <CheckCircle className="h-4 w-4" />
//                         </div>
//                         <div>
//                           <div className="flex items-center gap-1">
//                             <span className="text-gray-300">igor</span>
//                             <span className="text-gray-500">
//                               changed status from Ready to
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter className="p-6 pt-0">
//                   <div>
//                     <div className="text-gray-400 mb-1">
//                       Powerful git workflows
//                     </div>
//                     <h3 className="text-xl font-medium text-white">
//                       Automate pull requests and commit workflows
//                     </h3>
//                   </div>
//                 </CardFooter>
//               </Card>
//             </CarouselItem>

//             {/* Linear Mobile Card */}
//             <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
//               <Card className="bg-gray-900/60 border-gray-800 rounded-3xl overflow-hidden">
//                 <CardContent className="p-0">
//                   <div className="p-6 flex justify-center">
//                     <div className="relative w-48 h-64">
//                       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 z-10 rounded-3xl"></div>
//                       <img
//                         src="/placeholder.svg?height=300&width=200"
//                         alt="Linear mobile app"
//                         className="w-full h-full object-cover rounded-3xl transform rotate-12"
//                       />
//                     </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter className="p-6 pt-0">
//                   <div>
//                     <div className="text-gray-400 mb-1">Linear Mobile</div>
//                     <h3 className="text-xl font-medium text-white">
//                       Move product work forward from anywhere
//                     </h3>
//                   </div>
//                 </CardFooter>
//               </Card>
//             </CarouselItem>

//             {/* Linear Asks Card */}
//             <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
//               <Card className="bg-gray-900/60 border-gray-800 rounded-3xl overflow-hidden">
//                 <CardContent className="p-0">
//                   <div className="p-6 space-y-6">
//                     {/* Placeholder content for Linear Asks */}
//                     <div className="bg-gray-800/70 rounded-xl p-4 space-y-3">
//                       <div className="flex items-center gap-2 text-gray-400 text-sm">
//                         <MessageCircle className="h-4 w-4" />
//                         <span>Slack · #product-requests</span>
//                       </div>
//                       <p className="text-gray-300">
//                         Can we add a feature to export reports to CSV?
//                       </p>
//                     </div>

//                     <div className="bg-gray-800/70 rounded-xl p-4 space-y-3">
//                       <div className="flex items-center gap-2 text-gray-400 text-sm">
//                         <MessageCircle className="h-4 w-4" />
//                         <span>Teams · Marketing</span>
//                       </div>
//                       <p className="text-gray-300">
//                         Need to update the dashboard with Q2 metrics
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter className="p-6 pt-0">
//                   <div>
//                     <div className="text-gray-400 mb-1">Linear Asks</div>
//                     <h3 className="text-xl font-medium text-white">
//                       Turn workplace requests into actionable issues
//                     </h3>
//                   </div>
//                 </CardFooter>
//               </Card>
//             </CarouselItem>
//           </CarouselContent>

//           <div className="flex justify-center mt-8">
//             <CarouselPrevious className="relative mr-2 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 hover:text-white" />
//             <CarouselNext className="relative ml-2 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 hover:text-white" />
//           </div>
//         </Carousel>
//       </div>
//     </div>
//   );
// }

export default function WorkflowsSection() {
  return (
    <section className="page_section py-40">
      <div className="container mx-auto px-4 font-medium">
        <div className="grid grid-cols-2 gap-28 place-items-end mb-14">
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
