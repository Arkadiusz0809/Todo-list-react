import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: 767px)
    {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    color: #ffffff;
    background-color: hsl(180, 100%, 20%);
    border: none;
    padding: 10px;
    transition: 0.3s;

    &:hover{
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.1);
    }
`;