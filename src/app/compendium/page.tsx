"use client";

import { Oranienbaum, Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { title } from "process";
import Image from "next/image";

const oranienbaum = Oranienbaum({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Compendium() {
  const roomTypes = [
    "Deluxe Room",
    "Junior Suite Room",
    "Executive Suite Room",
    "Presidential Suite Room",
  ];

  const facilities = [
    "Restoran",
    "Ruang Konferensi",
    "Kolam Renang",
    "Pusat Kebugaran",
    "Wi-Fi Gratis",
    "Layanan Laundry",
    "Layanan Pernikahan",
    "Area Lounge",
    "Area Merokok",
    "Dan Masih Banyak Lagi",
  ];

  const promoImage = [
    {
      imgSrc:
        "https://hotelunhas.com/wp-content/uploads/2023/06/wedding-deals-New-scaled.jpg",
    },
    {
      imgSrc:
        "https://hotelunhas.com/wp-content/uploads/2024/06/Kopi-Latte-1448x2048-1.jpg",
    },
    {
      imgSrc:
        "https://hotelunhas.com/wp-content/uploads/2024/06/Pizza-1448x2048-1.jpg",
    },
    {
      imgSrc:
        "https://hotelunhas.com/wp-content/uploads/2024/06/BBQ-1448x2048-1.jpg",
    },
  ];

  const spots = [
    {
      title: "Spot Sunset",
      imgSrc:
        "https://hotelunhas.com/wp-content/uploads/2024/08/Pantai-Losari-1-Spot-Sunset.png",
      alt: "taman-Rotterdam",
      descriptions: [
        "Berwisata idealnya untuk menikmati pemandangan indah dan kuliner khas. Pantai Losari menawarkan keduanya. Di sini, Anda bisa menyaksikan matahari terbenam yang memukau sambil menikmati Pisang Epe, kuliner khas Makassar.",
        "Di anjungan Pantai Losari, sunset terlihat semakin indah saat cuaca cerah. Momen magis ini tentu tak boleh dilewatkan!",
      ],
    },
    {
      title: "Masjid Terapung",
      imgSrc:
        "https://hotelunhas.com/wp-content/uploads/2024/08/Pantai-Losari-2-Masjid-Terapung.png",
      alt: "taman-Rotterdam",
      descriptions: [
        "Selain menikmati pemandangan dan kuliner, pengunjung Pantai Losari dapat melakukan wisata religi di Masjid Terapung Amirul Mukminin yang ikonik. Masjid ini memungkinkan pengunjung Muslim berwisata sambil beribadah.",
        "Masjid Amirul Mukminin, yang desainnya menyerupai rumah adat Sulawesi Selatan, mulai dibangun tahun 2009 dan selesai pada Desember 2012.",
      ],
    },
    {
      title: "Kapal Phinissi",
      imgSrc:
        "https://hotelunhas.com/wp-content/uploads/2024/08/Pantai-Losari-3-Kapal-Phinissi.png",
      alt: "taman-Rotterdam",
      descriptions: [
        "Di kawasan Pantai Losari, pengunjung dapat menyewa Kapal Pinisi yang tersedia di anjungan letter Pantai Losari.",
        "Dermaga untuk akses Kapal Pinisi berada tepat di belakangnya. Kapal Pinisi siap mengantarkan pengunjung berkeliling pantai dan pulau-pulau di sekitar Pantai Losari.",
      ],
    },
  ];

  const actBeach = [
    {
      title: "Taman",
      imgSrc:
        "https://hotelunhas.com/wp-content/uploads/2024/08/akkarena-grid-1.png",
      desc: "Pantai Akkarena memiliki taman seluas 450 meter persegi dengan desain mirip Mediterania. Taman ini menawarkan udara segar dan dilengkapi dengan sound system dan layar LCD untuk hiburan dan informasi wisatawan.",
    },
    {
      title: "Dermaga Cinta",
      imgSrc:
        "https://hotelunhas.com/wp-content/uploads/2024/08/akkarena-grid-2.png",
      desc: "Perahu wisata yang disewa untuk berkeliling pantai akan bersandar di Dermaga Cinta, sebuah area dengan panjang sekitar 150 meter dan lebar 5 meter, dihiasi lampu warna-warni mempercantik pemandangan malam.",
    },
    {
      title: "Camping Beach Party",
      imgSrc:
        "https://hotelunhas.com/wp-content/uploads/2024/08/akkarena-grid-4.png",
      desc: "Pantai Akkarena sering mengadakan Camping Beach Party saat liburan panjang, terutama akhir tahun. Acara ini menawarkan kembang api, api unggun, DJ performance, dan festival kuliner.",
    },
    {
      title: "Wahana Air",
      imgSrc:
        "https://hotelunhas.com/wp-content/uploads/2024/08/akkarena-grid-1.png",
      desc: "Pantai Akkarena menawarkan berbagai wahana permainan air seperti jetski, banana boat, speed boat, dan kano bagi pengunjung yang menyukai tantangan. Bagi yang lebih santai, tersedia juga perahu sewaan.",
    },
    {
      title: "Sunset",
      imgSrc:
        "https://hotelunhas.com/wp-content/uploads/2024/08/akkarena-grid-3.png",
      desc: "Pantai Akkarena terkenal sebagai tempat terbaik untuk menikmati indahnya sunset. Wisatawan sering datang ke sini untuk menyaksikan langit yang memancarkan warna-warni kemerahan saat matahari terbenam.",
    },
    {
      title: "Festival",
      imgSrc:
        "https://hotelunhas.com/wp-content/uploads/2024/08/akkarena-grid-5.png",
      desc: "Pantai Akkarena menjadi tuan rumah berbagai acara, termasuk Festival Layang-Layang yang diselenggarakan setiap tahun oleh Dinas Pariwisata Kota Makassar. Acara ini sangat dinantikan oleh masyarakat.",
    },
  ];

  const wisataData = [
    {
      title: "Wisata Situs Prasejarah",
      imgSrc: "/img/Taman-Leang-Leang-3-Wisata-Situs-Prasejarah.png",
      alt: "Wisata Situs",
      content: [
        {
          heading: "Eksplorasi Situs:",
          description:
            "Pengunjung dapat menjelajahi berbagai situs prasejarah yang ada di taman ini, melihat langsung tempat-tempat yang menjadi bukti sejarah.",
        },
        {
          heading: "Panduan Tur:",
          description:
            "Tersedia panduan tur yang memberikan penjelasan mendalam tentang setiap situs yang dijumpai, membantu pengunjung memahami pentingnya setiap temuan arkeologis.",
        },
      ],
    },
    {
      title: "Wisata Alam",
      imgSrc: "/img/Taman-Leang-Leang-4-Wisata-Alam.png",
      alt: "Wisata Alam",
      content: [
        {
          heading: "Aliran Sungai:",
          description:
            "Taman ini memiliki aliran sungai yang airnya jernih dan menyegarkan. Pengunjung bisa menikmati keindahan alam sambil merasakan kesejukan air sungai.",
        },
        {
          heading: "Spot Alam Unik:",
          description:
            "Selain sungai, terdapat banyak spot unik dan indah di taman ini yang menawarkan pengalaman eksplorasi alam yang menarik.",
        },
      ],
    },
    {
      title: "Wisata Edukasi",
      imgSrc: "/img/Taman-Leang-Leang-5-Wisata-Edukasi.png",
      alt: "Wisata Edukasi",
      content: [
        {
          heading: "Observasi Pendidikan:",
          description:
            "Taman Prasejarah Leang-Leang ideal untuk pelajar sejarah, geologi, dan arkeologi dengan banyak informasi dan bukti nyata.",
        },
        {
          heading: "Program Edukasi:",
          description:
            "Taman ini sering mengadakan program edukasi, menarik banyak pengunjung yang ingin belajar langsung dari ahli tentang kehidupan prasejarah dan temuan arkeologis.",
        },
      ],
    },
  ];

  const sectionData = [
    {
      sectionTitle: "Gua Prasejarah",
      items: [
        {
          imgSrc: "/img/Taman-Leang-Leang-1-Gua-Prasejarah.png",
          alt: "Lukisan ",
          title: "Lukisan:",
          description:
            "Gua ini terkenal dengan lukisan babi rusa dan telapak tangan yang terdapat pada dinding-dindingnya. Lukisan-lukisan ini adalah bukti peradaban terdahulu di daerah ini.",
          title2: "Artefak:",
          description2:
            "Di dalam gua, terdapat berbagai artefak dari peradaban terdahulu seperti alat makan dari batu, sisa makanan yang sudah menjadi tulang, dan benda laut seperti kerang.",
        },
      ],
    },
    {
      sectionTitle: "Museum",
      items: [
        {
          imgSrc: "/img/Taman-Leang-Leang-2-Museum.png",
          alt: "Pameran Artefak",
          title: "Pameran Artefak:",
          description:
            "Museum di kawasan ini menampilkan berbagai artefak yang ditemukan di sekitar Taman Prasejarah Leang-Leang. Artefak ini memberikan gambaran tentang peradaban terdahulu.",
          title2: "Informasi Edukatif:",
          description2:
            "Museum juga menyediakan informasi yang mendalam mengenai sejarah, geologi, dan arkeologi daerah ini, yang sangat bermanfaat bagi pengunjung yang ingin belajar lebih banyak tentang masa prasejarah.",
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      <section className="bg-[url('https://hotelunhas.com/wp-content/uploads/2024/08/UnhasHotel-frame.png')] bg-cover w-full flex justify-center">
        <div className="max-w-[1366px] bg-center w-full flex flex-col gap-4 p-8">
          <div className="w-full flex justify-center">
            <img
              src="https://hotelunhas.com/wp-content/uploads/2024/08/UnhasLogo-1.png"
              alt="logohotelunhas"
              className="w-24"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/3 flex flex-col gap-0">
              <div className="text-2xl font-bold">Unhas</div>
              <div className="text-4xl font-extrabold text-orange-600">
                Hotel & Convention
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-1/3">
              <img
                src="https://hotelunhas.com/wp-content/uploads/2024/06/Vector-location.png"
                alt="Location"
                className="w-6 h-8"
              />
              <p className="text-end text-sm md:text-md italic w-fit">
                Kampus UNHAS, Jl. Perintis Kemerdekaan No.Km. 10, Tamalanrea
                Indah, Makassar
              </p>
            </div>
          </div>
          {/* ===================================== */}
          <div className="flex flex-col md:flex-row w-full gap-4">
            <div className="w-full md:w-3/4">
              <div
                id="baris-3"
                className="w-full flex flex-col-reverse md:flex-row gap-4"
              >
                <div className="flex flex-col w-full md:w-2/3 gap-4">
                  <h2 className="font-bold text-4xl text-black">
                    Sejarah Singkat
                  </h2>
                  <p className="text-sm">
                    Hotel Unhas diresmikan pada jumat sore (22/4/2022) oleh
                    Universitas Hasanuddin di Makassar untuk menyediakan
                    akomodasi yang nyaman bagi tamu universitas dan masyarakat
                    umum. Terletak di dalam kampus Universitas Hasanuddin, hotel
                    ini awalnya dibangun untuk mendukung kegiatan akademik
                    seperti konferensi dan seminar. Selama bertahun-tahun, Hotel
                    Unhas telah mengalami renovasi untuk meningkatkan fasilitas
                    dan layanan. Kini, hotel ini dilengkapi dengan berbagai
                    fasilitas modern seperti ruang konferensi, restoran, dan
                    pusat kebugaran, menjadikannya pilihan ideal bagi tamu yang
                    berkunjung ke universitas maupun Kota Makassar.
                  </p>
                </div>
                <div className="hidden w-full md:w-1/3 h-full md:flex items-center">
                  <img
                    src="https://hotelunhas.com/wp-content/uploads/2024/08/Pemotongan-pita-2.png"
                    alt=""
                    className="w-full h-fit
               rounded-2xl"
                  />
                </div>
              </div>
              <div
                id=""
                className="flex flex-col md:flex-row items-start gap-4"
              >
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <h2 className="font-bold text-4xl text-black">Galery</h2>
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="row-span-2 border border-gray-300">
                      <img
                        src="https://hotelunhas.com/wp-content/uploads/2022/11/IMG_20221026_113126-400x284.jpg"
                        alt="Image 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="border border-gray-300">
                      <img
                        src="https://hotelunhas.com/wp-content/uploads/2024/05/IMG_20221022_183019-scaled-1-400x284.jpg"
                        alt="Image 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="border border-gray-300">
                      <img
                        src="https://hotelunhas.com/wp-content/uploads/2024/05/IMG_20221022_194646-scaled-1-400x284.jpg"
                        alt="Image 3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="col-span-2 border border-gray-300">
                      <img
                        src="https://hotelunhas.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-04-at-14.08.44.jpeg"
                        alt="Image 4"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="border border-gray-300">
                      <img
                        src="https://hotelunhas.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-04-at-14.08.46-2.jpeg"
                        alt="Image 5"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="row-span-2 border border-gray-300">
                      <img
                        src="https://hotelunhas.com/wp-content/uploads/2024/06/deluxe-room-1.png"
                        alt="Image 6"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="border border-gray-300">
                      <img
                        src="https://hotelunhas.com/wp-content/uploads/2024/06/junior-suite-room-1.png"
                        alt="Image 7"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="border border-gray-300">
                      <img
                        src="https://hotelunhas.com/wp-content/uploads/2024/06/deluxe-room-2.png"
                        alt="Image 8"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="col-span-2 border border-gray-300">
                      <img
                        src="https://hotelunhas.com/wp-content/uploads/2024/06/Rectangle-2-1.png"
                        alt="Image 9"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full md:w-1/2 gap-4">
                  <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-4xl text-black">Kamar</h2>
                    <div className="flex flex-wrap gap-2">
                      {roomTypes.map((roomType, index) => (
                        <button
                          key={index}
                          className="flex items-center gap-1 p-1.5 font-poppins font-semibold text-xs rounded-lg border border-gray-300 bg-slate-100"
                        >
                          <div className="">
                            <img
                              src="https://hotelunhas.com/wp-content/uploads/2024/08/material-symbols-light_meeting-room.png"
                              alt="door-icon"
                              className="w-4 h-4"
                            />
                          </div>
                          <span>{roomType}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-4xl text-black">Fasilitas</h2>
                    <div className="flex flex-wrap gap-2">
                      {facilities.map((facility, index) => (
                        <button
                          key={index}
                          className="flex items-center gap-1 p-1.5 font-poppins font-semibold text-xs rounded-lg border border-gray-300 bg-slate-100"
                        >
                          <img
                            className="w-4 h-4"
                            src="https://hotelunhas.com/wp-content/uploads/2024/08/solar_star-fall-bold.png"
                            alt="Fasilitas Icon"
                          />
                          <span className="">{facility}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="right-side"
              className="w-full md:w-1/4 flex flex-col gap-2 items-center"
            >
              <h2 className="font-bold text-4xl text-black">
                Promo dan& Event
              </h2>
              <div className="grid grid-cols-2 md:flex md:flex-col gap-2 items-center overflow-auto">
                {promoImage.map((item, index) => (
                  <div key={index} className="w-full md:w-2/3">
                    <img src={item.imgSrc} alt="" className="w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section rotterdam */}
      <section className="bg-[url('https://hotelunhas.com/wp-content/uploads/2024/08/FortRotterdam-Without-Grid-Frame.png')] sm:bg-[url('https://hotelunhas.com/wp-content/uploads/2024/08/FortRotterdam-Frame.png')] bg-cover bg-center w-full flex justify-center">
        <div className="max-w-[1366px] flex flex-col sm:flex-row gap-4 p-8">
          <div className="flex flex-col w-full sm:w-1/2">
            <div className="w-full flex justify-start">
              <img
                src="https://hotelunhas.com/wp-content/uploads/2024/08/UnhasLogo-1.png"
                alt="logohotelunhas"
                className="w-24"
              />
            </div>
            <div className="flex flex-col justify-start gap-0">
              <h2 className="text-black sm:text-white text-4xl font-bold p-0">
                Benteng
              </h2>
              <h1 className="text-orange-500 text-4xl md:text-6xl font-extrabold p-0">
                Rotterdam
              </h1>
            </div>
          </div>

          <div className="flex flex-col w-full sm:w-1/2 gap-4">
            <div className="flex flex-col">
              <h2 className="font-bold text-4xl text-black">Fasilitas</h2>
              <span>
                Fasilitas yang tersedia di Museum Rotterdam yang dapat dinikmati
                para pengunjung.
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-4xl text-black">
                Museum La Galigo
              </h2>
              <div>
                <img
                  src="https://hotelunhas.com/wp-content/uploads/2024/08/MuseumLaGaligo.png"
                  alt=""
                  className="rounded-xl"
                />
              </div>

              <div className="text-black text-sm font-poppins">
                <p className="mb-2.5">
                  Museum ini memiliki sekitar 4.999 koleksi, termasuk koleksi
                  prasejarah, numismatik, keramik asing, sejarah, naskah, dan
                  etnografi. Koleksi etnografi mencakup berbagai jenis
                  teknologi, kesenian, peralatan hidup, serta benda lain yang
                  dibuat dan digunakan oleh suku Bugis, Makassar, Mandar, dan
                  Toraja. Museum ini juga menyimpan benda-benda dari
                  kerajaan-kerajaan lokal dan senjata yang digunakan pada masa
                  revolusi kemerdekaan.
                </p>

                <p className="mb-2.5">
                  Pameran yang dapat dinikmati pengunjung terdiri dari dua
                  gedung. Yakni, Gedung No. 2 dan Gedung No. 10. Berikut rincian
                  koleksinya berdasarkan gedungnya, antara lain:
                </p>

                <h3 className="mt-5 mb-2.5 font-semibold">Gedung No. 2:</h3>
                <ul className="ml-5 list-disc">
                  <li>
                    Lantai 1: Prasejarah dengan koleksi alat batu, fosil, dan
                    arca. Koleksi Hindu-Buddha termasuk miniatur candi.
                    Numismatika dari berbagai zaman dan keramik asing abad
                    13–20.
                  </li>
                  <li>
                    Lantai 2: Pameran pahlawan Sulawesi Selatan, koleksi
                    kerajaan Luwu, Bone, dan Gowa termasuk senjata, artefak
                    sejarah, dan dokumen bersejarah.
                  </li>
                </ul>

                <h3 className="mt-5 mb-2.5 font-semibold">Gedung No. 10:</h3>
                <ul className="ml-5 list-disc">
                  <li>
                    Lantai 1: Pameran perahu pinisi, peralatan bahari, pakaian
                    adat dari berbagai daerah Indonesia, serta ruang khusus
                    tentang Islam.
                  </li>
                  <li>
                    Lantai 2: Teknologi tradisional Sulawesi Selatan, alat
                    penempa besi, tenun tradisional, dan pakaian pengantin adat
                    dari suku Bugis-Makassar, Toraja, dan Mandar.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-5 text-black w-full h-full font-poppins">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-4xl text-black text-end">
                  Taman
                </h2>

                <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-4">
                  <div className="w-full md:w-1/3 h-full">
                    <img
                      src="https://hotelunhas.com/wp-content/uploads/2024/08/taman-rotterdam.png"
                      alt="taman-Rotterdam"
                      className="rounded-lg" /* Equivalent to 5% border-radius */
                    />
                  </div>
                  <div className="w-full md:w-2/3 h-full">
                    <p className="text-sm w-full md:w-2/3 h-fit">
                      Tamannya cukup luas sehingga cocok untuk berpiknik, namun
                      ingat untuk tidak mengotori. Pengunjung sering menggunakan
                      taman ini untuk duduk santai sambil menikmati keheningan
                      Benteng Rotterdam. Taman ini juga sangat pas bagi Anda
                      yang membawa buku bacaan. Duduk santai sambil membaca akan
                      membuat waktu Anda lebih bermanfaat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section losari */}
      <section className="bg-[url('https://hotelunhas.com/wp-content/uploads/2024/08/Losari-Frame.png')] bg-cover bg-center w-full flex justify-center">
        <div className="max-w-[1366px] w-full flex flex-col sm:flex-row gap-4 p-8 ">
          <div className="flex flex-col w-full sm:w-1/2">
            <div className="w-full flex justify-start">
              <img
                src="https://hotelunhas.com/wp-content/uploads/2024/08/UnhasLogo-1.png"
                alt="logohotelunhas"
                className="w-24"
              />
            </div>
            <div className="flex flex-col justify-start gap-0">
              <h2 className="text-black text-4xl font-bold p-0">Benteng</h2>
              <h1 className="text-orange-500 text-6xl font-extrabold p-0">
                Rotterdam
              </h1>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col w-full sm:w-1/2 gap-4">
            {spots.map((spot, index) => (
              <div
                key={index}
                className="flex gap-5 text-black w-full h-full font-poppins"
              >
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-3xl text-black text-end">
                    {spot.title}
                  </h2>
                  <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-4">
                    <div className="w-full md:w-[30%] h-full">
                      <img
                        src={spot.imgSrc}
                        alt={spot.alt}
                        className="w-full md:w-[180px] h-full md:h-[180px] rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex flex-col w-full md:w-[70%] h-full gap-2">
                      {spot.descriptions.map((desc, i) => (
                        <p key={i} className="text-sm w-full h-fit">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* section Mandala & SombaOpu */}
      <section className="bg-[url('https://hotelunhas.com/wp-content/uploads/2024/08/MandalaSombaOpu-WithoutText-Frame.png')] bg-cover bg-center w-full h-full flex justify-center">
        <div className="max-w-[1366px] w-full h-full flex flex-col gap-10 py-8">
          <div className="w-full flex justify-center">
            <img
              src="https://hotelunhas.com/wp-content/uploads/2024/08/UnhasLogo-1.png"
              alt="logohotelunhas"
              className="w-24"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-10 px-8 w-full h-full items-start">
            {/* vvv Left vvv */}
            <div className="flex flex-col w-full sm:w-1/2 h-full gap-4">
              <div className="w-full flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-1/2 flex flex-col gap-0">
                  <div className="text-2xl font-bold text-black">Monumen</div>
                  <div className="text-4xl font-extrabold text-orange-600">
                    Mandala
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-1/2">
                  <img
                    src="https://hotelunhas.com/wp-content/uploads/2024/06/Vector-location.png"
                    alt="Location"
                    className="w-6 h-8"
                  />
                  <p className="text-end text-sm sm:text-md italic">
                    Jl. Jend. Sudirman, Sawerigading, Kec. Ujung Pandang, Kota
                    Makassar
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://hotelunhas.com/wp-content/uploads/2024/08/Monumen-Mandala.png"
                  alt=""
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-start">
                  Monumen Mandala adalah simbol sejarah yang penting dalam
                  perjuangan merebut kembali Irian Barat dari Belanda pada tahun
                  1962. Selain sebagai pengingat pengorbanan pahlawan, monumen
                  ini juga memiliki nilai simbolis yang mendalam. Ini menjadi
                  tempat untuk menghormati para pahlawan dan belajar nilai-nilai
                  sejarah bagi masyarakat dan generasi muda. Sebagai objek
                  wisata bersejarah, Monumen Mandala tidak hanya memberikan
                  wawasan sejarah tetapi juga pengalaman yang menghargai
                  perjuangan dan nasionalisme Indonesia.
                </p>
                <p className="text-start">
                  Monumen Mandala di Makassar memiliki berbagai fasilitas dan
                  ruang yang masing-masing memiliki fungsi dan koleksi berbeda:
                </p>
                <p className="text-start">
                  <span className="text-black font-bold pr-1">
                    Lantai Dasar:
                  </span>
                  Biasanya digunakan untuk ruang pameran yang menampilkan
                  berbagai artefak dan dokumentasi sejarah terkait peristiwa
                  Pemberontakan DI/TII dan perjuangan kemerdekaan Indonesia.
                </p>
                <p className="text-start">
                  <span className="text-black font-bold pr-1">Lantai 1:</span>
                  Berisi ruang pameran lanjutan yang memperdalam pemahaman
                  mengenai peristiwa sejarah yang terjadi di Sulawesi Selatan,
                  serta koleksi foto dan dokumentasi lainnya.
                </p>
                <p className="text-start">
                  <span className="text-black font-bold pr-1">Lantai 2:</span>
                  Dapat berfungsi sebagai area ruang konferensi atau seminar,
                  tempat di mana kegiatan budaya dan sosial sering diadakan.
                </p>
                <p className="text-start">
                  <span className="text-black font-bold pr-1">
                    Lantai Atas:
                  </span>
                  Merupakan tempat observasi atau viewing deck yang menawarkan
                  pemandangan kota Makassar dari ketinggian, menjadi daya tarik
                  tambahan bagi pengunjung.
                </p>
                <p className="text-start">
                  Monumen Mandala bukan hanya tempat bersejarah tetapi juga
                  menjadi pusat edukasi dan budaya yang penting bagi masyarakat
                  Makassar dan sekitarnya.
                </p>
              </div>
            </div>
            {/* ^^^ Left ^^^ */}
            {/* <div className="w-1/6 flex justify-center h-full">
            <div className="hidden sm:block w-full rotate-90 ">
              <span className="w-full text-nowrap bg-blue-500">
                WISATA BERSEJARAH
              </span>
            </div>
          </div> */}
            {/*  vvv Right vvv */}
            <div className="flex flex-col w-full sm:w-1/2 gap-4">
              <div className="w-full flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-1/2 flex flex-col gap-0">
                  <div className="text-2xl font-bold text-black">Benteng</div>
                  <div className="text-4xl font-extrabold text-orange-600">
                    Somba Opu
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-1/2">
                  <img
                    src="https://hotelunhas.com/wp-content/uploads/2024/06/Vector-location.png"
                    alt="Location"
                    className="w-6 h-8"
                  />
                  <p className="text-end text-sm sm:text-md italic">
                    Benteng sombaopu, Gusung Sarombe Sapiria, Benteng Somba Opu,
                    Kec. Barombong, Kota Makassar,
                  </p>
                </div>
              </div>
              {/* =========================================== */}
              <div>
                <img
                  src="https://hotelunhas.com/wp-content/uploads/2024/08/SombaOpu-Top.png"
                  alt=""
                />
              </div>
              {/* =========================================== */}
              <div className="flex flex-col gap-2">
                <p className="text-start">
                  Benteng Somba Opu di Makassar adalah destinasi yang
                  menggabungkan sejarah dan keindahan alam Sulawesi Selatan.
                  Berikut adalah rangkuman lebih detail dari tiga daya tarik
                  utama tempat ini:
                </p>

                <p className="text-start">
                  <span className="text-black font-bold pr-1">Benteng:</span>
                  Benteng Somba Opu adalah saksi sejarah yang penting dari
                  Kerajaan Gowa-Tallo. Bangunannya terbuat dari batu bata dan
                  masih kokoh hingga saat ini. Dikatakan oleh sejarawan William
                  Wallace sebagai salah satu benteng terkuat di Nusantara,
                  benteng ini memperlihatkan arsitektur yang kokoh serta
                  strategis yang digunakan dalam pertahanan terhadap penjajah
                  Belanda.
                </p>
                <p className="text-start">
                  <span className="text-black font-bold pr-1">Rumah Adat:</span>
                  Di sekitar Benteng Somba Opu terdapat replika rumah
                  tradisional dari berbagai suku di Sulawesi Selatan, seperti
                  Makassar, Bugis, Toraja, dan Mandar. Rumah-rumah adat ini
                  menampilkan atap yang khas, memanjang ke atas, serta
                  konstruksi yang mewakili kebudayaan dan keunikan arsitektur
                  masing-masing suku.
                </p>
                <p className="text-start">
                  <span className="text-black font-bold pr-1">Museum:</span>
                  Museum yang terletak di dalam kompleks Benteng Somba Opu
                  didedikasikan untuk menghormati tokoh Karaeng Patingalloang
                  dan menyimpan benda-benda bersejarah dari Kesultanan Gowa.
                  Koleksi museum ini mencakup mata tombak, keramik, mata uang
                  kuno, fragmen tungku, mata kali, peluru, serta meriam besar
                  yang panjangnya mencapai 9 meter dengan berat sekitar 9.500
                  kilogram. Museum ini menjadi pusat pengetahuan yang penting
                  untuk memahami sejarah perlawanan dan kekayaan budaya Sulawesi
                  Selatan.
                </p>
                <p className="text-start">
                  Dengan gabungan antara benteng bersejarah yang megah,
                  keberagaman rumah adat, dan kekayaan koleksi museum, Benteng
                  Somba Opu tidak hanya menjadi destinasi wisata yang menarik
                  tetapi juga memperkaya pengalaman wisatawan dalam memahami
                  sejarah dan kebudayaan kawasan ini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section Akkarena */}
      <section className="bg-[url('https://hotelunhas.com/wp-content/uploads/2024/08/Pantai-Akkarena.png')] bg-cover bg-center flex justify-center">
        <div className="max-w-[1366px] w-full flex flex-row gap-4 p-4 sm:p-0">
          <div className="bg-[url('https://hotelunhas.com/wp-content/uploads/2024/08/AkkarenaSide-1.png')] bg-cover bg-center w-1/4 hidden sm:flex flex-row p-4">
            <div className="w-full flex justify-start">
              <img
                src="https://hotelunhas.com/wp-content/uploads/2024/08/UnhasLogo-1.png"
                alt="logohotelunhas"
                className="w-28 h-20"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full sm:w-3/4 pr-0 sm:pr-8 sm:py-8 ">
            <div className="w-full flex flex-col md:flex-row justify-between">
              <div className="w-full sm:w-1/3 flex flex-col gap-0">
                <div className="text-2xl font-bold">Pantai</div>
                <div className="text-4xl font-extrabold text-orange-600">
                  Akkarena
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-1/3">
                <img
                  src="https://hotelunhas.com/wp-content/uploads/2024/06/Vector-location.png"
                  alt="Location"
                  className="w-6 h-8"
                />
                <p className="text-end text-sm md:text-md italic w-fit">
                  Jl. Metro Tj. Bunga, Tj. Merdeka, Kec. Tamalate, Kota Makassar
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
              {actBeach.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h2 className="font-bold text-2xl text-black text-start">
                    {item.title}
                  </h2>
                  <div className="w-full h-full flex flex-col-reverse md:flex-row justify-center items-center gap-4">
                    <p className="text-sm w-full md:w-2/3 h-fit">{item.desc}</p>
                    <div className="w-full md:w-1/3 h-full flex items-center">
                      <img
                        src={item.imgSrc}
                        alt="taman-Rotterdam"
                        className="w-full h-full rounded-lg object-cover" /* Equivalent to 5% border-radius */
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* section Kodingareng */}
      <section className="bg-[url('https://hotelunhas.com/wp-content/uploads/2024/08/Pulau-Kodingareng-Keke-Frame.png')] bg-cover bg-center flex justify-center">
        <div className="max-w-[1366px] w-full flex flex-col gap-4 p-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2 flex items-center gap-4">
              <div className="w-fit h-fit">
                <img
                  src="https://hotelunhas.com/wp-content/uploads/2024/08/Kodingareng-Main-Sticker.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col gap-4">
              <div className="w-full flex flex-col justify-between">
                <div className="w-full flex flex-col gap-0">
                  <div className="text-2xl font-bold text-black">Pulau</div>
                  <div className="text-4xl font-extrabold text-orange-600">
                    Kodingareng Keke
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full">
                  <img
                    src="https://hotelunhas.com/wp-content/uploads/2024/06/Vector-location.png"
                    alt="Location"
                    className="w-6 h-8"
                  />
                  <p className="text-end italic w-fit">
                    P. Kondingareng, Kec. Ujung Tanah, Kota Makassar, Sulawesi
                    Selatan
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-0">
                <h2 className="text-3xl font-bold text-black">Aktifitas</h2>
                <p>
                  Aktifitas seru yang tersedia di pulau Kodingareng Keke yang
                  dapat dinikmati para pengunjung.
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-black">Snorkeling</h3>

                <div className="flex flex-col sm:flex-row">
                  <div className="flex flex-col gap-4 w-full">
                    <p>
                      Pulau Kodingareng Keke menawarkan kondisi ombak yang
                      sangat tenang di pagi hari, yang membuatnya sempurna untuk
                      kegiatan snorkeling, Spot snorkeling terbaik terletak di
                      ujung pulau, dengan kedalaman air sekitar dua hingga tiga
                      meter.
                    </p>
                    <p>
                      Di sini pengunjung dapat menikmati pemandangan terumbu
                      karang yang indah, berbagai jenis ikan yang bergerombol,
                      serta beragam biota laut lainnya seperti kerang, ubur-ubur
                      kecil, dan anemon laut. Kedalaman yang cukup dangkal ini
                      memudahkan para snorkeler untuk menjelajahi keindahan
                      bawah laut Pulau Kodingareng Keke dengan nyaman dan aman.
                    </p>
                  </div>
                  <div className="w-full">
                    <img
                      src="https://hotelunhas.com/wp-content/uploads/2024/08/Kodingareng-sub-Sticker-1.png"
                      alt=""
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="hidden md:block w-2/5"></div>
            <div className="flex flex-col gap-0 w-full md:w-3/5">
              <h3 className="text-2xl font-bold text-black">Berenang</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex flex-col gap-4 w-full sm:w-1/2 md:3/4">
                  <p>
                    Pulau Kodingareng Keke adalah destinasi liburan yang indah
                    dengan berbagai fasilitas. Pengunjung dapat berenang bebas
                    di pantai dengan kedalaman 2-3 meter tanpa pelampung. Di
                    sini, tersedia penyewaan alat snorkeling dan peralatan
                    menyelam lengkap, serta hammock dan tikar untuk bersantai
                    dengan harga terjangkau.
                  </p>
                  <p>
                    Juga terdapat kamar mandi untuk bilas badan setelah
                    berenang. Nikmati juga kuliner seafood segar dari pedagang
                    lokal, tetap waspada terhadap perubahan arus laut untuk
                    keselamatan Anda.
                  </p>
                </div>
                <div className="w-full sm:w-1/2 md:1/4">
                  <img
                    src="https://hotelunhas.com/wp-content/uploads/2024/08/Kodingareng-sub-Sticker-2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section Leang-Leang */}
      <section className="bg-[url('https://hotelunhas.com/wp-content/uploads/2024/08/Taman-Leang-Leang-Main.png')] bg-cover bg-center w-full flex flex-col items-center">
        <div className="bg-[url('https://hotelunhas.com/wp-content/uploads/2024/08/Taman-Leang-Leang-Header.png')] bg-cover bg-center w-full flex flex-col items-center gap-4 pt-8 pb-4 px-8">
          <div className="max-w-[1366px] w-full">
            <div className="w-full flex justify-start">image</div>
            <div className="w-full flex flex-col sm:flex-row justify-between">
              <div className="w-full flex flex-col gap-0">
                <div className="text-2xl font-bold text-black">
                  Taman Prasejarah
                </div>
                <div className="text-4xl font-extrabold text-[#06A6B6] text-opacity-50 ">
                  Leang-leang
                </div>
              </div>

              <div className="flex items-center gap-3 w-full">
                <img
                  src="https://hotelunhas.com/wp-content/uploads/2024/06/Vector-location.png"
                  alt="Location"
                  className="w-6 h-8"
                />
                <p className="text-end italic w-fit">
                  Kel. Leang-Leang, Kec. Bantimurung, Kab. Maros.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1366px]">
          <div className="flex w-full px-8 md:px-20 pt-2 pb-10 text-black">
            <p className="text-center font-semibold bg-yellow-300 text-white md:text-black bg-opacity-20 px-4 py-2 rounded-xl italic">
              Taman Prasejarah Leang-Leang merupakan bukti sejarah kehadiran
              peradaban terdahulu di daerah ini, dibuktikan oleh lukisan babi
              rusa dan telapak tangan di dinding gua. Di dalam gua, ditemukan
              artefak dari peradaban tersebut seperti alat makan dari batu,
              tulang sisa makanan, dan benda laut seperti kerang. Taman ini juga
              menjadi situs warisan budaya Indonesia, dikelola oleh Balai
              Pelestarian Cagar Budaya Provinsi Sulawesi Selatan.
            </p>
          </div>
          <div className=" flex flex-col text-black px-8">
            <h1 className="text-4xl font-bold italic">Wahana</h1>
            <p className="font-extralight">
              Wahana yang tersedia di taman prasejarah Leang-leang yang dapat
              dinikmati para pengunjung.
            </p>
          </div>

          {/* ====================================== */}

          {/* ====================================== */}
          <div className=" flex flex-col gap-4 bg-transparent p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-4 w-full md:w-3/4">
                {sectionData.map((section, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 p-4 rounded-xl bg-white bg-opacity-30"
                  >
                    <h2 className="text-4xl font-bold text-black">
                      {section.sectionTitle}
                    </h2>
                    <div className="flex flex-col md:flex-row">
                      {section.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="w-full flex flex-col md:flex-row gap-4 p-2 md:p-0 mb-4 md:mb-0"
                        >
                          {item.imgSrc && (
                            <div className="w-full md:w-1/4">
                              <img
                                src={item.imgSrc}
                                alt={item.alt}
                                className="rounded-lg"
                              />
                            </div>
                          )}
                          <div className="w-full md:w-2/3 flex flex-col gap-4 text-black">
                            <div className="">
                              <span className="font-semibold mt-2">
                                {item.title}
                              </span>
                              <p className="text-sm">{item.description}</p>
                            </div>
                            <div className="">
                              <span className="font-semibold mt-2">
                                {item.title2}
                              </span>
                              <p className="text-sm">{item.description2}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}{" "}
              </div>
              <div className="bg-[url('https://hotelunhas.com/wp-content/uploads/2024/08/Taman-Leang-Leang-Side.png')] bg-cover bg-center w-1/4 flex flex-col gap-4 pt-8 pb-4 px-8 text-white rounded-xl">
                {/* Side Image */}
              </div>
            </div>
            {/* Wisata Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
              {wisataData.map((wisata, index) => (
                <div
                  key={index}
                  className="flex flex-col p-4 bg-white bg-opacity-30 shadow rounded-xl h-full"
                >
                  <h3 className="text-2xl font-bold ">{wisata.title}</h3>
                  <div className="flex flex-col lg:flex-row items-center gap-2 h-full">
                    <div className="">
                      <img
                        src={wisata.imgSrc}
                        alt={wisata.alt}
                        className="rounded-lg mb-2 w-full h-[full] object-cover"
                      />
                    </div>

                    <div className="flex flex-col">
                      {wisata.content.map((item, i) => (
                        <div key={i} className="mb-2">
                          <p className="text-xl md:text-lg font-bold">
                            {item.heading}
                          </p>
                          <p className="text-lg md:text-sm">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ====================================== */}
        </div>
      </section>
    </div>
  );
}
