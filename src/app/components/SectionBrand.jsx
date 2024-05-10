export default function SectionBrand({ brand }) {
  return (
    <section className="absolute w-screen flex">
      <div className="flex-1 flex justify-end">
        <h1 className="text-4xl sm:text-6xl md:text-7xl text-white uppercase">
          {brand} =
        </h1>
      </div>
      <div className="flex-1"></div>
    </section>
  );
}
