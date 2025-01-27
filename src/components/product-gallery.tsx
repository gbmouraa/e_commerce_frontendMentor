import { useState } from "react";

import productImage from "../assets/image-product-1.jpg";
import thumbnail01 from "../assets/image-product-1-thumbnail.jpg";
import thumbnail02 from "../assets/image-product-2-thumbnail.jpg";
import thumbnail03 from "../assets/image-product-3-thumbnail.jpg";
import thumbnail04 from "../assets/image-product-4-thumbnail.jpg";

export const ProductGallery = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const thumbnails: string[] = [
    thumbnail01,
    thumbnail02,
    thumbnail03,
    thumbnail04,
  ];

  return (
    <div className="max-w-[350px] lg:max-w-full lg:px-[60px]">
      <div>
        <img
          src={productImage}
          alt="Product"
          className="max-h-[440px] rounded-lg"
        />
      </div>
      <ul className="mt-5 flex justify-between">
        {thumbnails.map((item, idx) => (
          <li key={idx}>
            <button
              onClick={() => setCurrentImage(idx)}
              className={`rounded-xl border-2 ${currentImage === idx ? "border-primary-orange" : "border-transparent"}`}
            >
              <img
                src={item}
                alt="Product thumbnail"
                className={`${currentImage === idx && "opacity-40"} max-w-[70px] rounded-lg transition-all hover:opacity-70 lg:max-w-[92px]`}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
