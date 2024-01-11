import { Carousel } from "@material-tailwind/react";

export default function ClientsDisplay() {
  return (
    <section className="bg-primary bg-opacity-75 my-12 py-12 md:py-24">
      <Carousel className=" max-h-64 sm:max-h-80 md:max-h-100 overflow-clip rounded-2xl">
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
