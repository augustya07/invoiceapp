import react from "react";
import Button from "../components/UI/button";
import Header from "../components/UI/Header";
import styled from "styled-components";
import Invoices from "../components/Invoices";
import InvoiceCollection from "../components/InvoiceCollection/InvoiceCollection.component";

const StyledHomeScreen = styled.div`

  width: 50%;
  margin: auto;

`

const Homepage = () => {
    return (
        <>
            <StyledHomeScreen>
                <Header/>
                <InvoiceCollection/>
            </StyledHomeScreen>

        </>
    )
}

export default Homepage