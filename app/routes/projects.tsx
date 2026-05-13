export function meta() {
  return [
    { title: "Projects | Portfolio" },
    {
      name: "description",
      content: "My Projects",
    },
  ];
}

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with React and Tailwind CSS.",
  },
  {
    title: "E-Commerce App",
    description:
      "Full-stack shopping application with authentication and payments.",
  },
  {
    title: "Task Manager",
    description:
      "A productivity app for managing daily tasks and projects.",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-12">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:scale-105 transition"
            >
              <h2 className="text-2xl font-semibold mb-4">
                {project.title}
              </h2>

              <p className="text-gray-400 leading-7">
                {project.description}
              </p>

              <button className="mt-6 bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-300 transition">
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}