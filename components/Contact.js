import Container from "./Container";
import Heading from "./Heading";
import CardPill from "./CardPill";

// react icons
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact({ className }) {
  const addClassName = className ? `${className}` : "";
  return (
    <div className={`pb-10 ${addClassName}`}>
      <Container>
        <div id="contact" className="flex mb-10">
          <Heading>Let&apos;s Get in Touch!</Heading>
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
            link="https://www.linkedin.com/in/moh-taufik-afandi-5255681a6/"
            className="bg-white dark:bg-dark1"
          >
            <FaLinkedin className="mr-3" /> Linkedin
          </CardPill>
        </div>
      </Container>
    </div>
  );
}
