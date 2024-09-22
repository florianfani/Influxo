import AboutImage from "../assets/decorations/SVG/chatbot1.svg"; // Adjust the path as necessary
import Project1 from "../assets/decorations/SVG/Projects1.svg";
import WorkTogether from "../components/WorkTogether";

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-10 px-3 md:px-[16%] bg-[#F0F5FF]">
        <div className="container flex flex-col justify-end md:flex-row items-center md:max-h-[45vh]">
          <div className="md:w-1/2 pr-10">
            <h2 className="md:text-4xl text-[36px] font-bold md:mb-4">
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
      <div className="flex flex-col w-full px-3 md:px-[16%] mt-10 justify-center items-center">
        <img
          src={Project1}
          alt="About Us"
          className="w-full h-[250px] mb-6 object-cover"
        />
        <div>
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
          <div className="md:flex justify-center gap-10 my-10 items-center">
            <img
              src={Project1}
              alt="Photo"
              className="w-full md:w-1/2 h-full object-cover mb-10 md:mb-0"
            />
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
      <WorkTogether />
    </div>
  );
};

export default About;
