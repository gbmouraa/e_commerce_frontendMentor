import Header from "./components/header";
import { Product } from "./components/product";
import { ProductSlider } from "./components/product-slider";
import { ProductProvider } from "./contexts/product";
import { CarouselProvider } from "./contexts/carousel";
import { motion } from "framer-motion";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <ProductProvider>
        <Header />
        <CarouselProvider>
          <Product />
          <ProductSlider />
        </CarouselProvider>
      </ProductProvider>
    </motion.div>
  );
};

export default App;
