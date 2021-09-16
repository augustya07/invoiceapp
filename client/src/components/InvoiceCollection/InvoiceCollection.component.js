import react, {useState, useEffect} from 'react'
import styled, {css} from 'styled-components';
import {useDispatch, useSelector} from 'react-redux'
import {listInvoice} from "../../store/actions/InvoiceActions";
import Invoices from "../Invoices";


const InvoiceCollection = () => {


    const dispatch = useDispatch()
    const invoiceList = useSelector((state) => state.InvoiceList)
    const {invoice} = invoiceList

    useEffect(() => {
        dispatch(listInvoice())

        console.log(invoice)
    }, [dispatch])


    return (
        <>
            {invoice.map((i) => (
                <div key={i._id}>
                    <Invoices invoice={i}/>
                </div>
            ))}
        </>

    )
}

export default InvoiceCollection