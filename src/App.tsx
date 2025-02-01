import Header from "./components/header";
import { Product } from "./components/product";
import { ProductCarouselDesktop } from "./components/product-carousel-desktop";
import { ProductProvider } from "./contexts/product";
import { CarouselProvider } from "./contexts/carousel";

const App = () => {
  return (
    <>
      <ProductProvider>
        <Header />
        <CarouselProvider>
          <Product />
          <ProductCarouselDesktop />
        </CarouselProvider>
      </ProductProvider>
    </>
  );
};

export default App;
