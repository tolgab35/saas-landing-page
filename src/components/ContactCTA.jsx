import walletImg from "../assets/wallet.gif";

function ContactCTA() {
  return (
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
  );
}

export default ContactCTA;
