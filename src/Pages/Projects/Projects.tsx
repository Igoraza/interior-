interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Luxury Living Room",
    description:
      "A modern luxury living space combining minimalism and warm tones for a sophisticated look.",
    image: "/images/arm.jpg",
  },
  {
    id: 2,
    title: "Urban Kitchen Space",
    description:
      "A sleek urban kitchen with functional design, contemporary cabinets, and smart lighting.",
    image: "/images/white.jpg",
  },
  {
    id: 3,
    title: "Nature-Inspired Bedroom",
    description:
      "A calming bedroom space inspired by natural textures and neutral color palettes.",
    image: "/images/loft.jpg",
  },
  {
    id: 4,
    title: "Elegant Office Interior",
    description:
      "Designed for productivity with earthy hues, ergonomic furniture, and lots of light.",
    image: "/images/green.jpg",
  },
];

export default function Projects() {
  return (
    <div className="bg-white px-4 py-12 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Projects</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Explore our featured interior design and architecture projects tailored to meet client needs.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
