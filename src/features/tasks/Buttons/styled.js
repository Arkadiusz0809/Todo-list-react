import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media(max-width : 767px) {
        flex-basis: 100%;
        margin : 10px;
    }
`;

export const ButtonsButton = styled.button`
    background-color: white;
    border: none;
    color: teal;
    margin: 0 0 0 20px;
    transition: color 0.3s;

    &:hover{
        color: hsl(180, 100%, 35%);
    }

    &:disabled{
        color: #ccc;
    }

    @media(max-width:767px){
        flex-basis: 100%;
        margin : 10px;
    }
`;
