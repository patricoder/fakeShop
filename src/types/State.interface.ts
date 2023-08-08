import { ICategories } from "./Categories.interface";
import { IProducts } from "./Products.interface";

export interface IState {
  categories: ICategories;
  products: IProducts;
}
