import heroImg from "./assets/hero-section.gif";
import firmsImg from "./assets/firms.png";
import previewImg from "./assets/preview.png";
import cardsImg from "./assets/cards-icon.png";
import coinImg from "./assets/coin-icon.png";
import purseImg from "./assets/purse-icon.png";

function App() {
  return (
    <div className="bg-[#2B2B2B] min-h-screen">
      {/* HEADER */}
      <header className="max-w-[1280px] mx-auto py-6 flex items-center justify-between">
        <div className="text-2xl font-semibold text-white">Wallet</div>

        <div className="flex items-center gap-4">
          <button className="w-[175px] h-[50px] rounded-[15px] text-white font-normal hover:text-gray-300 transition-colors">
            Sign up
          </button>

          <button className="w-[175px] h-[50px] rounded-[15px] bg-[#BFAFF2] text-[#333333] font-normal hover:bg-[#a89fd9] transition-colors">
            Log in
          </button>
        </div>
      </header>

      {/* HERO */}
      <section>
        <div className="max-w-[1280px] mx-auto  py-16 flex flex-col md:flex-row items-center gap-16">
          {/* LEFT */}
          <div className="flex-1 flex flex-col gap-12">
            <h1 className="text-6xl font-semibold text-white leading-snug">
              SaaS Landing <br /> Page Template
            </h1>

            <p className="max-w-md text-lg text-white/40">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>

            <button className="w-fit px-8 py-3 rounded-lg bg-[#F8D57E] text-[#333333] font-medium hover:bg-[#e6c66d] transition-colors">
              Get started
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex justify-end">
            <img
              src={heroImg}
              alt="Hero Section"
              className="w-full max-w-[500px] h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* FIRMS */}
      <section>
        <div className="max-w-[1280px] mx-auto px-16 py-16 flex items-center justify-between gap-8 border-t-2 border-b-2 border-white/10">
          <img src={firmsImg} alt="Firms" />
        </div>
      </section>

      {/* PREVIEW */}
      <section>
        <div className="max-w-[1280px] mx-auto py-16">
          <div className="bg-[#FDF5DF] rounded-[20px] flex items-center justify-center">
            <img src={previewImg} alt="Preview" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-[1280px] mx-auto py-16 px-8">
        <div className="flex items-start justify-center gap-12 text-center">
          <div className="flex-1 flex flex-col items-center gap-4">
            <img src={cardsImg} alt="Cards" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold text-white leading-relaxed">
              Customizable card
            </h3>
            <p className="text-white/40 max-w-xs leading-relaxed">
              Custom your own card for your exact incomes and expenses needs.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center gap-4">
            <img src={coinImg} alt="Coin" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold text-white leading-relaxed">
              No payment fee
            </h3>
            <p className="text-white/40 max-w-xs leading-relaxed">
              Transfer your payment all over the world with no payment fee.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center gap-4">
            <img src={purseImg} alt="Purse" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold text-white leading-relaxed">
              All in one place
            </h3>
            <p className="text-white/40 max-w-xs leading-relaxed">
              The right place to keep your credit and debit cards, boarding
              passes & more.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
