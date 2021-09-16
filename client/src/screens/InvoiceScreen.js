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
    }, [dispatch,match])

    return (
        <>

            <p>{invoice._id}</p>
            {/*<p>{invoice.senderAddress}</p>*/}



            {invoice.senderAddress.map((item, index) => (
                <p> {item.street} </p>
            ))}

        </>
    )
}

export default InvoiceScreen