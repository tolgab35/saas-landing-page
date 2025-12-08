import heroImg from "../assets/hero-section.gif";

function Hero() {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        {/* LEFT */}
        <div className="flex-1 flex flex-col gap-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Your Money, <br /> Simplified
          </h1>

          <p className="max-w-md text-base sm:text-lg text-white/60 leading-relaxed">
            Manage all your finances in one place. Send money globally, track
            expenses, and control your digital wallet with zero friction.
          </p>

          <button className="w-fit px-8 py-3 rounded-xl bg-[#F8D57E] text-[#333333] font-semibold hover:bg-[#e6c66d] hover:shadow-lg transition-all duration-200">
            Start Free Trial
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Hero Section"
            className="w-full max-w-lg h-auto object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
