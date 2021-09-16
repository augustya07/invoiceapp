import react, {useState, useEffect} from 'react'

import {useSelector, useDispatch} from "react-redux";
import {listInvoiceDetails} from "../store/actions/InvoiceActions";
import Loader from "../components/UI/Loader";

const InvoiceScreen = ({match}) => {
    const dispatch = useDispatch()

    const invoiceDetails = useSelector((state) => state.InvoiceDetails)
    const {loading, invoice, error} = invoiceDetails

    useEffect(() => {
        if (!invoice._id || invoice._id !== match.params.id)
            dispatch(listInvoiceDetails(match.params.id))
        console.log(invoice)
    }, [dispatch])

    return (
        <>
            {loading ? (
                <Loader/>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>

                    <p>{invoice._id}</p>
                    {/*{invoice._id === match.params.id ? dispatch(listInvoiceDetails(match.params.id)) : <p> error </p>}*/}
                    <p>{invoice.senderAddress.city}</p>


                </>
            )}


            {/*<p>{invoice._id}</p>*/}
            {/*<p>{invoice.items}</p>*/}
            {/*<p>{invoice.senderAddress.street}</p>*/}


            {/*{invoice.items.map((i) => (*/}
            {/*    <div key={i._id}>*/}
            {/*        <p> {i.street}</p>*/}
            {/*    </div>*/}
            {/*))}*/}


        </>
    )
}

// export default InvoiceScreen