import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

import DesktopNav from "./navigation/DesktopNav";
import MobileNav from "./navigation/MobileNav";
import HamburgerBtn from "./navigation/HamburgerBtn";
import SocialLink from "./SocialLink";
import { TwitterIcon, LinkedinIcon, GithubIcon } from "./Icons";

// Navigation Links list of: [href, linkText]
const navLinks = [
  ["/work", "work"],
  ["/", "words"],
  ["/about", "about"],
];

function Layout({ children, pageTitle }) {
  // mobile nav state
  const [isOpen, setIsOpen] = useState(false);
  const clickFunc = () => {
    setIsOpen(!isOpen);
  };
  //  ---------------

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-400">
        <header className="w-full h-20 mt-8  flex  justify-center items-end bg-gray-900 ">
          <nav className=" w-11/12 md:w-full max-w-2xl flex flex-row justify-between items-stretch">
            <Link href="/">
              <div className="text-5xl z-50 text-primary cursor-pointer">
                SB
              </div>
            </Link>
            <HamburgerBtn isOpen={isOpen} clickFunc={() => clickFunc()} />
            <DesktopNav navLinks={navLinks} />
            <MobileNav isOpen={isOpen} navLinks={navLinks} />
          </nav>
        </header>
        <main className="w-11/12 md:w-full max-w-2xl mx-auto my-8 flex-grow bg-gray-900 font-sans">
          {children}
        </main>
        <footer className="flex flex-col items-center w-full  border-t border-primary text-cream">
          <div className="w-11/12 md:w-full max-w-3xl m-auto flex flex-col items-center justify-center ">
            <i className="my-4">
              "Keep an open mind, but not so open that your brain falls out."
            </i>
            <div className="flex justify-center items-center my-4">
              <SocialLink
                Icon={GithubIcon}
                text="/boothscript"
                href="https://github.com/boothscript"
              />
              <SocialLink
                Icon={LinkedinIcon}
                text="/stephenboothdev"
                href="https://www.linkedin.com/in/stephen-booth-767638193"
              />
              <SocialLink
                Icon={TwitterIcon}
                text="/stephenboothdev"
                href="https://www.linkedin.com/in/stephen-booth-767638193"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
