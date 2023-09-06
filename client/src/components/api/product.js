import { instance } from "./index";

export const getProducts = async () => {
  const res = await instance.get("/products/?populate=*");
  return res.data;
};

export const getProductByID = async (id) => {
    const res = await instance.get(`/products/${id}/?populate=*`);
    return res.data;
  };
  
