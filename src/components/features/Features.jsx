import feature from "./data";

export default function Feature() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">

        <header className="text-center flex flex-col items-center mb-10 ">
            <span className="w-30 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
          Our Features
        </span>
        <h2 className="mt-5 text-3xl max-w-160 font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Innovative solutions to enhance medical service</h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {feature.map((item) => (
            <div
              key={item.id}
              className="text-center flex flex-col items-center border border-blue-100 bg-white p-12 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-700">
                ✦
              </div>

              <h3 className="mb-3 text-xl font-bold text-blue-900">
                {item.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {item.pragraph}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}