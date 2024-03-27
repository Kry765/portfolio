import styled from "styled-components";

const BtnAction = styled.button`
        border-style: none;
        background-color: #64CCC5;
        color: #fff;
        border-radius: 15px;
        height: 50px;
        width: 250px;
        font-weight: bold;
        text-transform: uppercase;
        transition: background-color 0.7s;
        &:hover{
            background-color: #176B87;
            cursor: pointer;
        }

`

const HeaderBtn = () => {
    return(
        <BtnAction>Let's Go</BtnAction>
    )
}

export default HeaderBtn;
