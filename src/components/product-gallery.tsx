import { useCarousel } from "@/hooks/useCarousel";
import { carouselImages, thumbnails } from "@/assets/images-group";

export const ProductGallery = () => {
  const { carousel, setCarousel } = useCarousel();

  const handleThumbnailClick = (idx: number) => {
    setCarousel((prev) => ({
      ...prev,
      currentImage: idx,
      isOpen: true,
    }));
  };

  return (
    <>
      <div className="relative max-w-[350px] lg:max-w-full lg:px-[60px]">
        <div>
          <img
            src={carouselImages[0]}
            alt="Product"
            className="max-h-[440px] rounded-lg"
          />
        </div>
        <ul className="mt-5 flex justify-between">
          {thumbnails.map((item, idx) => (
            <li key={idx}>
              <button
                onClick={() => handleThumbnailClick(idx)}
                className={`rounded-xl border-2 ${carousel.currentImage === idx ? "border-primary-orange" : "border-transparent"}`}
              >
                <img
                  src={item}
                  alt="Product thumbnail"
                  className={`${carousel.currentImage === idx && "opacity-40"} max-w-[70px] rounded-lg transition-all hover:opacity-70 lg:max-w-[92px]`}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
