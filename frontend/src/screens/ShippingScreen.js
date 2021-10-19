import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";

const ShippingScreen = ({ history }) => {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')

    return (
        <div>
            Shipping
        </div>
    )
}

export default ShippingScreen