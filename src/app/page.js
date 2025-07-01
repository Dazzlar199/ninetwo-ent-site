"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaTwitter, FaCalendarAlt } from "react-icons/fa";

const groupSliderImages = [
  "/images/group1.jpg",
  "/images/group2.jpg",
  "/images/group3.jpg",
];

const members = [
  { name: "Wooseok", image: "wooseok1.jpg" },
  { name: "Haecheon", image: "haecheon1.jpg" },
  { name: "Donghyun", image: "donghyun1.jpg" },
  { name: "Jungyoon", image: "jungyoon1.jpg" },
  { name: "Rintaro", image: "rintaro1.jpg" },
  { name: "Aoi", image: "aoi1.jpg" },
  { name: "Ryo", image: "ryo1.jpg" },
  { name: "Leno", image: "leno1.jpg" },
  { name: "Xiho", image: "xiho1.jpg" },
];

const mvList = [
  {
    title: "3WAY - ‘음 (Mm-hmm)’ MV",
    url: "https://www.youtube.com/embed/4vAX2vEZ1Io",
  },
  {
    title: "3WAY Project - ‘Hey Girl’ MV",
    url: "https://www.youtube.com/embed/kNrWF4GF8AU",
  },
  {
    title: "3WAY Project - ‘On My Way’ MV",
    url: "https://www.youtube.com/embed/EenXuevXP7U",
  },
];

