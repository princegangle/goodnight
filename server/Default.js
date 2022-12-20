import { products } from "./constent/Data.js";
import Product from "./modale/Product-schema.js";

const Defaultdata = async () => {
  try {
    await Product.insertMany(products);

    console.log("o   vcxvvvk");
  } catch (error) {
    console.log("can not prinnt", error.message);
  }
};
export default Defaultdata;
