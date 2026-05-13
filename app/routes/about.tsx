
export function meta() {
  return [
    { title: "About | Portfolio" },
    {
      name: "description",
      content: "About Me Page",
    },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      
      <div className="max-w-5xl mx-auto">
        
        <h1 className="text-5xl font-bold mb-8">
          About Me
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-6">
          Hello! I'm a passionate Frontend Developer who loves
          building modern and responsive web applications.
        </p>

        <p className="text-gray-300 text-lg leading-8 mb-6">
          I work with React, Tailwind CSS, TypeScript, and modern
          web technologies to create beautiful user experiences.
        </p>

        <p className="text-gray-300 text-lg leading-8">
          I enjoy learning new technologies and building creative
          projects that solve real-world problems.
        </p>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">
            Skills
          </h2>

          <div className="flex flex-wrap gap-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Tailwind CSS",
              "Node.js",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-800 px-5 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}