export default function Home() {
  const [sliderRef] = useKeenSlider({ loop: true, slides: { perView: 1 } });
  const [filter, setFilter] = useState("All");
  const events = [
    { title: "Fan Meeting in Seoul", date: "2025-07-20", category: "Fan Meeting" },
    { title: "New Album Release", date: "2025-08-15", category: "Release" },
    { title: "Showcase in Tokyo", date: "2025-09-01", category: "Showcase" },
  ];
  const filteredEvents = filter === "All" ? events : events.filter((e) => e.category === filter);

  // ✅ Scroll To Top 버튼 상태
  const [isClient, setIsClient] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 relative">
      {/* ✅ Scroll To Top 버튼 */}
      {isClient && showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg z-50 hover:bg-blue-600"
        >
          ↑ Top
        </button>
      )}

      <header className="sticky top-0 z-50 flex justify-between items-center p-6 shadow-md bg-white bg-opacity-95 backdrop-blur-sm">
        <Image src="/images/logo-9e.png" alt="9e Logo" width={60} height={60} />
        <nav className="space-x-6">
          <a href="#company" className="font-semibold hover:underline">Company</a>
          <a href="#artists" className="font-semibold hover:underline">Artists</a>
          <a href="#musicvideos" className="font-semibold hover:underline">Music</a>
          <a href="#schedule" className="font-semibold hover:underline">Schedule</a>
          <a href="#contact" className="font-semibold hover:underline">Contact</a>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-32 bg-blue-200">
        <motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold mb-6">
          Future of K-POP, Vision for the Next Generation
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="text-xl max-w-xl">
          나인투엔터테인먼트는 차세대 K-POP 아티스트를 발굴하고, 
          그들의 꿈을 실현하기 위해 최선을 다하고 있습니다.
        </motion.p>
        <Link href="/audition">
          <Button className="mt-8 px-8 py-4 text-lg rounded-2xl shadow-lg">
            Join the Audition
          </Button>
        </Link>
      </section>

      <section id="company" className="py-24 bg-white">
  {/* 타이틀 중앙 정렬 */}
  <h3 className="text-4xl font-bold text-center mb-16">Company</h3>

  {/* 좌우 배치: 지도 / 소개 */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-center">

    {/* Left: Google Map */}
    <div className="w-[400px] h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-lg mx-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d551.8542899670242!2d127.08919961291556!3d37.54306194663111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca525c2ea3415%3A0xd4379b3eb058e687!2z7ISc7Jq47Yq567OE7IucIOq0keynhOq1rCDqtazsnZjrj5kgMjMxLTEz!5e0!3m2!1sko!2skr!4v1750950838221!5m2!1sko!2skr"
        width="100%"
        height="100%"
        className="border-0 w-full h-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    {/* Right: 소개 상자 */}
    <div
      className="w-[400px] h-[300px] md:h-[350px] bg-gray-50 border border-gray-200 rounded-2xl shadow-md p-8 text-center md:text-left
                 transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl group relative overflow-hidden"
    >
      {/* 기본 로고 (hover 전 표시) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
        <Image src="/images/logo-9e.png" alt="9e Logo" width={120} height={40} />
      </div>

      {/* 텍스트 소개 (hover 시 표시) */}
      <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
        <p className="text-gray-800 mb-6">
          9e 엔터테인먼트는 글로벌 음악 시장을 선도하는 K-POP 전문 엔터테인먼트사로서,
          실력과 인성을 겸비한 아티스트를 양성하고 있습니다.
        </p>
        <p className="text-gray-800">
          “차세대 한류를 이끄는, 전 세계가 주목하는 아티스트”라는 비전을 가지고
          다양한 콘텐츠를 통해 세계와 소통합니다.
        </p>
      </div>
    </div>
  </div>
</section>



      <section className="py-24 bg-white">
        <h3 className="text-4xl font-bold text-center mb-12">Our Artists</h3>
        <div ref={sliderRef} className="keen-slider max-w-4xl mx-auto rounded-2xl overflow-hidden">
          {groupSliderImages.map((src, index) => (
            <div key={index} className="keen-slider__slide">
              <Image
                src={src}
                alt={`Group Image ${index + 1}`}
                width={2000}
                height={2000}
                className="w-full h-[600px] object-cover object-center"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="artists" className="py-24 bg-white">
  <h3 className="text-4xl font-bold text-center mb-12">
    <Image src="/images/logo-3way.png" alt="3WAY Logo" width={360} height={360} className="mx-auto rounded-full" />
  </h3>

  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-6">
    {members.map((member, index) => (
      <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg">
        <Image
          src={`/images/${member.image}`}
          alt={member.name}
          width={400}
          height={400}
          className="w-full h-90 object-cover object-top transform group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
          <span className="text-white text-xl font-semibold">{member.name}</span>
        </div>
      </div>
    ))}
  </div>
</section>


      <section id="musicvideos" className="py-24 bg-blue-50">
        <h3 className="text-4xl font-bold text-center mb-12">Music</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
          {mvList.map((mv, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold mb-2 text-center">{mv.title}</h4>
              <div className="relative w-full aspect-video">
                <iframe
                  src={mv.url}
                  title={mv.title}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="schedule" className="py-24 bg-blue-100">
        <h3 className="text-4xl font-bold text-center mb-12">Schedule</h3>

        <div className="flex justify-center mb-8 space-x-4 flex-wrap px-4">
          {['All', 'Fan Meeting', 'Release', 'Showcase'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 mb-2 rounded-lg text-sm ${
                filter === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {filteredEvents.map((event, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-blue-500 mr-2" />
                <h4 className="text-lg font-semibold">{event.title}</h4>
              </div>
              <p className="text-sm text-gray-600">📅 {event.date}</p>
              <p className="text-sm text-gray-600">🏷️ {event.category}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="bg-white text-black py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <Image
              src="/images/logo-9e.png"
              alt="9e Logo"
              width={120}
              height={40}
              className="mx-auto md:mx-0 mb-4"
            />
            <p className="text-sm text-gray-600">
              차세대 K-POP을 이끄는 9e 엔터테인먼트는 글로벌 아티스트의 꿈을 지원합니다.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Navigation</h4>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#company" className="hover:underline">Company</a></li>
              <li><a href="#artists" className="hover:underline">Artists</a></li>
              <li><a href="#musicvideos" className="hover:underline">Music</a></li>
              <li><a href="#schedule" className="hover:underline">Schedule</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4 text-2xl">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <FaYoutube />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          © 2025 9e Entertainment. All rights reserved.
        </p>
      </footer>

      {/* Floating Audition Button */}
      <Link href="/audition">
        <Button
          className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
        >
          Join the Audition
        </Button>
      </Link>
    </div>
  );
}
