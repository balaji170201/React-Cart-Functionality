import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context'
import { ListGroup,Row,Col, Image,Button } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai';

const Cart = () => {

  const {
    state : {cart},
    dispatch
  } = CartState();

  const [total,setTotal] = useState();

  const handleIncrement = (productId) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: productId } });
  };

  const handleDecrement = (productId) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: productId } });
  };

  useEffect(() => {
    setTotal(cart.reduce((acc,curr) => acc + Number(curr.price) * curr.qty,0))
  },[cart]);

  return (
    <div className='home'>
      <div className='cartProductContainer'>
        <ListGroup>
          {
            cart.map((product) => (
              <ListGroup.Item key={product.id}>
                <Row>
                  <Col md={2}>
                    <Image src={product.images} alt={product.title} fluid rounded/>
                  </Col>
                  <Col md={2}>
                    <span>{product.title}</span>
                  </Col>
                  <Col md={2}>
                    <span>₹ {product.price}</span>
                  </Col>
                  <Col md={2}>
                  <div className='quantityContainer'>
                    <Button onClick={() => handleDecrement(product.id)} style={{padding:'0 10px',marginRight:'10px'}}>
                      -
                    </Button>
                    <span style={{marginRight:'10px'}}>{product.qty}</span>
                    <Button onClick={() => handleIncrement(product.id)} style={{padding:'0 10px'}}  >
                      +
                    </Button>
                  </div>
                  </Col>
                  <Col>
                    <Button 
                      type='button'
                      variant='danger'
                      onClick={() => 
                        dispatch({
                          type:'REMOVE_FROM_CART',
                          payload:product,
                        })
                      }
                    >
                        <AiFillDelete fontSize='20px'/>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      </div>
      <div className='filters summary'>
          <span className='title'>
            Subtotal ({cart.length}) items
          </span>
          <span style={{fontWeight:'700px',fontSize:'20px'}}>Total :₹ {total}</span>
      </div>
    </div>
  )
}

export default Cart