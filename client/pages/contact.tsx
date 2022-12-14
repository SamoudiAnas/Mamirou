import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import styled from "styled-components";
import Input from "../components/Default UI/Input";

const Contact = () => {
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    return (
        <Wrapper className="page-container">
            <div className="contact-content">
                <h1 className="contact-title">Contact us</h1>
                <p className="description">
                    Maiores laborum natus amet ullam, quam adipisci distinctio
                    delectus, eligendi ad eaque unde quasi. Quibusdam ducimus
                    excepturi earum iste sit reiciendis autem!
                </p>

                <div className="contact-info">
                    <div>
                        <h3>Our Address</h3>
                        <p className="description">
                            Aliquam non dolores id sed doloremque blanditiis
                            accusamus ut at dignissimos, maiores, voluptas
                            praesentium amet animi, voluptates autem.
                        </p>
                    </div>
                    <div>
                        <h3>Contact Us</h3>
                        <div className="contact-details">
                            <p className="description">+1 000 000 000</p>
                            <FiCopy />
                        </div>
                        <div className="contact-details">
                            <p className="description">mailus@mamiru.com</p>
                            <FiCopy />
                        </div>
                    </div>
                </div>
            </div>
            <form>
                <Input
                    type="text"
                    name="Full name"
                    setInputText={setFullName}
                />
                <Input type="email" name="Your email" setInputText={setEmail} />

                <Input
                    type="text"
                    name="Type a subject"
                    setInputText={setSubject}
                />

                <textarea
                    name="message"
                    id="message"
                    cols={10}
                    rows={10}
                    placeholder="Type a message"
                    aria-label="Enter the message "
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </Wrapper>
    );
};

export default Contact;

const Wrapper = styled.div`
    padding-block: 8rem 4rem;

    @media screen and (min-width: 48rem) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
    }

    .contact-title {
        font-family: "PT Serif", serif;
        font-size: 3rem;
        color: #ec4067;
    }

    h3 {
        font-family: "PT Serif", serif;
        color: #ec4067;
        margin-bottom: 1rem;
    }

    .description {
        color: #725b5b;
    }

    .contact-content {
        margin-block: auto;

        @media screen and (max-width: 48rem) {
            margin-bottom: 4rem;
        }
    }

    .contact-info {
        display: flex;
        gap: 1rem;
        margin-top: 4rem;

        @media screen and (max-width: 30rem) {
            flex-wrap: wrap;
        }
    }

    .contact-details {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;

        svg {
            stroke: #725b5b;
        }
    }

    form {
        padding: 2rem;
        background-color: white;

        @media screen and (max-width: 30rem) {
            padding: 1rem;
        }

        input,
        textarea {
            border: 1px solid #ec4067;
            width: 100%;
            padding: 1rem 1rem;
            margin-bottom: 0.75rem;
            font-family: "Montserrat", sans-serif;
        }

        button[type="submit"] {
            background-color: #ec4067;
            border: 2px solid #ec4067;
            font-weight: 600;
            font-family: "Montserrat", sans-serif;
            color: white;
            padding: 1rem 3rem;
            transition: all 0.3s ease-in-out;

            @media screen and (max-width: 30rem) {
                width: 100%;
            }

            &:hover {
                cursor: pointer;
                color: white;
                background-color: #ec4067;
            }
        }
    }
`;
