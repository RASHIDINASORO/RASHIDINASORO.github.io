import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faFacebookF, link: "https://www.facebook.com/share/1HM8oeNkTk/?mibextid=wwXIfr" },
  { icon: faDribbble, link: "https://dribbble.com/rashidhasani" },
  { icon: faInstagram, link: "https://www.instagram.com/rashidinasoro" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/rashidi-hasani-55191a287/" },
  { icon: faBehance, link: "https://www.behance.net/rashidinasoro" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-gray-400 hover:text-white hover:bg-white/10 p-2.5 sm:p-3 rounded-lg transition-all duration-300`}
      key={index}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-lg sm:text-xl`}
      />
    </a>
  ));
};

export default SocialMedia;
