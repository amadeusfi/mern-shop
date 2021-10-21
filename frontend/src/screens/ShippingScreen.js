import React, { useState } from 'react'
import {Form, Button, FormLabel} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import {saveShippingAddress} from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import FormContainer from "../components/FormContainer";

const ShippingScreen = ({ history }) => {

    const cart = useSelector(state => state.cart)

    const {shippingAddress } = cart
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        //this data is coming from the form
        dispatch(saveShippingAddress({ address, city, postalCode, country}))
        //go to next page ({ history }) allow it
        history.push('payment')
        console.log('submit')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='enter address'
                        value={address}
                        required
                        onChange={(e) => setAddress(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='enter city'
                        value={city}
                        required
                        onChange={(e) => setCity(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='postalCode'>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='enter postal code'
                        value={postalCode}
                        required
                        onChange={(e) => setPostalCode(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='country'>
                    <FormLabel>Country</FormLabel>
                    <Form.Control
                        type='text'
                        placeholder='enter country'
                        value={country}
                        required
                        onChange={(e) => setCountry(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Continue</Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen