import axios from "axios"
import {
    INVOICE_DETAIL_FAIL,
    INVOICE_DETAILS_REQUEST, INVOICE_DETAILS_SUCCESS,
    INVOICE_LIST_FAIL,
    INVOICE_LIST_REQUEST,
    INVOICE_LIST_SUCCESS
} from './types/InvoiceTypes'


export const listInvoice = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: INVOICE_LIST_REQUEST
        })

        const {data} = await axios.get(`/invoice`)

        dispatch({
            type: INVOICE_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: INVOICE_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const listInvoiceDetails = (id) => async (dispatch, getState) => {

    try {
        dispatch({
            type: INVOICE_DETAILS_REQUEST
        })

        const {data} = await axios.get(`/invoice/${id}`)

        dispatch({
            type: INVOICE_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: INVOICE_DETAIL_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })

    }
}