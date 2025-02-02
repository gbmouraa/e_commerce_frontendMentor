import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { carouselImages } from "@/assets/images-group";

const ProductCarousel = () => {
  return (
    <div className="flex items-center">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((item, idx) => (
            <CarouselItem key={idx} className="max-h-[400px] overflow-hidden">
              <img
                src={item}
                alt="Product"
                className="max-h-[360px] w-full object-cover"
              />
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
