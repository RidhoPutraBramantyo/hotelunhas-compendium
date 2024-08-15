"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { link } from "fs";

export default function FooterNav() {
  const router = useRouter();

  const handleLink = (value: string) => {
    router.push(`/${value}`);
  };

  return (
    <nav className="fixed w-full bottom-0 bg-black text-white flex justify-center md:justify-around items-center gap-2 md:hidden">
      <Button size="sm" variant="link" onClick={() => handleLink("")}>
        Home
      </Button>
      <Button size="sm" variant="link" onClick={() => handleLink("room")}>
        Room
      </Button>
      <Button size="sm" variant="link" onClick={() => handleLink("fasilities")}>
        Facilities
      </Button>
      <Button size="sm" variant="link" onClick={() => handleLink("galery")}>
        Galery
      </Button>
    </nav>
  );
}
