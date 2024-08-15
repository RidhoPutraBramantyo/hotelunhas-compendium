import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type RoomCardProps = {
  title: string;
  description: string;
  images: string[];
  readMoreLink: string;
  buttonLink: string;
};

const RoomCard: React.FC<RoomCardProps> = ({
  title,
  description,
  images,
  readMoreLink,
  buttonLink,
}) => {
  return (
    <Card className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md p-4">
      <div className="grid grid-cols-1 gap-2 mb-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src || "path/to/placeholder-image.jpg"}
            alt={`${title} ${index + 1}`}
            className="w-full h-auto rounded-md"
          />
        ))}
      </div>
      <CardContent className="flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
        <p className="text-gray-700 mb-4 text-center">{description}</p>
        <a
          href={readMoreLink}
          className="text-green-600 font-semibold hover:underline mb-4"
        >
          Read More
        </a>
        <a
          href={buttonLink}
          className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md text-center hover:bg-yellow-600"
        >
          Booking Room
        </a>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
