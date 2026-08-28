import logo from "/images/logo.png";

const quickLinks = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Portfolio", url: "portfolio" },
  { id: 4, name: "Contact", url: "contact" },
];

const services = [
  { id: 1, name: "User Experience (UX)" },
  { id: 2, name: "User Interface (UI)" },
  { id: 3, name: "Web Development" },
  { id: 4, name: "Mobile App Development" },
];

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#introduction" className="flex items-center border-0 mb-4">
              <img src={logo} className="h-10 rounded-xl" alt="logo" />
              <p className="text-2xl font-semibold text-white ms-3">
                Rashidi Hasani
              </p>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Crafting digital experiences through clean code and thoughtful
              design. Specialized in building modern web and mobile
              applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.url.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.id}>
                  <span className="text-gray-400 text-sm">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">
                <span className="block text-white font-medium mb-1">
                  Location
                </span>
                Dar es Salaam, Tanzania
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block text-white font-medium mb-1">Email</span>
                <a
                  href="mailto:rashidinasoro@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  rashidinasoro@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Copyright &copy; {copyrightYear} Rashidi Hasani. All rights
              reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Developed with love by{" "}
              <a
                href="https://rashidinasoro.github.io/"
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rashidi Hasani
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
