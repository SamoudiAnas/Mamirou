import React from "react";
import styled from "styled-components";

interface ButtonProps {
    styling: "normal" | "reverse";
    text: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick: (arg0: any) => void;
}

const Button: React.FC<ButtonProps> = ({ styling, text, type, onClick }) => {
    return (
        <>
            {styling === "normal" ? (
                <Wrapper type={type} onClick={onClick}>
                    {text}
                </Wrapper>
            ) : (
                <ReverseWrapper type={type} onClick={onClick}>
                    {text}
                </ReverseWrapper>
            )}
        </>
    );
};

export default Button;

const Wrapper = styled.button`
    text-transform: uppercase;

    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 1px;
    padding: 1.5rem 2.5rem;
    position: relative;
    display: block;
    width: auto;
    height: auto;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 4rem 0;
    color: white;
    min-width: 15rem;
    background-color: rgb(34, 34, 34);
`;

const ReverseWrapper = styled.button`
    text-transform: uppercase;
    min-width: 15rem;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    letter-spacing: 1px;
    font-weight: 700;
    padding: 1.5rem 2.5rem;
    position: relative;
    display: block;
    width: auto;
    height: auto;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 4rem 0;
    color: rgb(34, 34, 34);
    background-color: rgba(34, 34, 34, 0.1);
    border: 1px solid rgb(34, 34, 34);
`;
