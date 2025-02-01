import { useContext } from "react";
import { CarouselContext } from "@/contexts/carousel";

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
