import { BuyProduct } from "./buy-product";

export const ProductDetails = () => {
  return (
    <div className="flex-col p-6 custom:flex custom:max-w-[430px] custom:px-10 custom:py-0 lg:mt-16 lg:max-w-[480px] lg:px-10">
      <div className="mb-6">
        <span className="font-medium text-primary-orange">SNEAKER COMPANY</span>
        <h1 className="my-3 text-3xl font-bold leading-[1.20] custom:mb-9 custom:text-[42px]">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-zinc-500">
          These low profile sneakers are your perfect casual wear companion.
          Featuringa durable rubber outer sole, they'll withstand everything the
          weather can offer.
        </p>
      </div>
      <BuyProduct />
    </div>
  );
};
