"use client";

import Image from "next/image";
import { Oranienbaum, Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const oranienbaum = Oranienbaum({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const descrItem = [
  {
    imgSrc: "",
    title: "Deluxe Room",
    desc: "The room is quite spacious and elegantly designed, this room is 34.7 square meters with high-speed Wi-Fi...",
    readMoreLink: "/",
    buttonLink: "/room",
  },
  // Tambahkan item lainnya jika diperlukan
];

const features = [
  "King and Twin Size Bed",
  "Lake / UNHAS Park View",
  "Hotspot and TV Cable",
  "Free Breakfast",
  "AC Control",
  "Smoke Detector",
  "IDD Direct Dial",
  "Mini Bar",
  "Coffee & Tea Making",
  "Sprinkler System",
];

export default function Facilities() {
  const router = useRouter();
  return (
    <div className="w-full">
      <h1>Facilities</h1>
    </div>
  );
}
