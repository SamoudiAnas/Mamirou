import React from "react";
import styled from "styled-components";

interface InputProps {
  name: string;
  placeholder: string;
  label: string;
}

const Input: React.FC<InputProps> = () => {
  return (
    <InputWrapper>
      <input type="text" placeholder=" " />
      <label htmlFor="" className="placeholder">
        First Name
      </label>
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  input {
    border: 1px solid #574545;
    width: 100%;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
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
    left: 8px;
    font-size: 14px;
    padding: 0.25rem 0.5rem;
    color: #63636390;
    transition: 0.3s;
    pointer-events: none;
  }
`;
