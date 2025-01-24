import { BuyProduct } from "./buy-product";

export const ProductDetails = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <span className="font-medium text-primary-orange">SNEAKER COMPANY</span>
        <h1 className="my-3 text-3xl font-bold">
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
