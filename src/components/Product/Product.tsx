import Rating from "../Rating/Rating";
import "./Product.scss";

type TProduct = {
  product: any;
};

const Product: React.FC<TProduct> = ({ product }) => {
  return (
    <div className="card">
      <p className="card__category">{product.category}</p>
      <div className="card__imageWrapper">
        <img className="card__image" src={product.image} />
      </div>
      <div className="card__ratingBar">
        <Rating rate={product.rating.rate} />
        <p className="card__rating">{`${product.rating.rate} / 5`}</p>
      </div>
      <p className="card__title">{product.title.substring(0, 50)}...</p>
      <p className="card__price">{product.price}$</p>
    </div>
  );
};

export default Product;
