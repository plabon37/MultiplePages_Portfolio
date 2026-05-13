import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Portfolio" },
    { name: "description", content: "My Portfolio Website" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          I am a Frontend Developer
        </p>
        <a href="/projects" className="text-orange-500 font-medium hover:underline">
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
          View Projects
        </button>
        </a>
      
      </div>
    </div>
  );
}