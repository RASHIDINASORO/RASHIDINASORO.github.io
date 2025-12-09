import Marquee from "react-fast-marquee";
import utaanisec from "../../assets/images/utaanisec.jpg";

const brandLogos = [
  {
    src: "https://www.bakita.go.tz/site/images/bakita.png",
    alt: "BAKITA Logo",
  },
  {
    src: "https://udicti.udsm.ac.tz/udicti_logo.svg",
    alt: "FINHUB Logo",
  },
  {
    src: "https://th.bing.com/th/id/OIP.BS4k3162DAbBt58T-kIXLwHaDW?w=323&h=158&c=7&r=0&o=7&pid=1.7&rm=3",
    alt: "CRDB Logo",
  },
  {
    src: "https://i.imgur.com/bsJsPON.jpeg",
    alt: "Utaani Secondary School Logo",
  },
  {
    src: "https://youthteamup.org/wp-content/uploads/2024/06/YTU_logo-removebg-preview-100x100.png",
    alt: "Youthteam Up Logo",
  },
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Happy Clients</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I had the pleasure of working with a diverse range of companies, from
          startups to established brands.
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={100} className="">
        <p className="flex items-center pt-4 md:pt-10">
          {brandLogos.map((logo, index) => (
            <span
              className="ps-5 sm:ps-10 md:ps-20 flex flex-col items-center justify-center text-center"
              key={index}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 w-auto object-contain max-w-full"
              />
              <p className="mt-2 text-xs sm:text-sm font-semibold">
                {logo.alt.replace(" Logo", "")}
              </p>
            </span>
          ))}
        </p>
      </Marquee>
    </div>
  );
};

export default HappyClients;