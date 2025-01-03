import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-100 mb-40">
        <h2 className="text-center text-5xl font-bold md:text-5xl lg:text-center animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600">
          {/* name bhi likh skty han tech chronic ki jaga */}
          {/* Tech Chronicles: Navigating the secrets of Technology blog */}
          BLOG UNIVERSE
        </h2>

        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
        BLOG UNIVERSE is a space where ideas, creativity, and stories converge. Just like the vast cosmos, this blog explores an infinite array of topics, connecting readers to diverse perspectives and intriguing content. Whether you’re seeking knowledge, inspiration, or a fresh take on the world around us, BLOG UNIVERSE is your gateway to discovery.
        </p>
        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
            {" "}
            Exploring Our Categories{" "}
          </h1>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[
              "Technology",
              "Artificial Intelligence",
              "Travel",
              "Virtual Reality",
              "Health",
              "Education",
            ].map((category, index) => (
              <div
                key={index}
                className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600"
              >
                <p className="text-center text-lg font-semibold">{category}</p>

                <div className="absolute inset-0 border-2 border-transparent group-hover:boreder-white rounded-lg transition duration-300 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10">
        Step into BLOG UNIVERSE to expand your horizons, spark conversations, and embrace the journey of learning and exploration. Let this be your digital cosmos, where each visit is a step closer to the infinite possibilities of knowledge and imagination.
        </p>
      </section>
    </div>
  );
}
