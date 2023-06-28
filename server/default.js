import { products } from "./constants/data.js";
import Product from "./model/product_Schema.js";

const DefaultData = async() => {
  try {
    
    await Product.insertMany(products);

    console.log("Data imported successfully");
  } catch (err) {
    console.log("Error while importing default data", err.message);
  }
}

export default DefaultData;