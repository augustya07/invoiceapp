import react from 'react';
import styled, {css} from 'styled-components'


const buttonStyles=css`
  background-color:  #7C5DFA;
  color:#FFFFFF;
  &:hover{
    background-color: #9277FF;
  }

`;

const redButtonStyles=css`
background-color:  #EC5757;
color:#FFFFFF;
&:hover{
    background-color: #FF9797;
    color:#FFFFFF;
}

`;
const whiteButtonStyles=css`
background-color:  #F9FAFE;
color:#7E88C3;
&:hover{
    background-color: #DFE3FA;
    color:#7E88C3;
}
`;

const darkButtonStyles=css`
background-color:  #373B53;
color:#888EB0;
&:hover{
    background-color: #0C0E16;
    color:#888EB0;
}
`;


const invoiceButtonStyles=css`
background-color:  #7C5DFA;
color:#FFFFFF;
padding: 0 15px 0 10px;
&:hover{
    background-color: #9277FF;
}

`;
const getButtonStyles=props=>{
    if(props.isRed){
        return redButtonStyles;
    }
    if(props.isWhite){
        return whiteButtonStyles;
    }
    if(props.isDark){
        return darkButtonStyles;
    }
    return props.isNewInvoice ?  invoiceButtonStyles : buttonStyles;
}

const CustomButtonContainer=styled.button`
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


${getButtonStyles};

&:focus{
    outline:none;
}
`;

const CustomButtonImageContainer=styled.div`
background-color: #FFFFFF;
color:#7C5DFA;
width:32px;
height:32px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
margin-right:18px;
`;


const Button = (props) => {

    return (
<CustomButtonContainer>
    <button onClick={props.handleClick}   > {props.children}</button>
</CustomButtonContainer>

    )
}

export default Button

