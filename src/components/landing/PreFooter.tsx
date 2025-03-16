export default function PreFooterSection() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center md:justify-between flex-col md:flex-row">
          <h2 className="text-[40px] text-center md:text-left font-medium">
            Plan the present. Build the future.
          </h2>
          <div className="flex items-center gap-2 font-medium">
            <a
              className="px-5 py-2.5 bg-eerieblack rounded-[10px] hover:brightness-125 transition-all duration-150"
              href="#"
            >
              Talk to sales
            </a>
            <a
              href="#"
              className="px-5 py-2.5 bg-white/90 text-richblack rounded-[10px] transition-colors duration-150 hover:bg-white"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
