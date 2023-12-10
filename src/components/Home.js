import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';

const Home = ({searchTerm}) => {

  const {
    state : {products}
  } = CartState();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='productContainer'>
        {
          filteredProducts.map((product) => {
            return <SingleProduct product={product} key={product.id}/>
          })
        }
      </div>
    </div>
  )
}

export default Home