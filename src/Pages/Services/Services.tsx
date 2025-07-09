import {
  FaLeaf,
  FaDraftingCompass,
  FaComments,
  FaBorderStyle,
  FaLightbulb,
  FaPaintRoller,
  FaGripLinesVertical,
  FaCouch,
  FaUtensils,
} from "react-icons/fa";

export default function Service() {
  const section1 = [
    {
      icon: <FaLeaf className="text-pink-500 text-xl" />,
      title: "Landscaping",
      description:
        "We design serene and stylish outdoor spaces that blend beautifully with nature — whether it’s a small garden, terrace, or large landscape layout.",
    },
    {
      icon: <FaDraftingCompass className="text-pink-500 text-xl" />,
      title: "Interior Designing",
      description:
        "Our team transforms your vision into reality through functional, aesthetic, and personalized interior designs for every room and purpose.",
    },
    {
      icon: <FaComments className="text-pink-500 text-xl" />,
      title: "Interior Consultation",
      description:
        "Our designers help you make confident choices on materials, layouts, lighting, and décor — tailored to your taste and space.",
    },
    {
      icon: <FaBorderStyle className="text-pink-500 text-xl" />,
      title: "False Ceiling",
      description:
        "Add style, acoustics, and lighting depth to your interiors with our custom-designed false ceiling solutions — from minimalist to ornamental styles.",
    },
  ];

  const section2 = [
    {
      icon: <FaLightbulb className="text-pink-500 text-xl" />,
      title: "Interior Lightings",
      description:
        "We illuminate your space with thoughtfully curated lighting — enhancing mood, function, and visual appeal in every corner of your home.",
    },
    {
      icon: <FaPaintRoller className="text-pink-500 text-xl" />,
      title: "Texture Painting",
      description:
        "Add depth and personality to your walls with our high-quality texture painting solutions. From subtle finishes to bold statements, we bring walls to life.",
    },
    {
      icon: <FaGripLinesVertical className="text-pink-500 text-xl" />,
      title: "Wooden Flooring",
      description:
        "Timeless and elegant, our wooden flooring options offer warmth, durability, and sophistication — ideal for modern or classic interiors.",
    },
    {
      icon: <FaCouch className="text-pink-500 text-xl" />,
      title: "Wooden Furniture Works",
      description:
        "From custom wardrobes to designer furniture, we craft premium wooden pieces tailored to fit your lifestyle, space, and aesthetic.",
    },
    {
      icon: <FaUtensils className="text-pink-500 text-xl" />,
      title: "Kitchen Interior",
      description:
        "We create stylish, ergonomic, and efficient kitchen interiors — combining smart storage, modern appliances, and elegant finishes.",
    },
  ];

  const renderServices = (items: any[]) =>
    items.map((item, idx) => (
      <div key={idx} className="flex items-start gap-4">
        <div className="bg-white shadow-md rounded-full p-3">{item.icon}</div>
        <div>
          <h3 className="text-md font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      </div>
    ));

  return (
    <div className="bg-white px-4 py-12 md:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-pink-500 text-3xl font-cursive font-semibold">Our Services</h2>
        {/* <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Dignissimos asperiores vitae velit veniam totam fuga molestias
          accusamus alias autem provident. Odit ab aliquam dolor eius.
        </p> */}
      </div>

      {/* Section 1 (Image Right) */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-20 py-10 lg:py-20 border-b border-gray-200">
        <div className="flex-1 space-y-6">{renderServices(section1)}</div>
        <div className="flex-1">
          <img
            src="/images/in.jpg"
            alt="Service"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </div>

      {/* Section 2 (Image Left) */}
      <div className="flex flex-col lg:flex-row items-center gap-20 py-60">
        <div className="flex-1">
          <img
            src="/images/out.jpg"
            alt="Service"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
        <div className="flex-1 space-y-6">{renderServices(section2)}</div>
      </div>
    </div>
  );
}
