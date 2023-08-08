import "./Products.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getProductsError,
  getProductsStatus,
  selectAllProducts,
} from "../../store/productsSlice";
import Product from "../../components/Product/Product";
import Filters from "../../components/Filters/Filters";
import { IProduct } from "../../types/Products.interface";

const Products: React.FC = () => {
  const products = useSelector(selectAllProducts);
  const productsStatus = useSelector(getProductsStatus);
  const error = useSelector(getProductsError);

  let content;

  if (productsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (productsStatus === "succeeded") {
    console.log("map");
    content = products?.map((product: IProduct) => {
      return <Product product={product} key={product.id} />;
    });
  } else if (productsStatus === "failed") {
    content = <p>{error}</p>;
  }
  return (
    <div className="content">
      <Filters />
      <div className="products">{content}</div>
    </div>
  );
};

export default Products;
