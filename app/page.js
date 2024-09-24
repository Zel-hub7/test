export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-yellow-400 to-blue-500">
      {/* Logo Section */}
      <div className="mb-4 mt-7 text-center">
        <img
          src="https://rippleeffectfree.com/wp-content/uploads/2024/04/logo-bg-remove-extra.png"
          alt="Logo"
          className="w-24 h-auto mx-auto mb-2"  // Adjusted logo size
        />
        <h2 className="text-white text-3xl font-semibold">Create your FREE account NOW!!</h2>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-2xl mb-8">
        <video
          src="https://storage.googleapis.com/msgsndr/C6nqv5N0ZUkTMUIxNoYx/media/6638c58eb478503bf929064b.mp4"
          controls
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Form Section */}
      <form className="w-full max-w-lg p-8 rounded-lg bg-opacity-0 bg-transparent">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
          Register Now
        </h2>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Username */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white text-sm font-bold mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="appearance-none bg-transparent border-b border-white w-full py-1 leading-tight focus:outline-none"
            />
          </div>

          {/* First Name */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white text-sm font-bold mb-1" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="appearance-none bg-transparent border-b border-white w-full py-1 leading-tight focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white text-sm font-bold mb-1" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="appearance-none bg-transparent border-b border-white w-full py-1 leading-tight focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white text-sm font-bold mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="appearance-none bg-transparent border-b border-white w-full py-1 leading-tight focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white text-sm font-bold mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="appearance-none bg-transparent border-b border-white w-full py-1 leading-tight focus:outline-none"
            />
          </div>

          {/* Confirmation Password */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white text-sm font-bold mb-1" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="appearance-none bg-transparent border-b border-white w-full py-1 leading-tight focus:outline-none"
            />
          </div>
        </div>

        {/* Register Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-2/3 bg-gradient-to-r from-blue-500 via-blue-300 via-blue-500 to-black text-white font-bold py-2 px-4 rounded-full hover:scale-105 transform transition-all"
          >
            Register Now
          </button>
        </div>
      </form>
    </div>
  );
}
