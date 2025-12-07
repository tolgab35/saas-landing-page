function App() {
  return (
    <div className="bg-[#2B2B2B]">
      <header className="flex items-center justify-between px-12 py-6">
        <div className="text-2xl font-semibold text-white">Wallet</div>
        <div className="flex items-center gap-2">
          <button className="w-[175px] h-[50px] text-white font-normal hover:text-gray-300 transition-colors rounded-[15px]">
            Sign up
          </button>
          <button className="w-[175px] h-[50px] bg-[#BFAFF2] hover:bg-[#a89fd9] text-[#333333] rounded-[15px] font-normal transition-colors">
            Log in
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
