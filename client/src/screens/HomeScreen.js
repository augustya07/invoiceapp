import react from "react";
import Button from "../components/UI/button";
import Header from "../components/UI/Header";
import styled from "styled-components";

const StyledHomeScreen = styled.div`

  width: 50%;
  margin: auto;

`

const Homepage = () => {
    return (
        <>
            <StyledHomeScreen>
                <Header/>
            </StyledHomeScreen>

        </>

    )
}

export default Homepage