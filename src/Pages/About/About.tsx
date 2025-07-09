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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          aliquet urna. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. In scelerisque, nisl at
          facilisis tristique, justo est sagittis eros, sed dignissim lectus
          nisl sit amet erat.
          <br />
          <br />
          Integer fringilla augue et turpis fermentum posuere. Curabitur sit
          amet vehicula nunc. Sed et massa quis quam sodales fermentum.
          Pellentesque nec orci ac magna malesuada faucibus.
        </p>
      </div>
    </div>
  );
}
