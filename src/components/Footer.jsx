function Footer() {
  return (
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
  );
}

export default Footer;
