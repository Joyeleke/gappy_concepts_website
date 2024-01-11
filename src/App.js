import Banner from "./components/Banner/Banner";
import ClientsDisplay from "./components/ClientsDisplay/ClientsDisplay";
import FeaturesDisplay from "./components/FeaturesDisplay/FeaturesDisplay";
import InfoDisplay from "./components/InfoDisplay/InfoDisplay";
import NavBar from "./components/Nav/NavBar/NavBar";
import NewsDisplay from "./components/NewsDisplay/NewsDisplay";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Banner />
      </header>
      <main>
        <FeaturesDisplay />
        <ProductDisplay />
        <InfoDisplay/>
        <Testimonial />
        <ClientsDisplay />
        <NewsDisplay />
      </main>
      <footer class="bg-primary bg-opacity-75 p-6 text-center md:text-left">
        <p>Gappy Concepts - © 2024</p>
        <ul class="flex flex-col md:flex-row items-center">
          <li class="m-5 font-semibold text-base md:ml-0">Home</li>
          <li class="m-5 font-semibold text-base">Exhibition</li>
          <li class="m-5 font-semibold text-base">Products</li>
          <li class="m-5 font-semibold text-base">About</li>
          <li class="m-5 font-semibold text-base">Contact</li>
        </ul>
      </footer>
    </>
  );
}
export default App;

// Main To Do
// - Navigation
