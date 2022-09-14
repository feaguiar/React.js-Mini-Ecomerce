import './style.css';
import close from '../../assets/close-icon.svg'
import { handleCalculo } from '../../utils/functions'

function Modal({ open, handleClose, product }) {
    return (
        <>
            {open &&
                <div className='container-modal'>
                    <div className='modal'>
                        <div className='modal-body'>
                            <img className='product-image' src={product.image} alt='shoes' />
                            <img className='close' src={close} alt='close' onClick={() => handleClose()} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>

                            <div className='container-buy'>
                                <button className='btn-buy'>COMPRAR</button>


                                <div className='container-price'>
                                    <div className='content-prices'>
                                        <span>R$ {product.oldPrice.toFixed(2)}</span>
                                        <h2>R$ {product.currentPrice.toFixed(2)}</h2>
                                    </div>
                                    <div className='content-parcelas'>
                                        <h4>6x R$ 38,00</h4>
                                        <span>Sem Juros</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal;