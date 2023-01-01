import React from 'react'
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { CartState } from '../Context/Context'
import { AiFillDelete} from 'react-icons/ai'

const Header = () => {

  const {state : {cart},dispatch} = CartState();
  return (
    <Navbar bg="light" variant="dark" style={{height : 80}}>
        <Container>
            <Navbar.Brand>
                <Link to="/">Mini-Store</Link>
            </Navbar.Brand>
            <Navbar.Text>
                <FormControl style={{width: 500}}
                    placeholder="Find Your Dream Product"
                    className="m-auto"
                />
            </Navbar.Text>
            <Nav>
            <Dropdown>
                <Dropdown.Toggle variant='sucess'>
                    <FaShoppingCart color="lightblue" fontSize="25px" />
                    <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{minWidth : 370}}>
                    {cart.length > 0 ? (
                       <>
                       {cart.map((prod) => (
                        <span className="cartItem" key={prod.id}>
                            <img src={prod.image} className="cartItemImage" alt={prod.name} />
                            <div className='cartItemDetails'><span>{prod.name}</span>
                            <span>$ {prod.price}</span></div>
                            <AiFillDelete fontSize="20px" style={{cursor : "pointer"}} 
                            onClick={() => dispatch({type : "REMOVE_FROM_CART",payload : prod})}/>
                        </span>
                       ))}
                       <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                       </>
                    ) : (<span style={{padding : 10}}>Cart is Empty</span>)}
                </Dropdown.Menu>
                       
            </Dropdown>
            </Nav>
        </Container>
    </Navbar>

  )
}

export default Header