"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const socialLinks = [
  {
    href: "https://www.facebook.com/hotelunhas",
    src: "https://hotelunhas.id/wordpress/wp-content/uploads/2024/09/Sosmed-Facebook-black-50x50-1.png",
    alt: "Facebook",
  },
  {
    href: "https://wa.me/628114467373",
    src: "https://hotelunhas.id/wordpress/wp-content/uploads/2024/09/Sosmed-whatsapp-black-50x50-1.png",
    alt: "Whatsapp",
  },
  {
    href: "https://www.instagram.com/unhashotel",
    src: "https://hotelunhas.id/wordpress/wp-content/uploads/2024/09/Sosmed-Instagram-black-50x50-1.png",
    alt: "Instagram",
  },
  {
    href: "https://youtu.be/fQEQ7Lo51lA?si=eg0K-ikMRGhniqyO",
    src: "https://hotelunhas.id/wordpress/wp-content/uploads/2024/09/Sosmed-Youtube-black-50x50-1.png",
    alt: "YouTube",
  },
  {
    href: "https://twitter.com/HotelUnhas",
    src: "https://hotelunhas.id/wordpress/wp-content/uploads/2024/09/Sosmed-twitter-black-50x50-1.png",
    alt: "Twitter",
  },
];

const contactInfo = [
  {
    url: "https://maps.app.goo.gl/5F7SshmdXJyujEDp6",
    src: "https://hotelunhas.id/wordpress/wp-content/uploads/2024/09/Icon-Location-grey-50x50-1.png",
    alt: "Location",
    text: "Jl. Perintis Kemerdekaan KM 10 ( Kampus UNHAS ), Kota Makassar, Sulawesi Selatan, Kode Pos 90245",
    className: "w-6 h-6 md:w-8 md:h-8 hidden sm:block",
  },
  {
    url: "mailto:unhashotel@gmail.com",

    src: "https://hotelunhas.id/wordpress/wp-content/uploads/2024/09/Icon-mail-grey-50x50-1.png",
    alt: "Email",
    text: "unhashotel@gmail.com",
    className: "w-6 h-6 md:w-8 md:h-8 hidden sm:block",
  },
  {
    url: "https://wa.me/628114467373",
    src: "https://hotelunhas.id/wordpress/wp-content/uploads/2024/09/Icon-phone-grey-50x50-1.png",
    alt: "Phone",
    text: "(0411) 89 0000 9 / 0811 446 7373",
    className: "w-6 h-6 md:w-8 md:h-8 hidden sm:block",
  },
];

export default function Footer() {
  const router = useRouter();

  return (
    <div className="w-full flex justify-center bg-slate-300">
      <div className="flex flex-col items-center gap-2 px-8 max-w-[1366px]">
        <div className="bg-red-600 h-2 w-full" />
        <div className="w-full flex gap-4">
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col gap-4 py-10">
              <img
                src="https://hotelunhas.id/wordpress/wp-content/uploads/2024/09/New-bintang-logo-01.png"
                className="w-24 h-24 object-cover"
                alt="Unhas Hotel Logo"
              />
              <p className="text-center md:text-start">
                Meetings, conferences, and events at Unhas Hotel promise an
                ambience of exclusivity and privacy for groups of any size.
                Unhas Hotel is equipped with the most advanced presentation and
                staging. Unhas Hotel services ensure that everyone, from the
                planner to the guests or delegates, enjoys individualized
                attention.
              </p>
            </div>

            <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-5">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-2.5">
                      <img
                        src={info.src}
                        alt={info.alt}
                        className={info.className}
                      />

                      <p className="w-full flex justify-center sm:justify-start text-center sm:text-start">
                        <a
                          href={info.url} // ganti dengan nomor WhatsApp yang dituju
                          target="_blank"
                          className="sm:w-fit"
                        >
                          {info.text}
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full flex md:hidden flex-col item-center md:items-end justify-center md:justify-end gap-2">
                <div className="w-full sm:w-fit flex justify-center gap-3 rounded-xl">
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
                <div className="w-full sm:w-fit flex justify-center pb-8 sm:pb-4 md:pb-0">
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
          <div className="w-fit hidden md:flex md:flex-col items-center md:justify-center gap-2 py-10">
            <div className="flex flex-row gap-3 rounded-xl ">
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
