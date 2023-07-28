import "./Filters.scss";
import { getAllCategories } from "../../store/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import Button from "../Button/Button";
import { clearFilters, selectAllProductsData } from "../../store/productsSlice";
import { productsFilter } from "../../store/productsSlice";
const Filters = () => {
  const dispatch = useDispatch();
  const getAllProducts = useSelector(selectAllProductsData);

  const onFilterClick = (cat: string) => {
    const arr = getAllProducts.filter(
      (product: any) => product.category === cat
    );
    dispatch(productsFilter(arr));
  };

  const onClearFilter = () => {};

  const fetchCategories = useSelector(getAllCategories);
  const renderCategories = fetchCategories.map((cat: string) => (
    <p
      key={nanoid()}
      className="filters__categoryName"
      onClick={() => onFilterClick(cat)}
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
        onClick={() => onClearFilter()}
      />
      <p className="filters__categoryHeader">
        Category &#40;{fetchCategories.length}&#41;
      </p>
      <div className="filters__categories">{renderCategories}</div>
    </div>
  );
};

export default Filters;
