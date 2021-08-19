import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Navbrand from "../../components/Navbrand";
import Container from "../../components/Container";
// react icons
import { FaCalendar, FaTag } from "react-icons/fa";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import dayjs from "dayjs";
import "dayjs/locale/id";
import NavlinkBlog from "../../components/NavLinkBlog";
import Contact from "../../components/Contact";
import ButtonMode from "../../components/ButtonMode";
import Button from "../../components/Button";
dayjs.locale("id");

export default function BlogIndex({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Taufikisme | Blog</title>
        <meta
          name="description"
          content="Sebuah blog yang membahas segala persepsi saya khususnya terkait dunia web development dan teknologi lainnya"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
        <Navbrand img={`/images/myself-small.png`} name={`Taufikisme`} />
        <div className="flex flex-row space-x-5">
          <NavlinkBlog />
          <ButtonMode />
        </div>
      </Navbar>
      <div className="pt-28">
        <Container>
          {posts.nodes.map((post, i) => (
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
        </Container>
      </div>
      <Contact />
      <Footer>Created with ☕ using Nextjs</Footer>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://wp-api.kediridev.com/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query HomePagesQuery {
        posts {
          nodes {
            slug
            title
            date
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
      `,
    }),
  });

  const json = await res.json();

  return {
    props: {
      posts: json.data.posts,
    },
  };
}
