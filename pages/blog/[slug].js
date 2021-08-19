import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Navbrand from "../../components/Navbrand";
import { FaCalendar, FaTag } from "react-icons/fa";
import Container from "../../components/Container";
import LayoutPost from "../../components/LayoutPost";
import Footer from "../../components/Footer";
import NavlinkBlog from "../../components/NavLinkBlog";
import dayjs from "dayjs";
import "dayjs/locale/id";
import Contact from "../../components/Contact";
import ButtonMode from "../../components/ButtonMode";
import { getAllPostWithSlug, getSinglePost } from "../../lib/api";
dayjs.locale("id");

export default function Blog(data) {
  const post = data.post;

  const handleScroll = () => {
    const mynavbar = document.getElementById("brandName");

    if (scrollY > 100) {
      mynavbar.innerHTML = post.title;
      mynavbar.classList.remove("text-2xl");
      mynavbar.classList.add("md:text-2xl");
    } else {
      mynavbar.innerHTML = "Taufikisme";
      mynavbar.classList.add("text-2xl");
      mynavbar.classList.remove("md:text-2xl");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <LayoutPost>
      <Head>
        <title>{post.title} | Taufikisme Blog</title>
        <meta name="title" content={post.title}></meta>
        <meta
          name="description"
          content={post.excerpt.replace(/(<([^>]+)>)/gi, "")}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://taufikisme.vercel.app/blog/${post.slug}`}
        />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={post.excerpt.replace(/(<([^>]+)>)/gi, "")}
        />
        <meta
          property="og:image"
          content={post.featuredImage.node.sourceUrl}
        ></meta>
        <meta property="twitter:card" content={post.title} />
        <meta
          property="twitter:url"
          content={`https://taufikisme.vercel.app/blog/${post.slug}`}
        />
        <meta property="twitter:title" content={post.title} />
        <meta
          property="twitter:description"
          content={post.excerpt.replace(/(<([^>]+)>)/gi, "")}
        />
        <meta
          property="twitter:image"
          content={post.featuredImage.node.sourceUrl}
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
        <Navbrand img={`/images/myself-small.png`} name={`Taufikisme`} />
        <div className="flex flex-row space-x-5">
          <NavlinkBlog />
          <ButtonMode />
        </div>
      </Navbar>
      <Container>
        <div className="pt-28 space-y-6 mb-5 dark:text-white">
          <div className="space-y-3">
            <h1 className="md:text-5xl text-4xl font-bold">{post.title}</h1>
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
          </div>
          <img
            src={post.featuredImage.node.sourceUrl}
            className="w-full rounded-2xl"
          />
          <div
            className="space-y-6 text-justify"
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
        </div>
      </Container>
      <Contact className="mt-5 pt-8 bg-light2 dark:bg-dark2" />
      <Footer className="border-t dark:border-none">
        Created with ☕ using Nextjs
      </Footer>
    </LayoutPost>
  );
}

export async function getStaticProps(context) {
  const post = await getSinglePost(context);
  return {
    props: {
      post: post.data.post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPostWithSlug();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}
