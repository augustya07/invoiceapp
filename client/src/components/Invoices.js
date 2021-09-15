import react, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {StyledInvoices} from "./invoice.styles";

const Invoices = ({invoice}) => {


    return (
        <>
            <StyledInvoices>
                <div className="">
                    {invoice._id}
                </div>
                <div className="">
                    {invoice.paymentDue}
                </div>

                <div>
                    {invoice.clientName}
                </div>

                <div className="price">
                    {invoice.total}
                </div>
                <div className="status">
                    {invoice.status}
                </div>

                <Link to={`/invoice/${invoice._id}`}>
                    <div className="">
                        Button
                    </div>
                </Link>
            </StyledInvoices>
        </>

    )

}

export default Invoices