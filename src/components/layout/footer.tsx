"use client";

import { useRouter } from "next/navigation";

const socialLinks = [
  {
    href: "https://www.facebook.com/hotelunhas",
    src: "https://hotelunhas.com/wp-content/uploads/2024/06/Sosmed-facebook.png",
    alt: "Facebook",
  },
  {
    href: "https://wa.me/628114467373",
    src: "https://hotelunhas.com/wp-content/uploads/2024/06/Sosmed-Whatsapp.png",
    alt: "Whatsapp",
  },
  {
    href: "https://www.instagram.com/unhashotel",
    src: "https://hotelunhas.com/wp-content/uploads/2024/06/Sosmed-Instagram.png",
    alt: "Instagram",
  },
  {
    href: "https://youtu.be/fQEQ7Lo51lA?si=eg0K-ikMRGhniqyO",
    src: "https://hotelunhas.com/wp-content/uploads/2024/06/Sosmed-Youtube.png",
    alt: "YouTube",
  },
  {
    href: "https://twitter.com/HotelUnhas",
    src: "https://hotelunhas.com/wp-content/uploads/2024/06/Sosmed-Twitter.png",
    alt: "Twitter",
  },
];

const contactInfo = [
  {
    src: "https://hotelunhas.com/wp-content/uploads/2024/06/Vector-location.png",
    alt: "Location",
    text: "Jl. Perintis Kemerdekaan KM 10 ( Kampus UNHAS ), Kota Makassar, Sulawesi Selatan, Kode Pos 90245",
  },
  {
    src: "https://hotelunhas.com/wp-content/uploads/2024/06/Vector-gmail.png",
    alt: "Email",
    text: "unhashotel@gmail.com",
  },
  {
    src: "https://hotelunhas.com/wp-content/uploads/2024/06/Vector-phone.png",
    alt: "Phone",
    text: "(0411) 89 0000 9 / 0811 446 7373",
  },
];

export default function Footer() {
  const router = useRouter();

  return (
    <div className="w-full flex justify-center bg-slate-300">
      <div className="flex flex-col items-center gap-2 px-8 max-w-[1366px]">
        <div className="bg-red-600 h-2 w-full md:w-1/2" />
        <div className="w-full flex flex-col md:flex-row justify-between py-10 gap-4">
          <div className="flex flex-col gap-8">
            <img
              src="https://hotelunhas.com/wp-content/uploads/2024/08/UnhasLogo-1.png"
              className="w-20"
              alt="Unhas Hotel Logo"
            />
            <p className="text-center md:text-start">
              Meetings, conferences, and events at Unhas Hotel promise an
              ambience of exclusivity and privacy for groups of any size. Unhas
              Hotel is equipped with the most advanced presentation and staging.
              Unhas Hotel services ensure that everyone, from the planner to the
              guests or delegates, enjoys individualized attention.
            </p>
            <div className="flex flex-col gap-5">
              <div
                key={contactInfo[0].alt}
                className="flex items-center gap-2.5"
              >
                <img
                  src={contactInfo[0].src}
                  alt={contactInfo[0].alt}
                  className="w-6 h-8"
                />
                <p>{contactInfo[0].text}</p>
              </div>{" "}
              <div
                key={contactInfo[1].alt}
                className="flex items-center gap-2.5"
              >
                <img
                  src={contactInfo[1].src}
                  alt={contactInfo[1].alt}
                  className="w-6 h-6"
                />
                <p>{contactInfo[1].text}</p>
              </div>{" "}
              <div
                key={contactInfo[2].alt}
                className="flex items-center gap-2.5"
              >
                <img
                  src={contactInfo[2].src}
                  alt={contactInfo[2].alt}
                  className="w-6 h-6"
                />
                <p>{contactInfo[2].text}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex space-x-3 rounded-xl">
              {socialLinks.map(({ href, src, alt }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={src}
                    alt={alt}
                    width="43"
                    height="43"
                    className="rounded-xl"
                  />
                </a>
              ))}
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15895.219204341836!2d119.4887404!3d-5.1351109!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefd94db791629%3A0x2cfefda72a3cb257!2sUnhas%20Hotel%20%26%20Convention!5e0!3m2!1sid!2sid!4v1717553895463!5m2!1sid!2sid"
              width="270"
              height="290"
              className="border-0 rounded-[20px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
