export default function HeroSection() {
  return (
    <section>
    <section className="bg-[#f5f5f5] min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-[55px] lg:text-[76px] font-bold leading-[1.05] text-[#0B1B3B] mb-8">
            We boost <br />
            growth for your <br />
            startup business
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-lg mb-10">
            Our goal is top at the heart of creativity services
            industry as a digital creator. It has a great impact
            on business growth.
          </p>
          <div className="flex items-center gap-8">

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition">
              Get Started
            </button>

            <button className="flex items-center gap-4 group">

              <div className="relative flex items-center justify-center">

                <div className="absolute w-14 h-14 border-[4px] border-orange-500 border-l-transparent rounded-full rotate-45"></div>

                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[10px] border-l-gray-700 border-y-[7px] border-y-transparent ml-1"></div>
                </div>

              </div>

              <span className="font-semibold text-[#0B1B3B] group-hover:text-orange-500">
                Learn More
              </span>

            </button>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center items-center h-[700px]">

          {/* Outer Border Circle */}
          <div className="absolute w-[620px] h-[620px] rounded-full border border-gray-300"></div>

          {/* Main White Circle */}
          <div className="absolute w-[520px] h-[520px] rounded-full bg-black shadow-2xl"></div>

          {/* Image Fixed Inside Circle */}
          <div className="relative z-10 w-[520px] h-[520px] rounded-full overflow-hidden flex justify-center items-end">

            <img
              src="/pictures/picture.png"
              alt="Business"
              className="h-full object-contain justify-around"
            />

          </div>

          {/* Top Card */}
<div className="absolute top-16 left-4 z-20 bg-white/1 backdrop-blur-md rounded-2xl shadow-xl px-5 py-4 flex items-center gap-4">

  <div className="w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center text-white text-xl">
    ↗
  </div>

  <div>
    <h3 className="font-bold text-sm text-gray-900">
      100% Business Growth
    </h3>

    <p className="text-xs text-gray-700">
      ⭐ 4.9 (1520 Reviews)
    </p>
  </div>

</div>

{/* Bottom Card */}
<div className="absolute bottom-16 left-6 z-20 bg-white/1 backdrop-blur-md rounded-2xl shadow-xl px-6 py-4">

  <h3 className="font-bold text-sm text-gray-900">
    1000,000 Happy Clients
  </h3>

  <p className="text-xs text-gray-700 mt-1">
    ⭐ 4.9 (15k Reviews)
  </p>

</div>

          {/* Floating Icons */}
          <div className="absolute left-20 top-72 text-5xl">
            💡
          </div>

          <div className="absolute left-40 top-52 text-3xl text-gray-500 rotate-12">
            ↗
          </div>

          <div className="absolute left-24 top-96 text-3xl text-gray-500 -rotate-12">
            ↘
          </div>

          <div className="absolute left-56 top-64 text-2xl text-gray-500">
            ↔
          </div>

        </div>

      </div>
    </section>
  <section className="bg-[#f5f5f5] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[8px] text-gray-500 text-xs mb-3">
            Service
          </p>

          <h2 className="text-[55px] font-bold text-[#0B1B3B]">
            Our Vison & Our Goal
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white rounded-[30px] px-10 py-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-3 transition duration-300">

            <div className="w-20 h-20 mx-auto bg-black rounded-2xl flex items-center justify-center text-white text-5xl mb-8">
              📈
            </div>

            <h3 className="text-[38px] font-bold text-black mb-6">
              Graphic Design
            </h3>

            <p className="text-gray-600 leading-9 mb-10">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Quisque dui mi, bibendum eu erat
              id, ultricies semper metus. Nunc
              dapibus laoreet dolor nec
              imperdiet.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition">
              Learn More
            </button>

          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[30px] px-10 py-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-3 transition duration-300">

            <div className="w-20 h-20 mx-auto bg-black rounded-2xl flex items-center justify-center text-white text-5xl mb-8">
              🎥
            </div>

            <h3 className="text-[38px] font-bold text-black mb-6">
              Video Editing
            </h3>

            <p className="text-gray-600 leading-9 mb-10">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Quisque dui mi, bibendum eu erat
              id, ultricies semper metus. Nunc
              dapibus laoreet dolor nec
              imperdiet.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition">
              Learn More
            </button>

          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[30px] px-10 py-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-3 transition duration-300">

            <div className="w-20 h-20 mx-auto bg-black rounded-2xl flex items-center justify-center text-white text-5xl mb-8">
              📊
            </div>

            <h3 className="text-[38px] font-bold text-black mb-6">
              Digital Marketing
            </h3>

            <p className="text-gray-600 leading-9 mb-10">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Quisque dui mi, bibendum eu erat
              id, ultricies semper metus. Nunc
              dapibus laoreet dolor nec
              imperdiet.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition">
              Learn More
            </button>

          </div>

        </div>
        {/* Left Content */}
<div className="flex flex-col justify-center px-6 py-10">

  <h2 className="text-[38px] font-bold text-[#0B1B3B] leading-tight mb-8">
    Many Blocks and <br />
    Components
  </h2>

  <p className="text-gray-400 text-lg leading-8 mb-16 max-w-[280px]">
    Startup Framework contains components
    and complex blocks which can easily be
    integrated into almost any design.
  </p>

  <button className="w-[150px] h-[55px] border border-gray-300 rounded-full text-[#0B1B3B] font-semibold hover:bg-white transition">
    Explore
  </button>

</div>

      </div>
    </section>
    <section className="bg-[#f5f5f5] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[8px] text-gray-400 text-xs mb-4">
            Testimonials
          </p>

          <h2 className="text-[55px] font-bold text-[#0B1B3B]">
            What Clients say about us
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-20">

          {/* Item 1 */}
          <div className="flex gap-6">
            <img
  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
  alt="Client"
  className="w-16 h-16 rounded-xl object-cover"
/>

            <div>
              <p className="text-[#0B1B3B] text-[22px] leading-10">
                Get a fully retina ready site when
                you build with Startup Framework.
                Websites look sharper and more
                gorgeous on devices with retina
                display support
              </p>

              <h4 className="mt-8 uppercase tracking-[4px] text-gray-400 text-sm">
                Rayhan Curran
              </h4>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-6">
<img
  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
  alt="Client"
  className="w-16 h-16 rounded-xl object-cover"
/>

            <div>
              <p className="text-[#0B1B3B] text-[22px] leading-10">
                As a business targeting high net
                worth individuals, we were looking
                for a slick, cool and mini-malistic
                design for our website
              </p>

              <h4 className="mt-8 uppercase tracking-[4px] text-gray-400 text-sm">
                Kayley Frame
              </h4>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-6">
           <img
  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
  alt="Client"
  className="w-16 h-16 rounded-xl object-cover"
/>

            <div>
              <p className="text-[#0B1B3B] text-[22px] leading-10">
                The most important part of the
                Startup Framework is the samples
              </p>

              <h4 className="mt-8 uppercase tracking-[4px] text-gray-400 text-sm">
                Gene Whitfield
              </h4>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex gap-6">
            <img
  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop"
  alt="Client"
  className="w-16 h-16 rounded-xl object-cover"
/>

            <div>
              <p className="text-[#0B1B3B] text-[22px] leading-10">
                I've built my website with Startup
                just in one day, and it was ready-to-go.
              </p>

              <h4 className="mt-8 uppercase tracking-[4px] text-gray-400 text-sm">
                Allan Kim
              </h4>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section className="bg-[#f5f5f5] py-28">

  <div className="max-w-7xl mx-auto px-6">

    {/* ================= TEAM SECTION ================= */}

    <div className="text-center mb-16">

      <p className="uppercase tracking-[8px] text-gray-400 text-xs mb-3">
        Our Team
      </p>

      <h2 className="text-[55px] font-bold text-[#0B1B3B]">
        Meet The Team
      </h2>

    </div>

    <div className="grid md:grid-cols-3 gap-8 mb-28">

      {/* Team Card 1 */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">

        <div className="py-10 flex flex-col items-center">

          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt=""
            className="w-24 h-24 rounded-full object-cover mb-6"
          />

          <h3 className="text-xl font-bold text-[#0B1B3B]">
            Vanessa Laird
          </h3>

          <p className="text-gray-400 uppercase tracking-[3px] text-sm mt-3">
            UI Designer
          </p>

        </div>

        <div className="grid grid-cols-3 border-t">

          <div className="py-4 text-center border-r cursor-pointer hover:bg-gray-50">
            🐦
          </div>

          <div className="py-4 text-center border-r cursor-pointer hover:bg-gray-50">
            📘
          </div>

          <div className="py-4 text-center cursor-pointer hover:bg-gray-50">
            🏀
          </div>

        </div>

      </div>

      {/* Team Card 2 */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">

        <div className="py-10 flex flex-col items-center">

          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt=""
            className="w-24 h-24 rounded-full object-cover mb-6"
          />

          <h3 className="text-xl font-bold text-[#0B1B3B]">
            Mason Campbell
          </h3>

          <p className="text-gray-400 uppercase tracking-[3px] text-sm mt-3">
            UI Designer
          </p>

        </div>

        <div className="grid grid-cols-3 border-t">

          <div className="py-4 text-center border-r cursor-pointer hover:bg-gray-50">
            🐦
          </div>

          <div className="py-4 text-center border-r cursor-pointer hover:bg-gray-50">
            📘
          </div>

          <div className="py-4 text-center cursor-pointer hover:bg-gray-50">
            🏀
          </div>

        </div>

      </div>

      {/* Team Card 3 */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">

        <div className="py-10 flex flex-col items-center">

          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt=""
            className="w-24 h-24 rounded-full object-cover mb-6"
          />

          <h3 className="text-xl font-bold text-[#0B1B3B]">
            Irea Evans
          </h3>

          <p className="text-gray-400 uppercase tracking-[3px] text-sm mt-3">
            Client Manager
          </p>

        </div>

        <div className="grid grid-cols-3 border-t">

          <div className="py-4 text-center border-r cursor-pointer hover:bg-gray-50">
            🐦
          </div>

          <div className="py-4 text-center border-r cursor-pointer hover:bg-gray-50">
            📘
          </div>

          <div className="py-4 text-center cursor-pointer hover:bg-gray-50">
            🏀
          </div>

        </div>

      </div>

    </div>

    {/* ================= NEWSLETTER ================= */}

    <div className="text-center mb-16">

      <p className="uppercase tracking-[8px] text-gray-400 text-xs mb-3">
        Our Team
      </p>

      <h2 className="text-[55px] font-bold text-[#0B1B3B]">
        Subscribe Our Newsletter
      </h2>

    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Image */}

      <div className="flex justify-center">

        <img
          src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
          alt=""
          className="w-[280px]"
        />

      </div>

      {/* Right Content */}

      <div>

        <p className="text-gray-600 leading-8 mb-10">
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam
        </p>

        <input
          type="email"
          placeholder="Your E-mail here..."
          className="w-full h-16 rounded-full px-8 outline-none shadow-lg bg-white mb-8"
        />

        <button className="w-full h-14 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-semibold transition">
          Subscribe Our Newsletter
        </button>

      </div>

    </div>

  </div>

</section>
</section>
   );
}
  
