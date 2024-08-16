export default function CustomerFeedback() {
  return (
    <div className="min-h-screen border border-gray-800">
      <div className="bg-white p-4">
        <header className="flex p-2 lg:p-4 mx-auto max-w-4xl justify-between items-center">
          <h3 className="text-2xl lg:text-7xl font-bold max-w-xl">
            Our Coustemers Feedback.
          </h3>
          <img src="/svg/quote.svg" className="h-12 lg:h-auto" alt="QUOTE LARGE IMAGE" />
        </header>
        <section className="mt-8 lg:p-4 mx-auto max-w-4xl h-96 w-full gap-24 bg-gray-100">
          <div className="flex gap-12 h-96">
            <div 
            style={{backgroundImage: `url("https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}} 
            className="h-72 bg-gray-500 w-1/3 p-2 rounded-br-[600px] bg-center bg-fixed"></div>
            <div className="flex flex-col items-start">
              <h2 className="text-3xl font-bold">Jordyn Dorwart</h2>
              <p className="mt-6 max-w-2xl text-xl font-sans">
                “ Amaizing fast and reliable customer support! The team of
                willing to go mile for customer service! ”
              </p>
              <h2 className="mt-12 font-sans font-bold">Jordyn Dorwart</h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
