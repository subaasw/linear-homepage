import {
  OpenAILogo,
  ArcLogo,
  BoomLogo,
  BrexLogo,
  RampLogo,
  MonzoLogo,
  CursorLogo,
  RemoteLogo,
  RetoolLogo,
  RunwayLogo,
  RaycastLogo,
  DescriptLogo,
  SupercellLogo,
  PerplexityLogo,
  CashAppLogo,
  MercuryLogo,
  ScaleLogo,
  VercelLogo,
} from "@/assets/customers";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const customerIcons = [
  OpenAILogo,
  ArcLogo,
  BoomLogo,
  BrexLogo,
  RampLogo,
  MonzoLogo,
  CursorLogo,
  RemoteLogo,
  RetoolLogo,
  RunwayLogo,
  RaycastLogo,
  DescriptLogo,
  SupercellLogo,
  PerplexityLogo,
  CashAppLogo,
  MercuryLogo,
  ScaleLogo,
  VercelLogo,
];

export default function CustomersSection() {
  return (
    <section className="py-16 -mt-64 relative z-10 bg-gradient-to-t from-richblack/15 backdrop-blur-2xl to-richblack/5 shadow-2xl">
      <div className="text-center container mx-auto px-4">
        <div className="text-[#8a8f98] font-medium text-[22px]">
          <p className="text-white">Powering the world's best product teams.</p>
          <p>From next-gen startups to established enterprises.</p>
        </div>
        <div className="relative group">
          <ImageCarousel />
          <Button
            variant="ghost"
            className="hidden group-hover:flex !border absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 !border-neutral-800 px-3 duration-150 transition-all hover:bg-eerieblack"
          >
            Meet our customers
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

const ImageCarousel = ({ images = customerIcons, interval = 2500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 6) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const currentImages = images.slice(currentIndex, currentIndex + 6);

  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-16 py-8 relative justify-items-center mt-8 font-normal group-hover:blur-xs">
      {currentImages.map((CustomerImage, index) => (
        <div
          key={index}
          className="transition-opacity duration-1000 ease-in-out opacity-0 animate-fade-in"
        >
          <CustomerImage
            className="h-12 filter animate-fade-in transition-filter duration-1000 ease-in-out"
            key={"Icon-" + index}
          />
        </div>
      ))}
    </div>
  );
};
