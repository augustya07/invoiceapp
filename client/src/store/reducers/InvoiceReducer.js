import {
    INVOICE_LIST_SUCCESS,
    INVOICE_LIST_REQUEST,
    INVOICE_LIST_FAIL,
    INVOICE_DETAILS_REQUEST, INVOICE_DETAILS_SUCCESS, INVOICE_DETAIL_FAIL
} from '../actions/types/InvoiceTypes'

export const InvoiceListReducer = (state = {invoice: []}, action) => {
    switch (action.type) {
        case INVOICE_LIST_REQUEST:
            return {
                ...state,
                loading: true, invoice: []
            }
        case INVOICE_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                invoice: action.payload
            }
        case INVOICE_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}


export const InvoiceDetailsReducer = (state = {invoice: []}, action) => {
    switch (action.type) {
        case INVOICE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true, invoice: []
            }
        case INVOICE_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                invoice: action.payload
            }
        case INVOICE_DETAIL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state


    }

}
