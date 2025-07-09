export default function CustomerFeedback() {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-3xl md:text-6xl font-bold text-center md:text-left">
            Our Customers' Feedback
          </h3>
          <img
            src="/svg/quote.svg"
            className="h-10 md:h-20"
            alt="Quote Icon"
          />
        </header>

        {/* Feedback Section */}
        <section className="mt-10 flex flex-col md:flex-row gap-8 bg-gray-100 p-6 rounded-xl shadow-sm">
          {/* Image */}
          <div
            className="w-full md:w-1/3 h-64 md:h-auto bg-center bg-cover rounded-br-[80px]"
            style={{
              backgroundImage:
                `url("https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
            }}
          ></div>

          {/* Feedbacks */}
          <div className="flex-1 space-y-10">
            {/* Anjali */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Anjali M</h2>
              <p className="mt-3 text-gray-700 text-base md:text-lg">
                “Rethna Interiors turned my house into a dream home. The team was professional, creative, and easy to work with!”
              </p>
              <p className="mt-2 font-semibold">— Anjali M</p>
            </div>

            {/* Rahath */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Rahath Salim</h2>
              <p className="mt-3 text-gray-700 text-base md:text-lg">
                “Great service and top-quality work. Loved the flooring and finishing. Highly recommend Rethna Interiors!”
              </p>
              <p className="mt-2 font-semibold">— Rahath Salim</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
