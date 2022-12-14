import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Input from "../components/Default UI/Input";
import login from "../utils/auth/login";
import toast from "react-hot-toast";
import Link from "next/link";

const Login: NextPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const router = useRouter();

    const signInHandler = async () => {
        const res: any = await login(email, password);

        res.error ? toast.error(res.error) : router.push("/");
    };

    return (
        <div className="page-container">
            <Wrapper>
                <div>
                    <Title>WELCOME BACK</Title>

                    <form>
                        <Input
                            name="Email Address*"
                            type="email"
                            setInputText={setEmail}
                        />
                        <Input
                            name="Password*"
                            type="password"
                            setInputText={setPassword}
                        />
                    </form>

                    <button
                        type="submit"
                        className="cta-btn"
                        onClick={signInHandler}
                    >
                        LOGIN
                    </button>
                    <p className="switch">
                        New to Marimu?{" "}
                        <Link href="/signup">Create a new account now!</Link>
                    </p>
                </div>
            </Wrapper>
        </div>
    );
};

export default Login;

const Title = styled.h1`
    text-align: center;
    font-family: "PT Serif", serif;
    margin-block: 8rem 2rem;
    position: relative;

    &::before {
        content: "Welcome Back";
        opacity: 0.1;
        white-space: nowrap;
        color: #575454;
        font-family: "Vujahday Script", serif;
        font-size: 8rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
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
        margin-bottom: 4rem;
    }

    .cta-btn {
        display: block;
        margin: 1rem auto 4rem;
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

    .switch {
        text-align: center;
    }
`;
