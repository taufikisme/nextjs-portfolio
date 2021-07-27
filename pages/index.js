import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Button from "../components/Button";
import ButtonCircle from "../components/ButtonCircle";
import Navbar from "../components/Navbar";
import Navlink from "../components/Navlink";
import Container from "../components/Container";
import RoundBottom from "../components/RoundBottom";
import Heading from "../components/Heading";
import Card from "../components/Card";
import CardHero from "../components/CardHero";
import CardBody from "../components/CardBody";
import CardHeader from "../components/CardHeader";
import CardFooter from "../components/CardFooter";
import BGRound from "../components/BGRound";
import CardPill from "../components/CardPill";
import CardPillBody from "../components/CardPillBody";
import Footer from "../components/Footer";

import { isMobile } from "react-device-detect";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

// react icons
import {
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
  FaSun,
  FaMoon,
} from "react-icons/fa";

export default function Home() {
  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const mynavbar = document.getElementById("myNav");
    if (scrollY > 20) {
      mynavbar.classList.add("shadow-lg");
    } else {
      mynavbar.classList.remove("shadow-lg");
    }

    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";

    var percent =
      ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;

    setProgress(percent);
  };

  const handleModeChange = () => {
    if (mode === "light") {
      localStorage.setItem("theme", "dark");
      setMode("dark");
    } else {
      localStorage.setItem("theme", "light");
      setMode("light");
    }
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMode(localStorage.getItem("theme"));
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Layout>
      <Head>
        <title>Taufikisme</title>
        <meta name="description" content="Taufik's Web Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{ width: `${progress}%` }}
        className="fixed z-50 h-[2px] bg-blue-500 shadow-blue-neon"
      ></div>
      <Navbar>
        <ul className="flex items-center space-x-3">
          <li>
            <Link href="/">
              <a>
                <img className="h-12 w-auto" src="/images/myself-small.png" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="font-bold text-2xl dark:text-white">Taufikisme</a>
            </Link>
          </li>
        </ul>

        <div className="flex flex-row space-x-5">
          <Navlink />
          <ButtonCircle handleClick={handleModeChange}>
            <span className="mx-auto">
              {mode === "light" ? <FaMoon /> : <FaSun />}
            </span>
          </ButtonCircle>
        </div>
      </Navbar>

      <div className="bg-white dark:bg-dark1 pt-20">
        <Container>
          <div className="md:flex md:flex-row-reverse items-center">
            <div className="md:w-4/12 w-8/12 mb-8 mx-auto">
              <img className="w-full" src="/images/myself-big.png" />
            </div>

            <div className="md:w-8/12 w-11/12 mx-auto flex-row space-y-7">
              <div className="space-y-3">
                <h1 className="md:text-6xl text-4xl font-bold text-blue-500">
                  Hello, I'm Taufik
                </h1>
                <p className="md:text-3xl text-2xl dark:text-white font-medium">
                  A Passionate Full Stack Web Developer based in Kediri,
                  Indonesia.
                </p>
              </div>
              <Button variant="glow">Download CV</Button>
            </div>
          </div>
        </Container>
      </div>

      <RoundBottom />

      <div id="about" className="md:mt-20 mt-10">
        <div className="space-y-10">
          <div className="flex">
            <Heading>About Me</Heading>
          </div>

          <Swiper
            slidesPerView={isMobile ? 1 : 2}
            initialSlide={1}
            spaceBetween={10}
            loop={true}
            navigation={true}
            centeredSlides={isMobile ? false : true}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card variant="slider">
                <CardHeader>My Hobbies</CardHeader>
                <p className="text-xl">
                  Sometimes I play basketball with my friends. I also make
                  posters for competitions and earn money from them.
                </p>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card variant="slider">
                <CardHeader>My Passion</CardHeader>
                <p className="md:text-xl">
                  I enjoy taking complex problems and turning them into some
                  code. I love learning some new tech stack on web development.
                </p>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card variant="slider">
                <CardHeader>My Achievements</CardHeader>
                <ul className="list-outside list-disc md:text-lg">
                  <li className="text-blue-500">
                    <p className="text-gray-800 dark:text-white">
                      Juara 1 Desain Grafis AKSIOMA tingkat Kota Kediri (2016)
                    </p>
                  </li>
                  <li className="text-blue-500">
                    <p className="text-gray-800 dark:text-white">
                      Juara 3 Blog Competition SC Radar Kediri (2018)
                    </p>
                  </li>
                  <li className="text-blue-500">
                    <p className="text-gray-800 dark:text-white">
                      Juara 1 Lomba Poster Mahasiswa Dies Natalis UNY (2021)
                    </p>
                  </li>
                </ul>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card variant="slider">
                <CardHeader>Education</CardHeader>
                <p className="md:text-xl">
                  I am currently studying at the University of Diponegoro in the
                  Bachelor of Computer Engineering study program (Semester 5)
                </p>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <BGRound>
        <Container className="space-y-14">
          <div id="techstack" className="flex md:mt-16 mt-8">
            <Heading>Tech Stack</Heading>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mx-auto">
            <CardPill link="https://reactjs.org/" className="border-blue-300">
              <CardPillBody image={`/images/reactjs.png`}>Reactjs</CardPillBody>
            </CardPill>

            <CardPill link="https://laravel.com/" className="border-red-500">
              <CardPillBody image={`/images/laravel.png`}>Laravel</CardPillBody>
            </CardPill>
            <CardPill
              link="https://getbootstrap.com/"
              className="border-purple-500"
            >
              <CardPillBody image={`/images/bootstrap.png`}>
                Bootstrap
              </CardPillBody>
            </CardPill>
            <CardPill
              link="https://tailwindcss.com/"
              className="border-green-400"
            >
              <CardPillBody image={`/images/tailwind.png`}>
                Tailwind
              </CardPillBody>
            </CardPill>
            <CardPill
              link="https://nextjs.org/"
              className="border-gray-800 dark:border-white"
            >
              <CardPillBody image={`/images/nextjs.png`}>Nextjs</CardPillBody>
            </CardPill>
            <CardPill
              link="https://www.mysql.com/"
              className="border-yellow-500"
            >
              <CardPillBody image={`/images/mysql.png`}>MySQL</CardPillBody>
            </CardPill>
          </div>
        </Container>
      </BGRound>

      <div className="bg-white dark:bg-dark1 md:pt-6 pt-3">
        <div id="project" className="flex md:mt-16 mt-8 h-64">
          <Heading>Personal Projects</Heading>
        </div>
      </div>

      <div className="md:-translate-y-40 -translate-y-48">
        <Container>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mx-auto">
            <Card variant="project">
              <CardHero image="bg-project1" />
              <CardBody>
                <CardHeader>Web Portfolio</CardHeader>
                <p className="text-lg">
                  A simple portfolio website made using{" "}
                  <span className="text-blue-500">Nextjs</span>.
                </p>
              </CardBody>
              <CardFooter>
                <Button variant="with-icon">
                  <FaGlobe className="mr-2" /> Demo
                </Button>
                <Button variant="with-icon">
                  <FaGithub className="mr-2" /> Github
                </Button>
              </CardFooter>
            </Card>

            <Card variant="project">
              <CardHero image="bg-project2" />
              <CardBody>
                <CardHeader>TeknikStalk</CardHeader>
                <p className="text-lg">
                  Sebuah projek web sederhana menggunakan{" "}
                  <span className="text-blue-500">Reactjs</span> yang
                  menampilkan data NIM dan foto mahasiswa yang didapatkan dari
                  siap.undip.ac.id
                </p>
              </CardBody>
              <CardFooter>
                <a
                  href="https://taufikisme-117c8.web.app/teknik-stalk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="with-icon">
                    <FaGlobe className="mr-2" /> Demo
                  </Button>
                </a>
                <a
                  href="https://github.com/taufikisme"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="with-icon">
                    <FaGithub className="mr-2" /> Github
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div id="contact" className="flex mb-10">
            <Heading>Let's Get in Touch!</Heading>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-4 mx-auto">
            <CardPill
              link="https://www.instagram.com/whois.taufik/"
              className="bg-white dark:bg-dark1"
            >
              <FaInstagram className="mr-3" /> Instagram
            </CardPill>
            <CardPill
              link="https://www.facebook.com/taufikisme.id"
              className="bg-white dark:bg-dark1"
            >
              <FaFacebook className="mr-3" /> Facebook
            </CardPill>
            <CardPill
              link="https://twitter.com/taufikisme_"
              className="bg-white dark:bg-dark1"
            >
              <FaTwitter className="mr-3" /> Twitter
            </CardPill>
            <CardPill
              link="https://github.com/taufikisme"
              className="bg-white dark:bg-dark1"
            >
              <FaGithub className="mr-3" /> Github
            </CardPill>
            <CardPill
              link="https://wa.me/6285648341874"
              className="bg-white dark:bg-dark1"
            >
              <FaWhatsapp className="mr-3" /> WhatsApp
            </CardPill>
            <CardPill
              link="https://t.me/taufikisme"
              className="bg-white dark:bg-dark1"
            >
              <FaTelegram className="mr-3" /> Telegram
            </CardPill>
          </div>
        </Container>
      </div>

      <Footer>Created with ☕ using Nextjs</Footer>
    </Layout>
  );
}
