import { Carousel } from "@material-tailwind/react";

export default function Banner() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 px-12 py-8 bg-primary bg-opacity-75 border-2 border-b-black gap-x-12">
      <article className="flex flex-col justify-center text-black">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center lg:text-left  py-8 tracking-wide">
          Discover the Beauty of the Nigerian Aso-Oke
        </h1>
        <p className="text-semibold text-xl md:text-2xl text-center lg:text-left py-4">
          Experience the rich heritage of Nigerian culture through our exquisite
          collection of traditional cloth.
        </p>
        <div className="mx-auto lg:mx-0 flex flex-wrap items-center justify-center md:justify-start ">
          <button className="bg-white mx-2 lg:mx-0 my-8 w-32 py-2 md:py-4 px-4 md:px-6 text-base text-bold border-2 border-black rounded-xl">
            Shop Now
          </button>
          <button className="bg-white mx-2 lg:mx-0 my-8 w-32 py-2 md:py-4 px-4 md:px-6 lg:ml-12 text-base text-bold border-2 border-black rounded-xl">
            Products
          </button>
        </div>
      </article>
      <Carousel className="bg-primary bg-opacity-75 max-h-64 sm:max-h-80 md:max-h-100 overflow-clip rounded-2xl">
        <img
          src={require("./images/265036663_3459445054283755_6945724630830698758_n.jpg")}
          alt="a couple dressed in aso-oke"
          className="object-fit mx-auto"
        />
        <img
          src={require("./images/135224040_3203502456544684_3651192484501771425_n (1).jpg")}
          alt="a couple dressed in aso-oke"
          className="object-fit mx-auto"
        />
        <img
          src={require("./images/IMG-20240107-WA0008.jpg")}
          alt="a family dressed in aso-oke"
          className="object-cover mx-auto"
        />
        <img
          src={require("./images/184235866_3303316903229905_134360345948123068_n (1).jpg")}
          alt="a family dressed in aso-oke"
          className="object-fit mx-auto"
        />
        <img
          src={require("./images/149245517_3232123930349203_567567676549873482_n.jpg")}
          alt="a couple dressed in aso-oke"
          className="object-fit mx-auto"
        />
        <img
          src={require("./images/194215943_3313062148922047_7407613866423620817_n (1).jpg")}
          alt="a couple dressed in aso-oke"
          className="object-fit mx-auto"
        />
      </Carousel>
    </section>
  );
}

// Issues
// - Fix maybe max with 86 on some pictures
