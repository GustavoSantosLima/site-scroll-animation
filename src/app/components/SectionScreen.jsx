export default function SectionScreen({ id, text }) {
  return (
    <section id={`section-${id}`} className="section-screen">
      <div className="flex-1"></div>
      <div className="flex-1 pl-8">
        <span className="text-4xl sm:text-6xl md:text-7xl">{text}</span>
      </div>
    </section>
  );
}
