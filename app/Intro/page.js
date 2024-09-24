export default function IntroPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <nav className="absolute right-4 top-4">
        <ul className="flex mt-6 space-x-4">
          <li>
            <a href="#" className="text-white hover:text-blue-200">
              Step 1
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-200">
              Step 2
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-200">
              Step 3
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-200">
              Trainings
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-200">
              Funnels
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-200">
              Members
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-200">
              Leaderboard
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-200">
              Account
            </a>
          </li>
        </ul>
      </nav>

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
            style={{ aspectRatio: '16/9', border: 'none' }} 
            loading="lazy"
        ></iframe>
      </div>

      {/* Description Section */}
      <p className="text-lg text-white text-center max-w-2xl mb-8">
        Once You have watched the video above click the button below
      </p>
      <button className="w-[10%] bg-gradient-to-r from-blue-900 via-blue-400 via-gray-600 to-gray-900 text-white font-bold py-2 px-4 rounded-full hover:scale-105 transform transition-all">
        Next
      </button>
    </div>
  );
}
