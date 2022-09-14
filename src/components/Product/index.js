import './style.css';
import { handleCalculo } from '../../utils/functions';

function Product({ element, handleProduct }) {
  return (
    <div className='container-products' onClick={() => handleProduct(element)}>
      <img src={element.image} alt='produto' />
      <span>{element.name}</span>
      <div className='content-prices'>
        <span>R$ {element.oldPrice.toFixed(2)}</span>
        <h2>R$ {element.currentPrice.toFixed(2)}</h2>
      </div>
      <div className='content-parcelas'>
        <h4>6x R$ {handleCalculo(element.currentPrice)}</h4>
        <span>Sem Juros</span>
      </div>
    </div>
  )
}

export default Product;