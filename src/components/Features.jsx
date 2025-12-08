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
            <h3 className="text-xl font-bold text-white">Customizable card</h3>
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
  );
}

export default Features;
