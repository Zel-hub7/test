import Link from "next/link";
import Navbar from "../components/navBar";

export default function IntroPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    
      <Navbar />

      {/* Logo Section */}
      <div className="mb-9 mt-0 text-center">
        <img
          src="https://rippleeffectfree.com/wp-content/uploads/2024/04/logo-bg-remove-extra.png"
          alt="Logo"
          className="w-24 h-auto mx-auto mb-5"
        />
        <h2 className="text-white text-3xl font-semibold">Step 1</h2>
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
        Once You have watched the video above click the button below
      </p>

      {/* Next Button */}
      <Link href="/step2">
        <button className="w-[150%] bg-gradient-to-r from-blue-900 via-blue-400 via-gray-600 to-gray-900 text-white font-bold py-2 px-4 rounded-full hover:scale-105 transform transition-all">
          Next
        </button>
      </Link>
    </div>
  );
}
