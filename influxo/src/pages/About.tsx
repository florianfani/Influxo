import AboutImage from "../assets/decorations/SVG/chatbot1.svg"; // Adjust the path as necessary

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-10 px-[16%] bg-[#F0F5FF]">
        <div className="container flex flex-col justify-end md:flex-row items-center max-h-[45vh]">
          <div className="md:w-1/2 pr-10">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-md text-[#42526B]">
              We’re a web development company that builds custom, responsive
              websites focused on user experience and SEO. Our team delivers
              high-quality solutions tailored to your business, with ongoing
              support for lasting success.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end items-center">
            <img src={AboutImage} alt="About Us" className="w-76 h-auto mb-6" />
          </div>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row items-center mt-10">
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="w-3/4 h-3/4 bg-gray-200"></div>{" "}
          {/* Placeholder for image */}
        </div>
        <div className="md:w-1/2 pl-10">
          <p className="text-md text-[#42526B] mb-6">
            influxo is a dynamic web development and digital solutions company
            based in Ferizaj, Kosova. We specialize in creating tailored
            websites, apps, and eCommerce platforms that drive business growth
            and digital transformation. With a team of skilled developers,
            designers, and strategists, we combine creativity and technology to
            deliver high-quality, user-friendly solutions that meet the unique
            needs of each client.
          </p>
          <p className="text-md text-[#42526B] mb-6">
            At Influxo, we are committed to providing innovative web development
            services that not only look great but also perform exceptionally
            well. From responsive designs to SEO optimization, we focus on
            delivering results that help businesses enhance their online
            presence and reach their full potential. We collaborate closely with
            our clients to understand their goals, ensuring that each project is
            crafted with precision and care.
          </p>
          <p className="text-md text-[#42526B] mb-6">
            As a trusted partner in the digital space, we also offer ongoing
            support and maintenance to keep your website running smoothly and
            securely. Whether you’re a small startup or an established brand,
            Influxo is here to help you succeed in the ever-evolving digital
            landscape.
          </p>
        </div>
      </div>

      <div className="container flex flex-col md:flex-row items-center mt-10">
        <div className="md:w-1/2 pl-10">
          <p className="text-md text-[#42526B] mb-6">
            influxo is a dynamic web development and digital solutions company
            based in Ferizaj, Kosova. We specialize in creating tailored
            websites, apps, and eCommerce platforms that drive business growth
            and digital transformation. With a team of skilled developers,
            designers, and strategists, we combine creativity and technology to
            deliver high-quality, user-friendly solutions that meet the unique
            needs of each client.
          </p>
          <p className="text-md text-[#42526B] mb-6">
            At Influxo, we are committed to providing innovative web development
            services that not only look great but also perform exceptionally
            well. From responsive designs to SEO optimization, we focus on
            delivering results that help businesses enhance their online
            presence and reach their full potential. We collaborate closely with
            our clients to understand their goals, ensuring that each project is
            crafted with precision and care.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="w-3/4 h-3/4 bg-gray-200"></div>{" "}
          {/* Placeholder for image */}
        </div>
      </div>
    </div>
  );
};

export default About;
