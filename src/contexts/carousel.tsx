import React, { createContext, useState } from "react";

type Carousel = {
  isOpen: boolean;
  currentImage: number;
};

type CarouselContextType = {
  carousel: Carousel;
  setCarousel: React.Dispatch<React.SetStateAction<Carousel>>;
};

export const CarouselContext = createContext<CarouselContextType | null>(null);

export const CarouselProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [carousel, setCarousel] = useState<Carousel>({
    isOpen: false,
    currentImage: 0,
  });

  return (
    <CarouselContext.Provider value={{ carousel, setCarousel }}>
      {children}
    </CarouselContext.Provider>
  );
};
