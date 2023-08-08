import "./Filters.scss";
import { getAllCategories } from "../../store/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import Button from "../Button/Button";
import {
  filterByCategory,
  clearFilters,
  selectAll,
} from "../../store/productsSlice";
import { IProducts } from "../../types/Products.interface";

const Filters: React.FC = () => {
  const dispatch = useDispatch();

  const onButtonClick = (cat: string) => {
    dispatch(filterByCategory(cat));
  };

  const onClearFilters = () => {
    dispatch(clearFilters());
  };

  const fetchCategories = useSelector(getAllCategories);
  const renderCategories = fetchCategories.map((cat: string) => (
    <p
      key={nanoid()}
      className="filters__categoryName"
      onClick={() => onButtonClick(cat)}
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
        fun={() => onClearFilters()}
      />
      <p className="filters__categoryHeader">
        Category &#40;{fetchCategories.length}&#41;
      </p>
      <div className="filters__categories">{renderCategories}</div>
    </div>
  );
};

export default Filters;
