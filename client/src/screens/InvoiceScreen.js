import react, {useState, useEffect} from 'react'

import {useSelector, useDispatch} from "react-redux";
import {listInvoiceDetails} from "../store/actions/InvoiceActions";

const InvoiceScreen = ({match}) => {
    const dispatch = useDispatch()

    const invoiceDetails = useSelector((state) => state.InvoiceDetails)
    const {invoice} = invoiceDetails

    useEffect(() => {
        dispatch(listInvoiceDetails(match.params.id))
        console.log(invoice)
    }, [dispatch,])

    return (
        <>
            <h1> {invoice.clientName} </h1>
        </>
    )
}

export default InvoiceScreen