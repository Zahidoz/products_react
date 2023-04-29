import { useEffect, useState } from "react";

const ProductPage = () => {
  const [product, setProduct] = useState({});

  const getProductById = async() => {
    let x = await localStorage.getItem("productId");
    fetch(`https://fakestoreapi.com/products/${x}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  useEffect(() => {
    getProductById()
  },[]);

  return (
    <div>
      <img src={product.image} />
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
      <h1>{product.price}</h1>
      <h1>{product.category}</h1>
    </div>
  );
};

export default ProductPage;
