import { useEffect, useState } from "react";
import Nav from '../../Components/Nav'
import './style.scss'

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const getProductById = async () => {
    let x = await localStorage.getItem("productId");
    fetch(`https://fakestoreapi.com/products/${x}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  useEffect(() => {
    getProductById();
  }, []);

  const AddItemToBasket = () => {
     
  }

  return (
    <div>
      <Nav/>
      <div className="product-s">
        <div className="container">
          <img src={product.image} />
          <div className="product-txt-s">
            <span>{product.category}</span>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <button onClick={AddItemToBasket}>
              Add To Card {product.price} $
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
