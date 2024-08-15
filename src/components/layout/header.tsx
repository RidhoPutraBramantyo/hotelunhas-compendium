//hotelunhas-next/src/components/layout/header.tsx

"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLink = (value: string) => {
    router.push(`/${value}`);
  };

  return (
    <div className="hidden md:flex justify-between items-center w-full font-poppins max-w-[1366px] text-white">
      <div className="p-2">
        <Image
          src="https://hotelunhas.com/wp-content/uploads/2024/06/Logo-Unhas-.png"
          alt="Logo-Unhas-.png"
        />
      </div>
      <div className="flex flex-col">
        <div className="p-2 flex gap-2">
          <Button variant="link" onClick={() => handleLink("")}>
            Home
          </Button>
          <Button variant="link" onClick={() => handleLink("room")}>
            Room
          </Button>
          <Button variant="link" onClick={() => handleLink("fasilities")}>
            Facilities
          </Button>
          <Button variant="link" onClick={() => handleLink("galery")}>
            Galery
          </Button>
        </div>
      </div>
      <div className="p-4">
        <Button className="">BOOK NOW</Button>
      </div>
    </div>
  );
}
