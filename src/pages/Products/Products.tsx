import "./Products.scss";
import { useSelector } from "react-redux";
import {
  getProductsError,
  getProductsStatus,
  selectAllProducts,
} from "../../store/productsSlice";
import Product from "../../components/Product/Product";
import Filters from "../../components/Filters/Filters";

const Products: React.FC = () => {
  const products = useSelector(selectAllProducts);
  const productsStatus = useSelector(getProductsStatus);
  const error = useSelector(getProductsError);

  let content;

  if (productsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (productsStatus === "succeeded") {
    content = products.map((product: any) => {
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
