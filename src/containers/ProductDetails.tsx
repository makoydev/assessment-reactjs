import "../App.css";
import { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import { RootState } from "../redux/reducers";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  let product = useSelector((state: RootState) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id: any) => {
    const response: any = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);
  return (
    <div className="product">
      {Object.keys(product).length === 0 ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="product-container">
          <div className="product-flex">
            <div className="img-container">
              <img className="img" src={image} alt={title} />
            </div>
            <div className="product-right">
              <h1 className="product-title">{title}</h1>
              <button className="product-price">${price}</button>
              <h3 className="product-cat">{category}</h3>
              <p>{description}</p>
              <div>
                <button
                  className="back-btn"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Go back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
