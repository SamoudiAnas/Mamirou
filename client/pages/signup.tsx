import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import Button from "../components/Default UI/Button";
import Input from "../components/Default UI/Input";
import login from "../utils/auth/login";

const Signup = () => {
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [emailConfirm, setEmailConfirm] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");

    const router = useRouter();

    const goToLogin = () => {
        router.push("/login");
    };

    const registerUser = async () => {
        if (emailConfirm !== email) {
            toast.error("Emails don't match");
        }

        if (passwordConfirm !== password) {
            toast.error("Passwords don't match");
        }

        await axios
            .post(
                "/api/register",
                { firstName, lastName, address, phone, email, password },
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            )
            .then(async () => {
                await login(email, password);
                router.push("/");
            })
            .catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.error);
            });
    };
    return (
        <div className="page-container">
            <Wrapper>
                <Title>CREATE YOUR ACCOUNT</Title>
                <p className="page-description">
                    Create your account for faster sign-in and checkout,
                    exclusive news and fashion tips. Receive invites to our
                    offers and track your orders.
                </p>

                <form>
                    <div className="double-input-container">
                        <Input
                            name="First name*"
                            setInputText={setFirstName}
                            type="text"
                        />
                        <Input
                            name="Last name*"
                            setInputText={setLastName}
                            type="text"
                        />
                    </div>
                    <div className="double-input-container">
                        <Input
                            name="Address*"
                            setInputText={setAddress}
                            type="text"
                        />
                        <Input
                            name="Phone (optional)"
                            setInputText={setPhone}
                            type="text"
                        />
                    </div>
                    <div className="double-input-container">
                        <Input
                            name="Email*"
                            setInputText={setEmail}
                            type="email"
                        />
                        <Input
                            name="Confirm Email*"
                            setInputText={setEmailConfirm}
                            type="email"
                        />
                    </div>
                    <div className="double-input-container">
                        <Input
                            name="Password*"
                            setInputText={setPassword}
                            type="password"
                        />
                        <Input
                            name="Confirm Password*"
                            setInputText={setPasswordConfirm}
                            type="password"
                        />
                    </div>
                    <br />
                    <div className="flex-checkbox">
                        <input type="checkbox" name="" id="" />
                        <p>
                            I agree to my data and purchase preferences being
                            shared only within the Sonia Rykiel family for
                            analysis and for a unique and personalized
                            experience;*
                        </p>
                    </div>
                    <br />
                    <div className="flex-checkbox">
                        <input type="checkbox" name="" id="" />
                        <p>
                            I agree to my data and purchase preferences being
                            shared only within the Sonia Rykiel family for
                            analysis and for a unique and personalized
                            experience;*
                        </p>
                    </div>
                </form>

                <div className="inline-btns">
                    <Button
                        styling="normal"
                        type="submit"
                        text="CReate AN ACCOUNT"
                        onClick={registerUser}
                    ></Button>
                    <Button
                        styling="reverse"
                        text="LOGIN"
                        onClick={goToLogin}
                    ></Button>
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
    max-width: 55rem;
    margin-inline: auto;
    margin-bottom: 5rem;

    .flex-checkbox {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;

        input[type="checkbox"] {
            flex-shrink: 0;
            -webkit-appearance: none;
            width: 1.25rem;
            height: 1.25rem;
            border: 1px solid hsl(0, 0%, 45.88235294117647%);

            vertical-align: sub;
            margin-right: 0.25rem;
            outline: none;
            position: relative;
            margin-top: 0.5rem;
        }

        input[type="checkbox"]:checked {
            background-color: hsl(0, 0%, 40%);
        }

        input[type="checkbox"]:after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==");
            background-size: 40px;
            background-repeat: no-repeat;
            background-position: center;
        }

        p {
            color: #636363;
        }
    }

    .page-description {
        text-align: center;
        color: #63636390;
        margin-block: 2rem 3rem;
    }

    .double-input-container {
        display: flex;
        gap: 1rem;

        div {
            flex: 1 1 45%;
        }

        @media screen and (max-width: 36rem) {
            flex-direction: column;
            gap: 0;
        }
    }

    .cta-btn {
        font-family: "Poppins", sans-serif;
        position: relative;
        display: block;
        width: auto;
        height: auto;
        background-color: transparent;
        border: none;
        cursor: pointer;
        margin: 4rem 0;
        background-color: rgb(245, 245, 245);

        & span {
            position: relative;
            display: inline-block;
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 2px;
            text-transform: uppercase;
            top: 0;
            left: 0;
            width: 100%;
            padding: 1.25rem 2rem;
            transition: 0.3s;
            color: rgb(28, 31, 30);
            background-color: rgb(245, 245, 245);

            &::before,
            &::after {
                content: "";
                position: absolute;
                width: 0%;
                height: 0%;
                background: transparent;
                opacity: 0;
                z-index: 2;
                transition: width 0.2s ease-in, height 0.15s 0.2s linear,
                    opacity 0s 0.35s;
            }
            &::before {
                top: 0;
                left: 0;
                border-left: 2px solid rgb(54, 56, 55);
                border-bottom: 2px solid rgb(54, 56, 55);
            }
            &::after {
                top: 0;
                right: 0;
                border-right: 2px solid rgb(54, 56, 55);
                border-bottom: 2px solid rgb(54, 56, 55);
            }
            &:hover::before,
            &:hover::after {
                width: 50%;
                height: 96%;
                opacity: 1;
                transition: height 0.2s 0.2s ease-in, width 0.2s 0.4s linear,
                    opacity 0s 0.2s;
            }
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            width: 15%;
            height: 2px;
            background-color: rgb(54, 56, 55);
            z-index: 2;
        }

        &::before,
        &::after {
            top: 0;
            transition: width 0.2s 0.35s ease-out;
        }
        &::before {
            right: 50%;
        }
        &::after {
            left: 50%;
        }
        &:hover::before,
        &:hover::after {
            width: 50%;
            transition: width 0.2s ease-in;
        }
    }

    .switch {
        text-align: center;
    }
`;
