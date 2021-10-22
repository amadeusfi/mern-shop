import {ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL } from "../constants/orderConstants";
import axios from "axios";

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()
        // get token and add to the header
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }
        // make request to the backend
        const { data } = await axios.post(`/api/orders`, order, config)
        // if successful send the state and show message
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload:
                error.response && error.response.date.message
                    ? error.message.data.message
                    : error.message,
        })
    }
}