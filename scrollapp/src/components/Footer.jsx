
import { FaDiscord, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    const date= new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-black text-white py-12 rounded-tl-[96px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
          <h2 className="text-2xl font-bold">codeSpace</h2>
          <p className="mt-4">
            Subscribe IslahTV YouTube channel to watch more videos on website
            development and press the bell icon to get immediate notification of
            the latest videos.
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
          <h2 className="text-xl font-bold">Home Town</h2>
          <address className="mt-4 not-italic">
            Hospital Road
            <br />
            Chakiya, Siwan
            <br />
            Bihar, PIN 841226, India
            <br />
            <a href="mailto:ayanraza197@gmail.com" className="underline">
              ayanraza@gmail.com
            </a>
            <br />
            +91 - 8651639500
          </address>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
          <h2 className="text-xl font-bold">Links</h2>
          <ul className="mt-4">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
          <h2 className="text-xl font-bold">Newsletter</h2>
          <form action="#" className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email id"
              className="p-2 rounded-l bg-gray-700 text-white border-none outline-none"
            />
            <button
              type="submit"
              className="p-2 bg-purple-900 hover:bg-pink-500 rounded-r"
            >
              →
            </button>
          </form>
          <div className="mt-4 flex items-center space-x-4">
            <a href="#">
              <FaGithub className="text-white w-8 h-8" />
            </a>
            <a href="#">
              <FaTwitter className="text-blue-500 w-8 h-8" />
            </a>
            <a href="#" >
              <FaWhatsapp className="text-green-700 w-8 h-8" />
            </a>
            <a href="#">
              <FaDiscord className="w-8 h-8"/>
            </a>
          </div>
        </div>
      </div>
      <hr className="mx-auto w-3/4" />
      <div className="mt-8 text-center text-gray-400">
        {`codeSpace © ${date} - All Rights Reserved`}
      </div>
    </footer>
  );
};

export default Footer;
