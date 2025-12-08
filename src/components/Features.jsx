import cardsImg from "../assets/cards-icon.png";
import coinImg from "../assets/coin-icon.png";
import purseImg from "../assets/purse-icon.png";

function Features() {
  return (
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
            <h3 className="text-xl font-bold text-white">Smart Budgeting</h3>
            <p className="text-white/60 max-w-xs leading-relaxed">
              AI-powered insights track your spending patterns and help you save
              more with personalized recommendations.
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
            <h3 className="text-xl font-bold text-white">
              Zero Transaction Fees
            </h3>
            <p className="text-white/60 max-w-xs leading-relaxed">
              Send and receive money globally without any hidden charges. Free
              international transfers included.
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
            <h3 className="text-xl font-bold text-white">
              Multi-Currency Support
            </h3>
            <p className="text-white/60 max-w-xs leading-relaxed">
              Hold and manage multiple currencies in one account. Real-time
              exchange rates at your fingertips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
