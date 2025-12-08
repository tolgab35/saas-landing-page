import firmsImg from "../assets/firms.png";

function Firms() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center border-t border-b border-white/10">
        <img src={firmsImg} alt="Firms" className="w-full max-w-4xl h-auto" />
      </div>
    </section>
  );
}

export default Firms;
