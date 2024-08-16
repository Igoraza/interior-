export default function AmazingHome() {
  return (
    <div className="min-h-screen">
      <div className="border border-gray-800">
        <div className="flex justify-end p-4">
          <h3 className="text-6xl max-w-3xl text-right">
            Amazing Projects from Talented Interior Architects!
          </h3>
        </div>

        <div className="h-96 w-full bg-gray-300"></div>
        <div className="flex items-center justify-between">
          <div className="h-80 w-full lg:rounded-bl-[600px] gap-6 bg-amber-300 flex flex-wrap justify-center lg:justify-between items-center p-5 lg:px-16">
            <div className="px-16 flex flex-col items-start justify-center">
              <h3 className="text-3xl font-bold mb-2 font-sans">
                Modern Style
              </h3>
              <p className="max-w-2xl text-lg tracking-wide font-sans">
                The modernist movement began to take shape when it shifted away
                from traditional construction and design elements such as wood,
                stone, and brick and toward industrial materials like as glass,
                steel, and concrete.
              </p>
            </div>
            <button className="btn bg-teal-600 hover:bg-teal-900 border-none text-white">
              Explore
              <img src="/svg/white-arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
