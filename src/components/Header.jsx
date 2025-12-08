function Header() {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
      <div className="text-2xl font-bold text-white">FlowPay</div>

      <div className="flex items-center gap-3">
        <button className="px-8 py-3 rounded-xl text-white font-medium hover:bg-white/10 transition-all duration-200">
          Start Free Trial
        </button>

        <button className="px-8 py-3 rounded-xl bg-[#BFAFF2] text-[#333333] font-medium hover:bg-[#a89fd9] hover:shadow-lg transition-all duration-200">
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;
