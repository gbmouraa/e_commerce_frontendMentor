import Header from "./components/header";
import { Product } from "./components/product";
import { ProductProvider } from "./contexts/product";

const App = () => {
  return (
    <>
      <ProductProvider>
        <Header />
        <Product />
      </ProductProvider>
    </>
  );
};

export default App;
