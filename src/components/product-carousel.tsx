import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import image01 from "../assets/image-product-1.jpg";
import image02 from "../assets/image-product-2.jpg";
import image03 from "../assets/image-product-3.jpg";
import image04 from "../assets/image-product-4.jpg";

const ProductCarousel = () => {
  const carouselImages: string[] = [image01, image02, image03, image04];

  return (
    <div className="flex items-center">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((item, idx) => (
            <CarouselItem key={idx} className="max-h-[400px] overflow-hidden">
              <img src={item} alt="Product" className="w-full" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3" />
        <CarouselNext className="right-3" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
