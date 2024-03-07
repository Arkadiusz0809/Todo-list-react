import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 0px;
    margin: 0;
    list-style: none;
`;

export const Item = styled.li`
    display: grid;
    border-bottom: 1px solid #ddd;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    padding: 10px;
    display: grid;
    align-items: center;   
    
    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
    text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    width: 30px;
    height: 30px;
    padding: 0;
    display: grid;
    align-items: center;
    transition: background 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: hsl(120, 100%, 35%);
        color: white;

        &:hover {
            background-color: hsl(120, 100%, 40%);
        }
    `}

    ${({remove}) => remove && css`
        background-color: hsl(0, 100%, 45%);

        &:hover {
            background-color: hsl(0, 100%, 50%);

        }
    `}
`;