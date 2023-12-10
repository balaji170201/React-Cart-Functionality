import React from 'react'
import { Card,Button } from 'react-bootstrap';
import { CartState } from '../context/Context';

const SingleProduct = ({product}) => {

  const {
    state:{cart},
    dispatch,
  } = CartState();

  return (
    <div className='singleProduct'>
      <Card>
        <Card.Img variant='top' src={product.images} alt={product.title} className='image'/>
        <Card.Body>
          <Card.Title style={{textAlign:'center',paddingBottom:'10px'}}>{product.title}</Card.Title>
          <Card.Subtitle style={{display:'flex',justifyContent:'space-evenly'}}>
            <span>Price : ₹{product.price}</span>
            <span>Brand : {product.brand}</span>
            <span>Rating : {product.rating}</span>
          </Card.Subtitle>
          <div style={{display:'flex',justifyContent:'center',paddingTop:'20px'}}>
          {
            cart.some(p => p.id === product.id) ? (<Button 
              onClick={() => {
                dispatch({
                  type:'REMOVE_FROM_CART',
                  payload:product
                })
              }}
              variant='danger'>Remove from cart</Button>) : (
            <Button
              onClick={() => {
                dispatch({
                  type:'ADD_TO_CART',
                  payload:product
                })
              }}
            >Add to cart</Button>)
          }
          </div>       
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct