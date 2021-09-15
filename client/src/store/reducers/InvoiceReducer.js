import {
    INVOICE_LIST_SUCCESS,
    INVOICE_LIST_REQUEST,
    INVOICE_LIST_FAIL,
    INVOICE_DETAILS_REQUEST, INVOICE_DETAILS_SUCCESS, INVOICE_DETAIL_FAIL
} from '../actions/types/InvoiceTypes'
import invoice from "../../../../routes/invoice";

export const InvoiceListReducer = (state = {invoice: []}, action) => {
    switch (action.type) {
        case INVOICE_LIST_REQUEST:
            return {loading: true, invoice: []}
        case INVOICE_LIST_SUCCESS:
            return {loading: false, invoice: action.payload}
        case INVOICE_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}


export const InvoiceDetailsReducer = (state = {invoice: []}, action) => {
    switch (action.type) {
        case INVOICE_DETAILS_REQUEST:
            return {loading: true, invoice: []}
        case INVOICE_DETAILS_SUCCESS:
            return {loading: false, invoice: action.payload}
        case INVOICE_DETAIL_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state


    }

}
