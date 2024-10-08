export default function UniqueDesign() {
  return (
    <div className="min-h-screen">
      <div className="border border-gray-800">
        <h3 className="mb-12 p-8 text-2xl lg:text-6xl max-w-2xl font-bold">We will make Unique Designs for you.</h3>

        {/* body */}
        <div
        className="w-full h-screen flex gap-4">
      {/* Left panel */}
      <div className="w-1/2 h-full relative">
        <div
        style={{backgroundImage: `url("https://images.pexels.com/photos/5998138/pexels-photo-5998138.jpeg")`}}
        className="absolute inset-0 bg-gray-300 bg-no-repeat bg-cover bg-fixed">
          <div 
          style={{backgroundImage: `url("https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=600")`}}
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gray-300 rounded-tl-full border-l-[10px] border-t-[10px] border-white bg-cover bg-no-repeat" />
        </div>
      </div>

      {/* Middle divider */}
      {/* <div className="w-px h-full white" /> */}

      {/* Right panel */}
      <div className="w-1/2 h-full relative">
        <div 
        style={{backgroundImage: `url("https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg")`}}
        className="absolute inset-0 bg-gray-300 bg-no-repeat bg-cover bg-center bg-fixed">
          <div
          style={{backgroundImage: `url("https://images.pexels.com/photos/5570224/pexels-photo-5570224.jpeg?auto=compress&cs=tinysrgb&w=600")`}}
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-gray-300 rounded-br-full border-r-[10px] border-b-[10px] border-white bg-cover" />
        </div>
      </div>
    </div>


    <div className="lg:px-16 m-4  text-left">
    We create designs in a collaborative environment enabling us to deliver the client’s ultimate vision. Our designs are current, yet still possess a timeless style generating broad market appeal.
    </div>
      </div>

    </div>
  );
}
