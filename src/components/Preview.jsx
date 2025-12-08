import previewImg from "../assets/preview.png";

function Preview() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FDF5DF] rounded-2xl p-8 flex items-center justify-center shadow-lg">
          <img src={previewImg} alt="Preview" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default Preview;
