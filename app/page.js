export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-yellow-400 to-blue-500">
      {/* Video Section */}
      <div className="w-full max-w-2xl mb-8">
        <video
          src="https://storage.googleapis.com/msgsndr/C6nqv5N0ZUkTMUIxNoYx/media/6638c58eb478503bf929064b.mp4"
          controls
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Form Section */}
      <form className="w-full max-w-lg p-8 rounded-lg shadow-lg bg-opacity-0 bg-transparent">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
          Register Now
        </h2>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Username */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/20 backdrop-blur-lg"
              placeholder="Username"
            />
          </div>

          {/* First Name */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/20 backdrop-blur-lg"
              placeholder="First Name"
            />
          </div>

          {/* Last Name */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/20 backdrop-blur-lg"
              placeholder="Last Name"
            />
          </div>

          {/* Email */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/20 backdrop-blur-lg"
              placeholder="Email"
            />
          </div>

          {/* Password */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/20 backdrop-blur-lg"
              placeholder="Password"
            />
          </div>

          {/* Confirmation Password */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/20 backdrop-blur-lg"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-900 text-white font-bold py-2 px-4 rounded-full"
        >
          Register Now
        </button>
      </form>
    </div>
  );
}
