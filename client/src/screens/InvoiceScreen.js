import react, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from "react-redux";
import dayjs from 'dayjs'


import {listInvoiceDetails} from "../store/actions/InvoiceActions";
import Loader from "../components/UI/Loader";


const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 2rem;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  padding: 1.5rem;
  transition: background .3s;

  .invoice-table {
    grid-column: 1 / -1;
    grid-row: 6 / 7;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 1.25rem;
  }
`

// title

const Title = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
`

const Id = styled.h1`
  margin-bottom: .25rem;
  font-size: .75rem;

  span {
    color: #7E88C3;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: .5rem;
    font-size: 1rem;
  }
`

const Description = styled.span`
`

// sender address

const SenderAddress = styled.address`
  display: flex;
  flex-direction: column;
  font-style: normal;

  @media only screen and (min-width: 768px) {
    text-align: end;
  }
`

// dates

const Dates = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`

const Date = styled.div`
  display: flex;
  flex-direction: column;
`

const DateTitle = styled.span`
  margin-bottom: .25rem;
  font-size: .75rem;
`

const Subheading = styled.h3`
  text-decoration: none;

  && {
    font-size: .9375rem;
  }
`

// client address

const ClientAddress = styled.address`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  display: flex;
  flex-direction: column;
  font-style: normal;

  & *:nth-child(1) {
    margin-bottom: .5rem;
  }

  & *:nth-child(2) {
    margin-bottom: .25rem;
  }
`

// client email

const Email = styled.div`
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
        grid-column: 3 / 4;
        grid-row: 3 / 4;
    }
`

const EmailTitle = styled.span`
    margin-bottom: .25rem;
    font-size: .75rem;
`




const InvoiceScreen = ({match}) => {
    const dispatch = useDispatch()

    const invoiceDetails = useSelector((state) => state.InvoiceDetails)
    const {loading, invoice, error} = invoiceDetails

    useEffect(() => {
        if (!invoice._id || invoice._id !== match.params.id)
            dispatch(listInvoiceDetails(match.params.id))
        console.log(invoice)
    }, [dispatch, match])

    return (
        <>
            {loading ? (
                <Loader/>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <Wrapper exit={{ opacity: 0, transition: { duration: 1 }}}>
                    <Title>
                        <Id><span>#</span>{invoice.id}</Id>
                        <Description>{invoice.description}</Description>
                    </Title>

                    <SenderAddress>
                        <span>{invoice.senderAddress.street}</span>
                        <span>{invoice.senderAddress.city}</span>
                        <span>{invoice.senderAddress.postCode}</span>
                        <span>{invoice.senderAddress.country}</span>
                    </SenderAddress>

                    <Dates>
                        <Date>
                            <DateTitle>Invoice Date</DateTitle>
                            <Subheading as="span">{dayjs(invoice.createdAt).format('DD MMM YYYY')}</Subheading>
                        </Date>
                        <Date>
                            <DateTitle>Payment Due</DateTitle>
                            <Subheading as="span">{dayjs(invoice.paymentDue).format('DD MMM YYYY')}</Subheading>
                        </Date>
                    </Dates>

                    <ClientAddress>
                        <div>Bill To</div>
                        <Subheading as="div">{invoice.clientName}</Subheading>
                        <span>{invoice.clientAddress.street}</span>
                        <span>{invoice.clientAddress.city}</span>
                        <span>{invoice.clientAddress.postCode}</span>
                        <span>{invoice.clientAddress.country}</span>
                    </ClientAddress>

                    <Email>
                        <EmailTitle>Sent to</EmailTitle>
                        <Subheading as="a" href={`mailto:${invoice.clientEmail}`}>{invoice.clientEmail}</Subheading>
                    </Email>
                    <div>Table</div>

                    {/*<InvoiceTable className="invoice-table" items={invoice.items} total={invoice.total}/>*/}
                </Wrapper>
            )}
        </>
    )
}

export default InvoiceScreen