import { Outlet, Link } from "react-router";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-16 py-6">

        {/* Logo */}
        <div>
          <h1 className="text-5xl font-bold">
            <span className="text-orange-500">W</span>el
            <span className="font-light">come</span>
          </h1>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-12 text-xl font-medium">

          <Link
            to="/"
            className="hover:text-orange-500 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-orange-500 transition"
          >
            About Me
          </Link>

          <Link
            to="/projects"
            className="hover:text-orange-500 transition"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="hover:text-orange-500 transition"
          >
            Contacts
          </Link>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-6">

          <button className="text-xl font-medium hover:text-orange-500 transition">
            Log in
          </button>

          <button className="bg-orange-500 text-white px-8 py-4 rounded-2xl text-xl font-medium hover:bg-orange-600 transition">
            Sign up
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>
      {/* Footer */}
<footer className="bg-[#f5f5f5] px-16 py-14 mt-20">

  {/* Top Section */}
  <div className="flex items-center justify-between flex-wrap gap-8">

    {/* Logo */}
    <div>
      <h1 className="text-4xl font-bold text-black">
        <span className="text-orange-500">P</span>labon
        <span className="font-light">Ahmed</span>
      </h1>
    </div>

    {/* Copyright */}
    <p className="text-[#2d2470] text-lg">
      © 2020 Plabon Ahmed. All rights reserved.
    </p>

    {/* Footer Menu */}
    <div className="flex items-center gap-10 text-[#2d2470] text-lg font-medium">

      <Link to="/" className="hover:text-orange-500 transition">
        Portfolio
      </Link>

      <Link to="/about" className="hover:text-orange-500 transition">
       About Me
      </Link>

      <Link to="/projects" className="hover:text-orange-500 transition">
        Projects
      </Link>

      <Link to="/contact" className="hover:text-orange-500 transition">
        Contact
      </Link>

      <button className="hover:text-orange-500 transition">
        Dawnload CV
      </button>
    </div>
  </div>

  {/* Divider */}
  <div className="border-t border-gray-300 my-10"></div>

  {/* Bottom Text */}
  <p className="text-gray-400 text-xl leading-9 max-w-5xl">
    Startup Framework contains components and complex blocks
    which can easily be integrated into almost any design.
  </p>
</footer>

    </div>
  );
}