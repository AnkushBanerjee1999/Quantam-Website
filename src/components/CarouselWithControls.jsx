import { Carousel } from "@material-tailwind/react";
 import AIMascot from "../../public/team/ai-mascot.svg";
 import ikonQuantamLogo from "../../public/team/ai-mascot2.png";
export function CarouselWithControls () {
  return (
    <Carousel className="rounded-xl">
      <img
        src={AIMascot}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={ikonQuantamLogo}
        alt="image 2"
        height="10"
        className="object-cover"
      />
    </Carousel>
  );
}