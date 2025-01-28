import React, { createContext, useState } from "react";

type Product = {
  quantity: number;
  totalPrice: number;
};

type ProductContextType = {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
};

export const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [product, setProduct] = useState<Product>({
    quantity: 0,
    totalPrice: 0,
  });

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
