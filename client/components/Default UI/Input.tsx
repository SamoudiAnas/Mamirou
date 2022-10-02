import React from "react";
import styled from "styled-components";

interface InputProps {
    name: string;
    placeholder: string;
    label: string;
    type: string;
}

const Input: React.FC<InputProps> = ({ name, label, type }) => {
    return (
        <InputWrapper>
            <input id={name} placeholder=" " type={type} />
            <label htmlFor="" className="placeholder">
                {name}
            </label>
        </InputWrapper>
    );
};

export default Input;

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    color: #707070;
    font-size: 1rem;

    input {
        border: 1px solid #574545;
        width: 100%;
        font-size: 1rem;
        padding: 1rem 1rem;
        margin-bottom: 1rem;
        color: #707070;
        font-family: "Montserrat", sans-serif;

        &:focus + .placeholder,
        &:not(:placeholder-shown) + .placeholder {
            top: -0.75rem;
            background-color: white;
        }
    }

    .placeholder {
        font-family: "Montserrat", sans-serif;
        position: absolute;
        top: 0.75rem;
        left: 9px;
        font-size: 1rem;
        padding: 0.25rem 0.5rem;
        color: #707070;
        transition: 0.3s;
        pointer-events: none;
    }
`;
