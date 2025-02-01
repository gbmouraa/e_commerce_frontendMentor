import React from "react";
import { useCarousel } from "@/hooks/useCarousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import image01 from "../assets/image-product-1.jpg";
import image02 from "../assets/image-product-2.jpg";
import image03 from "../assets/image-product-3.jpg";
import image04 from "../assets/image-product-4.jpg";
import thumbnail01 from "../assets/image-product-1-thumbnail.jpg";
import thumbnail02 from "../assets/image-product-2-thumbnail.jpg";
import thumbnail03 from "../assets/image-product-3-thumbnail.jpg";
import thumbnail04 from "../assets/image-product-4-thumbnail.jpg";
import { X } from "lucide-react";

export const ProductCarouselDesktop = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const { carousel, setCarousel } = useCarousel();

  const carouselImages: string[] = [image01, image02, image03, image04];
  const thumbnails: string[] = [
    thumbnail01,
    thumbnail02,
    thumbnail03,
    thumbnail04,
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length - 1);
    setCurrent(carousel.currentImage);

    api.scrollTo(carousel.currentImage);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap);
      setCarousel((prev) => ({
        ...prev,
        currentImage: api.selectedScrollSnap(),
      }));
    });
  }, [api]);

  const handleThumbnailClick = (idx: number): void => {
    if (api) {
      api.scrollTo(idx);
    }

    setCarousel((prev) => ({
      ...prev,
      currentImage: idx,
    }));

    setCurrent(idx);
  };

  const closeCarousel = () => {
    setCarousel((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  if (!carousel.isOpen) {
    return <></>;
  }

  return (
    <div className="absolute top-0 flex h-screen w-screen items-center justify-center bg-[#0a0a0ac4]">
      <div className="flex flex-col">
        <button className="mb-3 flex" onClick={closeCarousel}>
          <X color="#fff" className="ml-auto" />
        </button>
        <Carousel setApi={setApi} className="mb-6">
          <CarouselContent className="w-[420px]">
            {carouselImages.map((item, idx) => (
              <CarouselItem key={idx} className="overflow-hidden">
                <img
                  src={item}
                  alt="Product"
                  className="w-full rounded-lg object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4" />
          <CarouselNext className="-right-4" />
        </Carousel>
        <ul className="flex justify-evenly">
          {thumbnails.map((item, idx) => (
            <li key={idx}>
              <button
                className={`rounded-xl border-2 ${current === idx ? "border-primary-orange" : "border-transparent"} relative overflow-hidden`}
                onClick={() => handleThumbnailClick(idx)}
              >
                <img
                  src={item}
                  alt="Thumbnail"
                  className={`${current === idx && "opacity-60"} current === idx && 'opacity-40' w-[70px] rounded-lg`}
                />
                {current === idx && (
                  <div className="absolute left-0 top-0 h-[70px] w-[70px] rounded-lg bg-[#ffffffa2]" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
