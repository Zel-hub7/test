import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Step2() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      {/* Logo Section */}
      <div className="mb-4 mt-7 text-center">
        <img
          src="https://rippleeffectfree.com/wp-content/uploads/2024/04/logo-bg-remove-extra.png"
          alt="Logo"
          className="w-24 h-auto mx-auto mb-2"
        />
        <h2 className="text-white text-3xl font-semibold">Welcome to Step 2</h2>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-4xl mb-8">
        <iframe
          src="https://drive.google.com/file/d/1Ouu2NLB1CLcw52GlbBQKqet0YTCyN5aB/preview"
          width="100%"
          height="500px"
          allowfullscreen
          className="w-full h-auto rounded-lg border-[3px] border-[#F6AD55] shadow-[0_0_15px_rgba(255,215,0,0.8)] hover:shadow-[0_0_30px_rgba(255,215,0,1)] transition-transform transform hover:scale-105 duration-300 ease-in-out"
          style={{ aspectRatio: "16/9", border: "none" }}
          loading="lazy"
        ></iframe>
      </div>

      {/* Description Section */}
      <p className="text-lg text-white text-center max-w-2xl mb-8">
        Once You have <span className="text-[#EB965F]">watched the video </span> above click the button below to book
        your call
      </p>

      <div className="w-full flex max-w-4xl justify-between mt-4 px-4">
        <Link href="/Intro">
        <button className="bg-gradient-to-r from-blue-500 to-gray-900 text-white font-bold py-2 px-4 rounded-full hover:scale-105 transform transition-all">
          &lt; Back
        </button>
        </Link>
      <Link href = "/booking">
        <button className="bg-gradient-to-r from-blue-500 to-gray-900 text-white font-bold py-2 px-4 rounded-full hover:scale-105 transform transition-all flex items-center space-x-1">
          Book your Call{" "}
          <FontAwesomeIcon icon={faPhoneFlip} className="w-4  h-4" />
        </button>
      </Link>
        <button className="bg-gradient-to-r from-blue-500 to-gray-900 text-white font-bold py-2 px-4 rounded-full hover:scale-105 transform transition-all">
          Next &gt;
        </button>
      </div>
    </div>
  );
}
