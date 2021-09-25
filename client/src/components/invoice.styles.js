import styled from "styled-components";

export const StyledInvoices = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--accent);
  //flex-direction: row;
  height:72px;
  border-radius: 8px;
  padding: 0 30px;
  box-shadow: 0 10px 10px -10px rgba(72, 84, 159, 0.100397);
  margin-bottom: 30px;

  .price {
    font-weight: bold;
    font-size: 16px;
  }
  
  .status {
    
  }
`
