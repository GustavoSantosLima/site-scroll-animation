import SectionBrand from "./components/SectionBrand";
import SectionScreen from "./components/SectionScreen";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-center relative">
        <SectionBrand brand="Brand" />

        <div className="snap-scroll scroll-smooth">
          <SectionScreen id={1} text="Section 1" />
          <SectionScreen id={2} text="Section 2" />
          <SectionScreen id={3} text="Section 3" />
          <SectionScreen id={4} text="Section 4" />
          <SectionScreen id={5} text="Section 5" />
        </div>
      </div>
    </main>
  );
}
