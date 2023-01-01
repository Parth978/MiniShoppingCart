import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { CartState } from '../Context/Context';
import '../styles/styles.css'
import Rating from './Rating';

const Filter = () => {
    // const [rate, setRate] = useState(3);

    const {
        productDispatch,
        productState: { byStock, byFastDelivery, sort, byRating },
      } = CartState();
    return (
        <div className='filters'>
            <span className='filter-heading'>Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange ={
                        () => {
                            productDispatch({
                                type : "SORT_BY_PRICE",
                                payload : "lowToHigh"
                            })
                        }
                    }
                    checked = {sort === "lowToHigh"?true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange = {
                        () => {
                            productDispatch({
                                type : "SORT_BY_PRICE",
                                payload : "HighToLow"
                            })
                        }
                    }
                    checked = {sort === "HighToLow"?true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Include Out of Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={
                        () => 
                        productDispatch({
                            type : "FILTER_BY_STOCK", 
                        })
                    }
                    checked = {byStock}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Fast Delivery Only"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange={
                        () => 
                        productDispatch({
                            type : "FILTER_BY_DELIVERY", 
                        })
                    }
                    checked = {byFastDelivery}
                />
            </span>
            <span>
                <label style={{ paddingRight: '20px' }}>Rating:</label>
                <Rating rating={byRating} onClick={(i) => productDispatch({ type: "FILTER_BY_RATING", payload: i + 1 })} style={{ cursor: 'pointer' }} />
            </span>
            <Button variant='light'>Clear Filter</Button>

        </div>
    )
}

export default Filter
