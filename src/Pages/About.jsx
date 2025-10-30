import React from "react";
import SectionCard from "../Components/About/SectionCard";
import Banner from "../Components/Home/Banner";
const About = () => {
  let logos = [
    "/src/BannerImages/FastTrack.webp",
    "/src/BannerImages/Fabman.webp",
    "/src/BannerImages/SadafDesign.webp",
    "/src/BannerImages/SanableDigi.webp",
    "/src/BannerImages/SanableStudio.webp",
    "/src/BannerImages/SMS.webp",
    "/src/BannerImages/Wizcraft.webp",
  ];

  let allogos = [...logos, ...logos];
  return (
    <div className="w-full flex flex-col ">
      <SectionCard
        para="We embarked on our journey in 2005 as Simple Media Solutions, a small team of less than five people starting in a humble Al Quoz warehouse. Our initial focus was on media and display stands, but after a couple of years, we took the plunge into the world of large format printers and eco-solvent inks. We take immense pride in being pioneers in this field within our region, setting a benchmark for others to follow."
        heading="Simple Media Solutions FZ LLC"
        image="/src/AboutPageImages/origin.svg"
      ></SectionCard>
      <SectionCard
        para="Before launching any product or technology, we invest heavily in research and development. Our products undergo rigorous trials, thorough discussions, and continuous refinement. We firmly believe that the devil truly lies in the details, and there's always room for improvement. This unwavering dedication to quality, fueled by the hard work of our team, has been the cornerstone of our achievements."
        image="/src/AboutPageImages/discussion.svg"
        order={true}
      ></SectionCard>
      <SectionCard
        para="From our humble beginnings in Dubai, we've expanded our operations across India, Oman, KSA, Bangalore, and Mumbai. Over two decades of this journey, we've made mistakes, learned from them, and grown as a company. We extend our heartfelt gratitude to all our clients who have been instrumental in our growth. We are committed to continuously improving and delivering even better service in the future."
        image="/src/AboutPageImages/growth.svg"
      ></SectionCard>
      <div className="w-full text-5xl my-8 text-center font-semibold">Our Companies</div>
      <Banner>
        {allogos.map((src, i) => (
          <img key={i} src={src} alt="brand" className="h-24 w-auto " />
        ))}
      </Banner>
    </div>
  );
};

export default About;
