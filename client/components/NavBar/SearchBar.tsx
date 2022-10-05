import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";

interface SearchBarProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ isOpen, setIsOpen }) => {
    return (
        <Wrapper isOpen={isOpen}>
            <div className="page-container">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search in our store..."
                />
                <AiOutlineSearch className="search-icon" />
                <AiOutlineClose
                    className="close-icon"
                    onClick={() => setIsOpen(false)}
                />
            </div>
        </Wrapper>
    );
};

export default SearchBar;

const Wrapper = styled.div`
    position: absolute;
    bottom: ${(props: { isOpen: boolean }) => (props.isOpen ? 0 : "100%")};
    background-color: white;
    height: 100%;
    width: 100%;
    z-index: 99;
    transition: bottom 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

    & > div {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: calc(100% - 2rem);
        height: 100%;
        padding: 0.5rem 0;
        position: relative;
    }

    input {
        width: calc(100% - 3rem);
        padding: 0.75rem 1.5rem;
        height: 100%;
        border: 1px solid #57454530;
        border-radius: 0.25rem;
        font-family: "Montserrat", sans-serif;
        color: #57454590;

        &::placeholder {
            font-family: "Montserrat", sans-serif;
            color: #57454590;
        }

        &:focus {
            outline: 1px solid #57454590;
        }
    }

    .search-icon {
        fill: #57454590;
        position: absolute;
        right: 5rem;
        &:hover {
            cursor: pointer;
        }
    }

    .close-icon {
        fill: #57454590;
        position: absolute;
        right: 1rem;
        &:hover {
            cursor: pointer;
        }
    }
`;
