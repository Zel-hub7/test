export default function IntroPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Navigation Links */}
        <nav className="absolute right-4 top-4">
          <ul className="flex space-x-4">
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
        <div className="mb-4 mt-7 text-center">
          <img
            src="https://rippleeffectfree.com/wp-content/uploads/2024/04/logo-bg-remove-extra.png"
            alt="Logo"
            className="w-24 h-auto mx-auto mb-2"
          />
          <h2 className="text-white text-3xl font-semibold">
            Welcome to the Intro Page
          </h2>
        </div>
  
        {/* Video Section */}
        <div className="w-full max-w-4xl mb-8">
          <video
            src="https://storage.googleapis.com/msgsndr/C6nqv5N0ZUkTMUIxNoYx/media/6638c58eb478503bf929064b.mp4"
            controls
            className="w-full h-auto rounded-lg shadow-lg mx-auto"
          />
        </div>
  
        {/* Description Section */}
        <p className="text-lg text-white text-center max-w-2xl mb-8">
          Discover more about our platform and how it can help you grow your skills and achieve your goals.
          We're committed to providing the best learning experience.
        </p>
  
        {/* Navigation Link */}
        <a href="/" className="text-blue-200 underline hover:text-blue-300">
          Go back to Home Page
        </a>
      </div>
    );
  }
  