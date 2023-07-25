import "./Rating.scss";
import greyStar from "../../assets/grey-star.png";
import goldStar from "../../assets/gold-star.png";

const Rating: React.FC<{ rate: number }> = ({ rate }) => {
  const productRating: number = Number(Math.ceil((rate / 5) * 100));
  return (
    <div className="rating">
      <img src={greyStar} className="rating__image" />
      <img src={greyStar} className="rating__image" />
      <img src={greyStar} className="rating__image" />
      <img src={greyStar} className="rating__image" />
      <img src={greyStar} className="rating__image" />
      <div
        className=" rating rating__count"
        style={{ width: `${productRating}%` }}
      >
        <img src={goldStar} className="rating__image" />
        <img src={goldStar} className="rating__image" />
        <img src={goldStar} className="rating__image" />
        <img src={goldStar} className="rating__image" />
        <img src={goldStar} className="rating__image" />
      </div>
    </div>
  );
};

export default Rating;
