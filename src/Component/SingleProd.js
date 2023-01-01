import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import '../styles/styles.css'
import { CartState } from '../Context/Context'

const SingleProd = ({ prod }) => {

  const { state: { cart }, dispatch } = CartState()
  return (
    <div className='singleproduct'>
      <Card>
        <Card.Img variant='top' src={prod.image} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle>
            <span> $ {prod.price}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 Days Delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {
            cart.some(p => p.id === prod.id) ?
              (<Button onClick={() => {
                dispatch({ type: "REMOVE_FROM_CART", payload: prod })
              }} variant="danger">Remove from Cart</Button>) :
              (<Button onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: prod })
              }} disabled={!prod.inStock}>{prod.inStock ? "Add to Cart" : "Out of Stock"}</Button>)
          }
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProd
