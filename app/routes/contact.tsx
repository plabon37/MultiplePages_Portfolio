export function meta() {
  return [
    { title: "Contact | Portfolio" },
    {
      name: "description",
      content: "Contact Me",
    },
  ];
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Contact Me
        </h1>

        <form className="space-y-6">

          <div>
            <label className="block mb-2 text-lg">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg">
              Message
            </label>

            <textarea
              rows={6}
              placeholder="Write your message..."
              className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}