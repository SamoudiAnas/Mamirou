import styled from "styled-components";
import Input from "../components/Default UI/Input";

const Signup = () => {
    return (
        <div className="page-container">
            <Wrapper>
                <div>
                    <Title>WELCOME BACK</Title>

                    <form>
                        <Input
                            name="Email Address*"
                            placeholder="Email Address"
                            label="Email Address"
                            type="email"
                        />
                        <Input
                            name="Password*"
                            placeholder="Password"
                            label="Password"
                            type="password"
                        />
                    </form>

                    <button type="submit" className="cta-btn">
                        LOGIN
                    </button>
                </div>
            </Wrapper>
        </div>
    );
};

export default Signup;

const Title = styled.h1`
    text-align: center;
    font-family: "PT Serif", serif;
    margin-block: 8rem 2rem;
`;

const Wrapper = styled.div`
    max-width: 35rem;
    min-height: 80vh;
    margin-inline: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
        width: 100%;
    }

    .cta-btn {
        display: block;
        margin: 1rem auto 8rem;
        padding: 1rem 3rem;
        background-color: #574545;
        border: 2px solid #574545;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
        color: white;
        transition: all 0.3s ease-in-out;

        &:hover {
            cursor: pointer;
            color: white;
            background-color: #574545;
        }
    }
`;
