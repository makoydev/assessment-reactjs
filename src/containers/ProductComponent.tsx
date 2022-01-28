import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

export interface Product {
  id: string;
  title: string;
  image: string;
  price: string;
  category: string;
}

const ProductComponent = () => {
  const products = useSelector(
    (state: RootState) => state.allProducts.products
  );
  const renderList = products.map((product: Product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="card-container" key={id}>
        <Link to={`/product/${id}`}>
          <article>
            <div className="card">
              <img className="photo" src={image} alt={title} />

              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">${price}</h4>
                </header>

                <p className="item-text">{category}</p>
              </div>
            </div>
          </article>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
