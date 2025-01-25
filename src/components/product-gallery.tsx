import productImage from "../assets/image-product-1.jpg";
import thumbnail01 from "../assets/image-product-1-thumbnail.jpg";
import thumbnail02 from "../assets/image-product-2-thumbnail.jpg";
import thumbnail03 from "../assets/image-product-3-thumbnail.jpg";
import thumbnail04 from "../assets/image-product-4-thumbnail.jpg";

export const ProductGallery = () => {
  const thumbnails: string[] = [
    thumbnail01,
    thumbnail02,
    thumbnail03,
    thumbnail04,
  ];

  return (
    <div className="max-w-[350px] lg:max-w-full">
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
            <img
              src={item}
              alt="Product thumbnail"
              className="max-w-[70px] rounded-lg lg:max-w-[92px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
