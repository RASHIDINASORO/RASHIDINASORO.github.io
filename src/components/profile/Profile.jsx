import udsm from "../../assets/images/udsm.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 bg-white object-fill overflow-hidden rounded-xl">
            <img
              className="bg-white h-[100%] object-contain border-4 border-white rounded-xl hover:scale-105 transition-transform duration-300"
              src={udsm}
              alt=""
            />
          </div>
         
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Educational Journey
          </h3>
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full opacity-20"></div>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">
                  University of Dar es Salaam
                </h4>
                <p className="text-lg text-blue-600 mb-2">BSc in Computer Science</p>
                <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                  2022 - 2025
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="#portfolio"
            >
              My Projects
            </a>
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary  ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
              href="/cv.pdf"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
