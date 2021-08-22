import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Navbrand from "../components/Navbrand";
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
import Fade from "react-reveal/Fade";
import { getAllPostsForHome } from "../lib/api";
import dayjs from "dayjs";
import "dayjs/locale/id";
dayjs.locale("id");

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
  FaCalendar,
  FaTag,
  FaArrowRight,
} from "react-icons/fa";
import Contact from "../components/Contact";
import ButtonMode from "../components/ButtonMode";

export default function Home({ posts }) {
  const latestPosts = [posts.nodes[0], posts.nodes[1]];

  return (
    <Layout>
      <Head>
        <title>Taufikisme</title>
        <meta name="description" content="Taufik's Web Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div
        style={{ width: `${progress}%` }}
        className="fixed z-50 h-[3px] bg-blue-500 shadow-blue-neon transition ease-in-out"
      ></div> */}
      <Navbar>
        <Navbrand img={`/images/myself-small.png`} name={`Taufikisme`} />
        <div className="flex flex-row space-x-5">
          <Navlink />
          <ButtonMode />
        </div>
      </Navbar>

      <div className="bg-white dark:bg-dark1 pt-20">
        <Container>
          <div className="md:flex md:flex-row-reverse items-center">
            <div className="md:w-4/12 w-8/12 mb-8 mx-auto">
              <Fade right>
                <img className="w-full" src="/images/myself-big.png" />
              </Fade>
            </div>

            <div className="md:w-8/12 w-11/12 mx-auto flex-row space-y-7">
              <Fade left>
                <div className="space-y-3 mb-6">
                  <h1 className="md:text-6xl text-4xl font-bold text-blue-500">
                    Hello, I&apos;m Taufik
                  </h1>
                  <p className="md:text-3xl text-2xl dark:text-white font-medium">
                    A Passionate Full Stack Web Developer based in Kediri,
                    Indonesia.
                  </p>
                </div>
              </Fade>

              <a
                href="https://drive.google.com/file/d/1rDJ1EH0_x4OtkpPaKE87ZKTNP3xGFIO1/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <Fade bottom>
                  <Button variant="glow">Download CV</Button>
                </Fade>
              </a>
            </div>
          </div>
        </Container>
      </div>

      <RoundBottom />

      <div id="about" className="md:mt-20 mt-10">
        <div className="space-y-10">
          <Fade bottom>
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
                    code. I love learning some new tech stack on web
                    development.
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
                    I am currently studying at the University of Diponegoro in
                    the Bachelor of Computer Engineering study program (Semester
                    5)
                  </p>
                </Card>
              </SwiperSlide>
            </Swiper>
          </Fade>
        </div>
      </div>

      <BGRound>
        <Container className="space-y-14">
          <Fade bottom>
            <div id="techstack" className="flex md:mt-16 mt-8">
              <Heading>Tech Stack</Heading>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mx-auto">
              <CardPill link="https://reactjs.org/" className="border-blue-300">
                <CardPillBody image={`/images/reactjs.png`}>
                  Reactjs
                </CardPillBody>
              </CardPill>

              <CardPill link="https://laravel.com/" className="border-red-500">
                <CardPillBody image={`/images/laravel.png`}>
                  Laravel
                </CardPillBody>
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
          </Fade>
        </Container>
      </BGRound>

      <div className="bg-white dark:bg-dark1 md:pt-6 pt-3">
        <Fade bottom>
          <div id="project" className="flex md:mt-16 mt-8 h-64">
            <Heading>Personal Projects</Heading>
          </div>
        </Fade>
      </div>

      <div className="bg-light2 dark:bg-dark2 rounded-t-4xl -mt-16">
        <div className="md:-translate-y-24 -translate-y-28">
          <Container>
            <Fade bottom>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mx-auto">
                <Card variant="project">
                  <CardHero image="bg-project1" />
                  <CardBody>
                    <CardHeader>Web Portfolio</CardHeader>
                    <p className="text-lg">
                      A simple portfolio website made using{" "}
                      <span className="text-blue-500">Nextjs</span> and{" "}
                      <span className="text-blue-500">Tailwind CSS</span>.
                    </p>
                  </CardBody>
                  <CardFooter>
                    <Button variant="with-icon">
                      <FaGlobe className="mr-2" /> Demo
                    </Button>
                    <a
                      href="https://github.com/taufikisme/nextjs-portfolio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="with-icon">
                        <FaGithub className="mr-2" /> Github
                      </Button>
                    </a>
                  </CardFooter>
                </Card>

                <Card variant="project">
                  <CardHero image="bg-project2" />
                  <CardBody>
                    <CardHeader>TeknikStalk</CardHeader>
                    <p className="text-lg">
                      Sebuah projek web sederhana menggunakan{" "}
                      <span className="text-blue-500">Reactjs</span> dan{" "}
                      <span className="text-blue-500">Bootstrap CSS</span> yang
                      menampilkan data NIM dan foto mahasiswa yang didapatkan
                      dari siap.undip.ac.id
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
            </Fade>
          </Container>
        </div>
      </div>

      <Container>
        <Fade bottom>
          <div id="blog" className="text-center mb-8">
            <Heading>Latest Posts</Heading>
          </div>
        </Fade>
        <div>
          <Fade bottom>
            {latestPosts.map((post, i) => (
              <Card key={i} variant="blog">
                <div className="md:flex h-full">
                  <div
                    className="md:w-4/12 bg-blue-500 md:h-full h-40 w-full bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${post.featuredImage.node.sourceUrl})`,
                    }}
                  ></div>
                  <div className="md:w-8/12 w-full px-5 py-8 space-y-3">
                    <Link href={`/blog/${post.slug}`}>
                      <a className="hover:text-blue-500 transition">
                        <h2 className="font-bold text-3xl">{post.title}</h2>
                      </a>
                    </Link>
                    <div className="flex space-x-5 text-sm text-gray-400">
                      <div className="flex space-x-2">
                        <FaCalendar />
                        <span>{dayjs(post.date).format("D MMMM YYYY")}</span>
                      </div>
                      <p className="flex space-x-2 capitalize">
                        <FaTag />
                        <span>{post.categories.nodes[0].name}</span>
                      </p>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.substring(0, 150) + "...",
                      }}
                    />
                    <Link href={`/blog/${post.slug}`}>
                      <a>
                        <Button className="px-3 py-1 mt-2">Read More</Button>
                      </a>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </Fade>
        </div>
        <Fade bottom>
          <div className="float-right dark:text-white">
            <Link href="/blog">
              <a>
                <Button className="flex items-center space-x-2 px-4 py-1">
                  <span>View More</span> <FaArrowRight />
                </Button>
              </a>
            </Link>
          </div>
        </Fade>
      </Container>

      <Fade bottom>
        <Contact />
      </Fade>

      <Footer>Created with ☕ using Nextjs</Footer>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsForHome();

  return {
    props: {
      posts: posts.data.posts,
    },
  };
}
