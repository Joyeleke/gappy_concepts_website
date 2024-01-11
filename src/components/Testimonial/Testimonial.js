export default function Testimonial() {
  return (
    <section className="px-12 md:px-24 lg:px-36">
      <article className="grid grid-cols-1 md:grid-cols-3 my-4 items-center">
        <img
          src="https://picsum.photos/250"
          alt="carousel_image"
          className="rounded-xl mx-auto md:mx-0"
        ></img>
        <div className="my-4 md:my-0 text-center md:text-left md:col-span-2">
          <p>
            "I can't praise Aso-Oke Heritage enough! Their fabrics are not just
            exquisite but also a piece of art. The colors, patterns, and quality
            exceeded my expectations. I wore their Aso-Oke at my wedding, and it
            was truly a showstopper. Thank you for preserving our culture in
            such a beautiful way."
          </p>
          <h1 className="text-xl font-bold">Kwame O., Abuja</h1>
        </div>
      </article>
      <article className="grid grid-cols-1 md:grid-cols-3 my-4 items-center">
        <img
          src="https://picsum.photos/250"
          alt="carousel_image"
          className="rounded-xl mx-auto md:mx-0 md:ml-auto md:order-last"
        ></img>
        <div className="my-4 md:my-0 text-center md:text-left md:col-span-2 ">
          <p>
            "I can't praise Aso-Oke Heritage enough! Their fabrics are not just
            exquisite but also a piece of art. The colors, patterns, and quality
            exceeded my expectations. I wore their Aso-Oke at my wedding, and it
            was truly a showstopper. Thank you for preserving our culture in
            such a beautiful way."
          </p>
          <h1 className="text-xl font-bold">Kwame O., Abuja</h1>
        </div>
      </article>
    </section>
  );
}
