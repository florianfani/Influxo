import AboutImage from "../assets/decorations/SVG/chatbot1.svg"; // Adjust the path as necessary

import WorkTogether from "../components/WorkTogether";
import TeamMembers from "../components/TeamMembers.tsx";

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-10 px-[8%] xl:px-[16%] bg-[#F0F5FF]">
        <div className="container flex flex-col justify-end md:flex-row items-center md:max-h-[45vh]">
          <div className="md:w-1/2 lg:pr-10">
            <h2 className="md:text-4xl text text-[36px] font-bold md:mb-4">
              About Us
            </h2>
            <p className="md:text-md text-[16px] text-[#42526B]">
              We’re a web development company that builds custom, responsive
              websites focused on user experience and SEO. Our team delivers
              high-quality solutions tailored to your business, with ongoing
              support for lasting success.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end items-center">
            <img
              src={AboutImage}
              alt="About Us"
              className="w-76 h-auto md:mb-6"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-[8%] xl:px-[16%] mt-10 justify-center items-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">Who We Are</h1>
          <p className="text-md text-[#42526B]">
            influxo is a dynamic web development and digital solutions company
            based in Ferizaj, Kosova. We specialize in creating tailored
            websites, apps, and eCommerce platforms that drive business growth
            and digital transformation. With a team of skilled developers,
            designers, and strategists, we combine creativity and technology to
            deliver high-quality, user-friendly solutions that meet the unique
            needs of each client. At Influxo, we are committed to providing
            innovative web development services that not only look great but
            also perform exceptionally well. From responsive designs to SEO
            optimization, we focus on delivering results that help businesses
            enhance their online presence and reach their full potential. We
            collaborate closely with our clients to understand their goals,
            ensuring that each project is crafted with precision and care. As a
            trusted partner in the digital space, we also offer ongoing support
            and maintenance to keep your website running smoothly and securely.
            Whether you’re a small startup or an established brand, Influxo is
            here to help you succeed in the ever-evolving digital landscape.
          </p>

          <div className="md:flex md:flex-col justify-center  my-10 ">
            <h1 className="text-2xl font-bold mb-2">Our Mission</h1>
            <p>
              Our mission is to provide innovative web development services that
              drive business growth and digital transformation. We focus on
              delivering results that help businesses enhance their online
              presence and reach their full potential. Our mission is to provide
              innovative web development services that drive business growth and
              digital transformation. We focus on delivering results that help
              businesses enhance their online presence and reach their full
              potential.
            </p>
          </div>
        </div>
      </div>
      <TeamMembers />
      <WorkTogether />
    </div>
  );
};

export default About;
