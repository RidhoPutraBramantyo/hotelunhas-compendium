import * as React from "react";
import RoomCard from "./RoomCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize() {
  const carouselItems = [
    {
      imgSrc: [
        "path/to/deluxe-room-1.jpg",
        "path/to/deluxe-room-2.jpg",
        "path/to/deluxe-room-3.jpg",
      ],
      title: "Deluxe Room",
      desc: "The room is quite spacious and elegantly designed, this room is 34.7 square meters with high speed WIFI ...",
      readMoreLink: "/deluxe-room",
      buttonLink: "/room/deluxe",
    },
    {
      imgSrc: [
        "path/to/junior-suite-room-1.jpg",
        "path/to/junior-suite-room-2.jpg",
        "path/to/junior-suite-room-3.jpg",
      ],
      title: "Junior Suite Room",
      desc: "The room is quite spacious and elegantly designed, this room covers an area of 43.8 square....",
      readMoreLink: "/junior-suite-room",
      buttonLink: "/room/junior-suite",
    },
    {
      imgSrc: [
        "path/to/executive-suite-room-1.jpg",
        "path/to/executive-suite-room-2.jpg",
        "path/to/executive-suite-room-3.jpg",
      ],
      title: "Executive Suite Room",
      desc: "A very spacious room consisting of a separate bedroom and living room with room dimensions of 54.3....",
      readMoreLink: "/executive-suite-room",
      buttonLink: "/room/executive-suite",
    },
    {
      imgSrc: [
        "path/to/presidential-suite-room-1.jpg",
        "path/to/presidential-suite-room-2.jpg",
        "path/to/presidential-suite-room-3.jpg",
      ],
      title: "Presidential Suite Room",
      desc: "The very spacious room consists of a separate bedroom and living room with room dimensions of 80.8....",
      readMoreLink: "/presidential-suite-room",
      buttonLink: "/room/presidential-suite",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Accommodation</h1>
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="flex justify-center">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 p-2">
              <RoomCard
                title={item.title}
                description={item.desc}
                images={item.imgSrc}
                readMoreLink={item.readMoreLink}
                buttonLink={item.buttonLink}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
}
