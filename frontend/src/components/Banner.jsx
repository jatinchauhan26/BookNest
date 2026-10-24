
import React from "react";
import banner from "../../public/Banner2.png";
import { BookOpen, Code2, Download } from "lucide-react";

function Banner() {
  const handleGetStarted = () => {
    document.getElementById("free-books")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const features = [
    {
      icon: BookOpen,
      title: "Free Books",
      description: "Learn at no cost",
    },
    {
      icon: Code2,
      title: "Programming",
      description: "Explore coding topics",
    },
    {
      icon: Download,
      title: "Easy Downloads",
      description: "Get books in one click",
    },
  ];

  return (
    <section className="max-w-screen-2xl container mx-auto md:px-20 px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 pt-8 md:pt-10 pb-2">
      {/* Banner content */}
      <div className="order-2 md:order-1 w-full min-w-0">
        <div className="space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Welcome to BookNest! Discover something{" "}
            <span className="text-[#E91E63]">
              new every day!
            </span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed opacity-90">
            Explore a world of knowledge with our collection
            of books. Learn programming, improve your skills,
            and discover new ideas to support your learning journey.
          </p>
        </div>

       <button
  type="button"
  onClick={handleGetStarted}
  className="mt-6 min-h-[52px] px-8 rounded-lg bg-[#E91E63] text-white text-base md:text-lg font-semibold hover:bg-[#C2185B] hover:scale-105 transition-all duration-200"
>
  Explore Books
</button>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-7">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex items-center gap-2 rounded-xl p-2 transition-colors duration-200 hover:bg-white/5"
              >
                <div className="shrink-0 p-2.5 rounded-xl bg-[#E91E63]/10 text-[#E91E63]">
                  <Icon size={24} strokeWidth={2} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-sm leading-snug">
                    {feature.title}
                  </h3>

                  <p className="text-xs opacity-70 mt-1 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Banner image */}
      <div className="order-1 md:order-2 w-full flex justify-center items-center">
        <img
          src={banner}
          className="w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[540px] h-auto object-contain"
          alt="A collection of books for learning and reading"
        />
      </div>
    </section>
  );
}

export default Banner;
