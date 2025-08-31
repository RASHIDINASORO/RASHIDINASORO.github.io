import Marquee from "react-fast-marquee";

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
    src: "https://z-p3-scontent.fdar1-1.fna.fbcdn.net/v/t39.30808-6/486804951_122104998200813312_2949687168240479922_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGJPUKOYsVAIvQWYvvDxErLUpm8zY4l1tJSmbzNjiXW0vSsgrNchdLDMqdljxyX4wk10UFFwIXhsl6kyS6RSIJB&_nc_ohc=CrmV-TsoAQYQ7kNvwFlnfb2&_nc_oc=AdnKdhDplu2WtHcZYv2IRPkExD7XMj1fQ62yaaokH8e0BW3Pf7Se_yiGIYzmuA1ML3A&_nc_zt=23&_nc_ht=z-p3-scontent.fdar1-1.fna&_nc_gid=wdlrypKPGs4ZmiHKsuwYbA&oh=00_AfUVKKlADhVa7ABu4puJRr81IAZkke_xmVD_b7joiJKx7A&oe=68BA36EB",
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