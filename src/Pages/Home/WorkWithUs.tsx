export default function WorkWithUs() {
  return (
    <div className="w-full bg-amber-300 p-5 lg:rounded-br-[600px]">
      <div className="flex lg:max-w-5xl gap-24 mx-auto">
      <section className="">
        <h2 className="text-3xl lg:text-7xl max-w-2xl font-bold">
          Intereste in Working with Us?
        </h2>
        <p className="max-w-3xl mt-8 text-xl">
          Do you have a passion for creating beautiful and functional spaces? If
          you are interested in working with us, please visit our website and
          fill out the application form.
        </p>
        <button className="btn bg-teal-500 text-white border-none hover:bg-teal-900 mt-8">
            Explore Now
            <img src="/svg/white-arrow.svg" alt="" />
        </button>
      </section>
      <div className="h-80 lg:block hidden  relative -top-5 bg-gray-200 w-48 rounded-br-[600px]"></div>
      </div>
    </div>
  );
}
