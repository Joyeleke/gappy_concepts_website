export default function FeaturesDisplay() {
  return (
    <section className="px-12 md:px-24 pt-12 md:pt-24 pb-12 md:pb-16 text-center">
      <h1 className="text-3xl font-bold">
        Discover the Unique Tradition of Aso-Oke Fabric
      </h1>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 gap-x-16 gap-y-12 items-center">
        <div className="flex flex-col items-center text-center">
          <span className="text-4xl"> &#9733;</span>
          <h1 className="text-xl font-semibold my-6">
            Experience the Beauty of Aso-Oke in Every Detail
          </h1>
          <p className="text-base">
            Our traditional Aso-Oke fabric is meticulously handwoven by skilled
            artisans, ensuring the highest quality and authenticity.
          </p>
          <a href="#i" className="mt-6">
            Exhibition <span>&#8250;</span>
          </a>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-4xl"> &#9733;</span>
          <h1 className="text-xl font-semibold my-6">
            Celebrate Special Moments with Aso-Oke
          </h1>
          <p className="text-base">
            Our traditional Aso-Oke fabric is meticulously handwoven by skilled
            artisans, ensuring the highest quality and authenticity.
          </p>
          <a href="#i" className="mt-6">
            Products <span>&#8250;</span>
          </a>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-4xl"> &#9733;</span>
          <h1 className="text-xl font-semibold my-6">
            Create Lasting Memories with Aso-Oke
          </h1>
          <p className="text-base">
            Design your own unique Aso-Oke outfit and express your personal
            style.
          </p>
          <a href="#i" className="mt-6">
            Customize <span>&#8250;</span>
          </a>
        </div>
      </article>
    </section>
  );
}

// Issues
// - Add some box-shadow or smth like
// - Center md second row center
// - change star and fix text or smth
