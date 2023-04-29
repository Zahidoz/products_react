import Nav from "../../Components/Nav"
import {useEffect,useState} from 'react'
import ProductCard from "../../Components/ProductCard"
import './style.scss'

const ProductsPage = () => {
  const [products,setProducts] = useState([])

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  },[])

  return (
    <div>
      <Nav />
      <div className="products-s">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default ProductsPage