import "./Filters.scss";
import { getAllCategories } from "../../store/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import Button from "../Button/Button";
import {
  filterByCategory,
  selectAllProducts,
  clearFilters,
} from "../../store/productsSlice";
import { ICategories } from "../../types/Categories.interface";

const Filters: React.FC = () => {
  const dispatch = useDispatch();

  const fetchCategories = useSelector(getAllCategories);
  const renderCategories = fetchCategories.map((cat: string) => (
    <p
      key={nanoid()}
      className="filters__categoryName"
      onClick={() => dispatch(filterByCategory(cat))}
    >
      {cat}
    </p>
  ));

  return (
    <div className="filters">
      <p className="filters__header">Filters</p>
      <Button
        text="Clear Filters"
        style="primary"
        onClick={() => dispatch(clearFilters)}
      />
      <p className="filters__categoryHeader">
        Category &#40;{fetchCategories.length}&#41;
      </p>
      <div className="filters__categories">{renderCategories}</div>
    </div>
  );
};

export default Filters;
