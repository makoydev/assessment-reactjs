import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import { RootState } from "../redux/reducers";
import { Navigate } from "react-router-dom";

const ProductPage = () => {
  const [error, setError] = useState<String | null>(null);

  const products = useSelector(
    (state: RootState) => state.allProducts.products
  );
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response: any = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });

    if (response.status === 404) {
      setError("Product not found");
    }

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("Products :", products);

  if (error) {
    return <Navigate to="/" />;
  }
  return (
    <div className="menu-item">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
