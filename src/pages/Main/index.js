import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Product from '../../components/Product';
import Modal from '../../components/Modal';
import data from '../../data'
import { useState } from 'react';

function Main() {
  const [products, setProducts] = useState([...data]);
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({})

  function handleProduct(product) {
    setOpen(true)
    setCurrentProduct(product)
  }

  function handleClose() {
    setOpen(false)
  }
  return (
    <div className="container">
      <Header />
      <div className='products'>
        {products.map((item) => (
          <Product key={item.id}
            element={item}
            handleProduct={handleProduct} />

        ))}
      </div>
      <Footer />
      <Modal
        open={open}
        handleClose={handleClose}
        product={currentProduct} />
    </div>
  );
}

export default Main;
