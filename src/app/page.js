export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative items-center justify-center">
      <div className="flex relative items-center justify-center">
        <div className="absolute w-screen flex ">
          <h1 className="flex-1 flex justify-end text-7xl text-white">
            BRAND =
          </h1>
          <span className="flex-1"> </span>
        </div>

        <div className="snap-scroll">
          <section className="">
            <span className="flex-1 text-7xl"> </span>
            <span className="flex-1 text-7xl pl-8">Section 1</span>
          </section>
          <section className="rt">
            <span className="flex-1 text-7xl"> </span>
            <span className="flex-1 text-7xl pl-8">Section 2</span>
          </section>
          <section className="t">
            <span className="flex-1 text-7xl"> </span>
            <span className="flex-1 text-7xl pl-8">Section 3</span>
          </section>
          <section className="">
            <span className="flex-1 text-7xl"> </span>
            <span className="flex-1 text-7xl pl-8">Section 4</span>
          </section>
          <section className="">
            <span className="flex-1 text-7xl"> </span>
            <span className="flex-1 text-7xl pl-8">Section 5</span>
          </section>
        </div>
      </div>
    </main>
  );
}
