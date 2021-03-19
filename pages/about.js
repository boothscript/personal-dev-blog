import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <Layout pageTitle={"Stephen Booth - About"}>
      <div className="w-full pt-12">
        <article className="prose prose-lg lg:prose-xl max-w-none text-cream flex flex-col">
          <div className="flex justify-center my-10">
            <Image
              id="profileImage"
              alt="Headshot of Stephen Booth"
              src="/img/headshot.png"
              width={300}
              height={300}
              className="rounded-full mx-w-md "
            ></Image>
          </div>
          <h1 className="text-center">
            Hi Im Steve, a web focused developer from the UK.
          </h1>

          <h3>Why Tech?</h3>
          <p>
            Technology has always been a big part of my life. It fascinates me
            and I find the promise of the future and its advancements incredibly
            exciting. Looking back I've dabbled with code throughout my life,
            from BASIC to iOS. For the first part of my life, music became my
            career focus and coding was a hobby that had to take a back seat.
            When choosing what to do after my music career it's seemed natural
            to choose a career in technology.
          </p>
          <p>
            I have been self teaching for 18 months but have struggled to gain
            confidence and finish personal projects. I have taken the
            opportunity to join Code Nation on their 12 week bootcamp to work on
            my project management skills as well as to work in a team
            development environment.
          </p>
          <h3>Sounds Cool, So What Can You Do?</h3>
          <p>
            Describe what coding you've done up to now. Include which
            programming languages you have used and what projects you have been
            working on. Since deciding to switch focus to a career in
            technology, I started out learning python with a view to analysing
            data. I learnt web scraping techniques as well as using libraries
            such as pandas and matplotlib.
          </p>
          <p>
            As I started to build applications with flask, I realised that I
            wanted more interactivity on the front end of projects and started
            to focus on front end design, learning javascript and react. I have
            some experience with linux, docker and github actions too. Feel free
            to checkout my <Link href="work/">projects</Link> or my{" "}
            <a href="https://github.com/boothscript">github</a>.
          </p>
          <h3>Nice. But what makes you so special?</h3>
          <p>
            Achieving my goals in my past music career was not easy. I made a
            lot of sacrifices and often faced times where it was easy to give
            up. I believe these experiences have taught me how to be resilient,
            something I have used a lot so far in my self taught journey. I feel
            my maturity, resilience and ability to work and learn independently
            will help me hit the ground running in my first developer role
            whilst my enthusiasm and optimism would be a plus to any team.
          </p>
          <p>
            I enjoy having adventures in the great outdoors, cooking, and have a
            passion for critical thinking and music.
          </p>
          <p>
            As my developer journey continues I have found a lot of fulfillment
            in being able to conceptualize a problem and use my skills to craft
            a solution. As my understanding increases, new horizons appear and
            other avenues open to explore and challenge. The idea of an ever
            changing landscape excites me and I look forward to seeing where it
            takes me In the future.
          </p>
          <p>
            Get in touch at{" "}
            <a href="mailto:stephenboothdev@gmail.com">
              stephenboothdev@gmail.com
            </a>
          </p>
        </article>
      </div>
    </Layout>
  );
};

export default About;
