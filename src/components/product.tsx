import ProductCarousel from "./product-carousel";
import { ProductDetails } from "./product-details";
import { ProductGallery } from "./product-gallery";

export const Product = () => {
  return (
    <div className="m-auto max-w-[480px] custom:mt-20 custom:flex custom:max-w-[800px] custom:px-3 lg:max-w-[1100px] lg:px-0">
      <div className="custom:hidden">
        <ProductCarousel />
      </div>
      <div className="hidden custom:block">
        <ProductGallery />
      </div>
      <ProductDetails />
    </div>
  );
};
