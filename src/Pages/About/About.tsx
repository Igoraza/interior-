export default function About() {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center px-4 py-20"
      style={{
        backgroundImage: "url('/images/arm.jpg')",
      }}
    >
      {/* Heading ABOVE the content box */}
      <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-8 text-center drop-shadow-lg">
        About Us
      </h1>

      {/* Content Box */}
      <div className="bg-white bg-opacity-80 p-8 md:p-12 rounded-md max-w-3xl text-center shadow-lg">
        <h2 className="text-sm tracking-widest text-gray-600 uppercase mb-4">
          Who We Are
        </h2>
        <p className="text-gray-700 text-md md:text-lg leading-relaxed">
          Rethna Interiors crafts spaces that inspire. We believe your environment shapes your experience. Blending innovative design with timeless elegance, we transform houses into homes and workplaces into havens of productivity. 
          <br />
          <br />
          Our meticulous attention to detail and collaborative approach ensure each project reflects your unique vision and lifestyle, creating interiors that resonate deeply and endure beautifully. 
          <br />
        </p>
      </div>
    </div>
  );
}
