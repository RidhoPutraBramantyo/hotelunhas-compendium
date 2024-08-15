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

export default function Room() {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col items-center text-black">
      <section className="p-4">
        <div className="w-full pb-5">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-semibold">Deluxe Room</h1>
              <div className="flex flex-col gap-2 text-center">
                <Button
                  onClick={() =>
                    router.push(
                      `https://www.bookandlink.com/booking/booking-page.php?checkin=&checkout=&id=3369&promo=`
                    )
                  }
                >
                  BOOK NOW
                </Button>
                <span>Available 64 Rooms</span>
              </div>
            </div>
            <p className="text-center">
              The room is quite spacious and elegantly designed, this room is
              34.7 square meters with high-speed Wi-Fi access, mini bar, SMART
              HD TV 32″ flat screen with international channels, coffee and tea
              maker, safe box and modern bathroom equipment.
            </p>
            <div className="flex flex-wrap gap-4 font-poppins">
              {features.map((feature) => (
                <button
                  key={feature}
                  className="flex justify-center items-center whitespace-nowrap border border-gray-300 rounded-full py-1 px-2 bg-[#fffbe8] font-medium"
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>
        </div>

        {descrItem.map((_, index) => (
          <div
            key={index}
            className={`flex flex-col w-full items-center gap-4 ${
              poppins.className
            } px-10 py-5 ${index % 2 === 0 ? "bg-primary" : "bg-secondary"}`}
          ></div>
        ))}
      </section>
      <section className="bg-primary p-4">
        <div className="w-full pb-5">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-semibold">Deluxe Room</h1>
              <div className="flex flex-col gap-2 text-center">
                <Button
                  onClick={() =>
                    router.push(
                      `https://www.bookandlink.com/booking/booking-page.php?checkin=&checkout=&id=3369&promo=`
                    )
                  }
                >
                  BOOK NOW
                </Button>
                <span>Available 64 Rooms</span>
              </div>
            </div>
            <p className="text-center">
              The room is quite spacious and elegantly designed, this room is
              34.7 square meters with high-speed Wi-Fi access, mini bar, SMART
              HD TV 32″ flat screen with international channels, coffee and tea
              maker, safe box and modern bathroom equipment.
            </p>
            <div className="flex flex-wrap gap-4 font-poppins">
              {features.map((feature) => (
                <button
                  key={feature}
                  className="flex justify-center items-center whitespace-nowrap border border-gray-300 rounded-full py-1 px-2 bg-[#fffbe8] font-medium"
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>
        </div>

        {descrItem.map((_, index) => (
          <div
            key={index}
            className={`flex flex-col w-full items-center gap-4 ${
              poppins.className
            } px-10 py-5 ${index % 2 === 0 ? "bg-primary" : "bg-secondary"}`}
          ></div>
        ))}
      </section>
      <section className="p-4">
        <div className="w-full pb-5">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-semibold">Deluxe Room</h1>
              <div className="flex flex-col gap-2 text-center">
                <Button
                  onClick={() =>
                    router.push(
                      `https://www.bookandlink.com/booking/booking-page.php?checkin=&checkout=&id=3369&promo=`
                    )
                  }
                >
                  BOOK NOW
                </Button>
                <span>Available 64 Rooms</span>
              </div>
            </div>
            <p className="text-center">
              The room is quite spacious and elegantly designed, this room is
              34.7 square meters with high-speed Wi-Fi access, mini bar, SMART
              HD TV 32″ flat screen with international channels, coffee and tea
              maker, safe box and modern bathroom equipment.
            </p>
            <div className="flex flex-wrap gap-4 font-poppins">
              {features.map((feature) => (
                <button
                  key={feature}
                  className="flex justify-center items-center whitespace-nowrap border border-gray-300 rounded-full py-1 px-2 bg-[#fffbe8] font-medium"
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>
        </div>

        {descrItem.map((_, index) => (
          <div
            key={index}
            className={`flex flex-col w-full items-center gap-4 ${
              poppins.className
            } px-10 py-5 ${index % 2 === 0 ? "bg-primary" : "bg-secondary"}`}
          ></div>
        ))}
      </section>
      <section className="bg-primary p-4">
        {" "}
        <div className="w-full pb-5">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-semibold">Deluxe Room</h1>
              <div className="flex flex-col gap-2 text-center">
                <Button
                  onClick={() =>
                    router.push(
                      `https://www.bookandlink.com/booking/booking-page.php?checkin=&checkout=&id=3369&promo=`
                    )
                  }
                >
                  BOOK NOW
                </Button>
                <span>Available 64 Rooms</span>
              </div>
            </div>
            <p className="text-center">
              The room is quite spacious and elegantly designed, this room is
              34.7 square meters with high-speed Wi-Fi access, mini bar, SMART
              HD TV 32″ flat screen with international channels, coffee and tea
              maker, safe box and modern bathroom equipment.
            </p>
            <div className="flex flex-wrap gap-4 font-poppins">
              {features.map((feature) => (
                <button
                  key={feature}
                  className="flex justify-center items-center whitespace-nowrap border border-gray-300 rounded-full py-1 px-2 bg-[#fffbe8] font-medium"
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>
        </div>
        {descrItem.map((_, index) => (
          <div
            key={index}
            className={`flex flex-col w-full items-center gap-4 ${
              poppins.className
            } px-10 py-5 ${index % 2 === 0 ? "bg-primary" : "bg-secondary"}`}
          ></div>
        ))}
      </section>
    </div>
  );
}
