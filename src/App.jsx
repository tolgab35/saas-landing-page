import heroImg from "./assets/hero-section.gif";
import firmsImg from "./assets/firms.png";
import previewImg from "./assets/preview.png";
import cardsImg from "./assets/cards-icon.png";
import coinImg from "./assets/coin-icon.png";
import purseImg from "./assets/purse-icon.png";
import userFeedbackImg from "./assets/user-feedback.png";
import walletImg from "./assets/wallet.gif";

function App() {
  return (
    <div className="bg-[#2B2B2B] min-h-screen">
      {/* HEADER */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">Wallet</div>

        <div className="flex items-center gap-3">
          <button className="px-8 py-3 rounded-xl text-white font-medium hover:bg-white/10 transition-all duration-200">
            Sign up
          </button>

          <button className="px-8 py-3 rounded-xl bg-[#BFAFF2] text-[#333333] font-medium hover:bg-[#a89fd9] hover:shadow-lg transition-all duration-200">
            Log in
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT */}
          <div className="flex-1 flex flex-col gap-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              SaaS Landing <br /> Page Template
            </h1>

            <p className="max-w-md text-base sm:text-lg text-white/60 leading-relaxed">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>

            <button className="w-fit px-8 py-3 rounded-xl bg-[#F8D57E] text-[#333333] font-semibold hover:bg-[#e6c66d] hover:shadow-lg transition-all duration-200">
              Get started
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

      {/* FIRMS */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center border-t border-b border-white/10">
          <img src={firmsImg} alt="Firms" className="w-full max-w-4xl h-auto" />
        </div>
      </section>

      {/* PREVIEW */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FDF5DF] rounded-2xl p-8 flex items-center justify-center shadow-lg">
            <img src={previewImg} alt="Preview" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="w-16 h-16 mb-2">
                <img
                  src={cardsImg}
                  alt="Cards"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white">
                Customizable card
              </h3>
              <p className="text-white/60 max-w-xs leading-relaxed">
                Custom your own card for your exact incomes and expenses needs.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 p-6">
              <div className="w-16 h-16 mb-2">
                <img
                  src={coinImg}
                  alt="Coin"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white">No payment fee</h3>
              <p className="text-white/60 max-w-xs leading-relaxed">
                Transfer your payment all over the world with no payment fee.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 p-6">
              <div className="w-16 h-16 mb-2">
                <img
                  src={purseImg}
                  alt="Purse"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white">All in one place</h3>
              <p className="text-white/60 max-w-xs leading-relaxed">
                The right place to keep your credit and debit cards, boarding
                passes & more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#BFAFF2] rounded-2xl py-12 px-8 lg:py-16 lg:px-16 flex flex-col items-center gap-8 shadow-xl">
            <blockquote className="text-xl sm:text-2xl font-semibold text-[#333333] leading-relaxed max-w-3xl">
              "Wallet is a great product! All of my most important information
              is there - credit cards, transit cards, boarding passes, tickets,
              and more. And I don't need to worry because it's all in one place!
              thanks!”
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

      {/* CONTACT CTA */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1F1F1F] rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row items-center gap-8 lg:gap-12 shadow-xl">
            {/* LEFT */}
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Questions?
                <br />
                Let's talk
              </h2>
              <p className="text-white/60 mb-2 text-base">
                Contact us through our 24/7 live chat.
              </p>
              <p className="text-white/60 mb-8 text-base">
                We're always happy to help!
              </p>
              <button className="px-8 py-3 rounded-xl bg-[#F8D57E] text-[#333333] font-semibold hover:bg-[#e6c66d] hover:shadow-lg transition-all duration-200">
                Get started
              </button>
            </div>

            {/* RIGHT */}
            <div className="flex-1 flex justify-center">
              <div className="bg-[#C8E5E0] rounded-2xl p-8 lg:p-12 w-full max-w-md aspect-square flex items-center justify-center">
                <img
                  src={walletImg}
                  alt="Wallet"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 lg:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 lg:gap-12">
            {/* LEFT SIDE */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-6">Wallet</h3>
              <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
                <span>© Wallet 2025</span>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy policy
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Cookies policy
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms of use
                </a>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1 flex flex-col gap-4 items-start md:items-end">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <h4 className="text-white text-base font-medium">
                  Updates right to your Inbox
                </h4>

                <div className="flex items-center gap-3 w-full">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 bg-[#3A3A3A] rounded-xl text-white placeholder:text-white/40 px-4 py-3 outline-none focus:bg-[#454545] focus:ring-2 focus:ring-[#BFAFF2] transition-all duration-200"
                  />
                  <button className="px-8 py-3 rounded-xl bg-[#BFAFF2] text-[#333333] font-medium hover:bg-[#a89fd9] hover:shadow-lg transition-all duration-200">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
