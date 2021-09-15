import react from 'react'
import styled, {css} from 'styled-components';
import iconPlus from '../../assets/icon-plus.svg';


const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  
  margin: 60px 0 ;


  .header-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: auto;

  }

  .dropdown-menu {
    margin-right: 30px;
  }

  button {
    min-width:73px;
    width:auto;
    height: 48px;
    border-radius:24px;
    padding: 0 25px;
    font-weight:700;

    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;


    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items:center;


    border:none;


    

    &:focus{
      outline:none;
    }
  }


  .invoice-btn {
    background-color: #7C5DFA;
    color: #FFFFFF;
    padding: 0 15px 0 10px;

    &:hover {
      background-color: #9277FF;
    }
  }
  
  .img-container{
    background-color: #FFFFFF;
    color:#7C5DFA;
    width:32px;
    height:32px;
    border-radius:50%;
    
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:18px;
  }

`

const StyledInvoiceButton = css`
  background-color: #7C5DFA;
  color: #FFFFFF;
  padding: 0 15px 0 10px;

  &:hover {
    background-color: #9277FF;
  }
`


const Header = () => {
    return (
        <>
            <StyledHeader>

                <div className='header-title'> Invoices <span> there are total 7 items </span></div>
                <div className='dropdown-menu'> filter by status</div>
                <button className='invoice-btn'>
                    <div className='img-container'>
                    <img className='btn-img' src={iconPlus}/>
                    </div>
                    New Invoice
                </button>
            </StyledHeader>


        </>
    )
}

export default Header