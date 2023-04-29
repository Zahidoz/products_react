import './style.scss'
import {useNavigate} from 'react-router-dom'

const ProductCard = ({product}) => {
  const navigate = useNavigate()

  const BtnAdd = async() => {
    let x = await localStorage.setItem("productId",product.id)
    navigate('/product')
  }
  return (
    <div className="productCard">
      <img src={product.image} alt="" />
      <h1>{product.title}</h1>
  
        <button onClick={BtnAdd}>Buy Now</button>
    </div>
  );
}

export default ProductCard