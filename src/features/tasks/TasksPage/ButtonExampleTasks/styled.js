import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    color: teal;
    border-style: none;
    background-color: white;

    &:hover {
        color: hsl(180, 100%, 35%);
    }
    &:disabled{
        color: #ccc;
    }
`;

