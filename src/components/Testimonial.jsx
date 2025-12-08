import userFeedbackImg from "../assets/user-feedback.png";

function Testimonial() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#BFAFF2] rounded-2xl py-12 px-8 lg:py-16 lg:px-16 flex flex-col items-center gap-8 shadow-xl">
          <blockquote className="text-xl sm:text-2xl font-semibold text-[#333333] leading-relaxed max-w-3xl">
            "Wallet is a great product! All of my most important information is
            there - credit cards, transit cards, boarding passes, tickets, and
            more. And I don't need to worry because it's all in one place!
            thanks!"
          </blockquote>

          <div className="flex items-center gap-4 w-full max-w-3xl">
            <img
              src={userFeedbackImg}
              alt="Johnny Owens"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-semibold text-[#333333]">
                Johnny Owens
              </p>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="#333333"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
