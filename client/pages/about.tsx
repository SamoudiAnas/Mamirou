import { NextPage } from "next";
import styled from "styled-components";

import AboutIMG from "../assets/about2.jpg";
import InfoIMG from "../assets/info1.jpg";
import Info2IMG from "../assets/info2.jpg";

const About: NextPage = () => {
    return (
        <>
            <Title>About Us</Title>

            {/*------------ WELCOME ----------- */}
            <WelcomeContent className="page-container">
                <div>
                    <h1>
                        Hello! <br />
                        We Mamiru.
                    </h1>
                    <p>
                        Nunc fringilla ligula est, et fringilla dolor dignissim
                        interdum. Morbi sit amet lacus tristique, mattis enim
                        non, congue leo. Aliquam volutpat nunc iaculis odio
                        facilisis, id venenatis odio congue. <br />
                        <br />
                        Integer id orci vel quam tristique dapibus. Proin
                        venenatis ipsum a dignissim varius. Donec luctus sapien
                        et ipsum molestie, sed finibus lectus interdum. <br />
                        <br /> Nam aliquet sit amet libero ac lobortis. Nam nunc
                        ligula, venenatis eu ipsum sed, iaculis efficitur orci.
                        Maecenas finibus dui in mauris elementum
                    </p>
                </div>
                <img src="/assets/about2.jpg" alt="" />
            </WelcomeContent>

            {/*------------ PARTNERS ----------- */}
            <Partners className="page-container">
                <h1 className="partner-logo">LOGO</h1>
                <h1 className="partner-logo">Company</h1>
                <h1 className="partner-logo">LOGO</h1>
                <h1 className="partner-logo">Company</h1>
                <h1 className="partner-logo">LOGO</h1>
            </Partners>

            {/*------------ SERVICES ----------- */}
            <ServicesContent className="page-container">
                <div className="service">
                    <h2>Name</h2>
                    <p>
                        Nam nunc ligula, venenatis eu ipsum sed Nam nunc ligula,
                        venenatis eu ipsum sed.
                    </p>
                </div>
                <div className="service">
                    <h2>Name</h2>
                    <p>
                        Nam nunc ligula, venenatis eu ipsum sed Nam nunc ligula,
                        venenatis eu ipsum sed.
                    </p>
                </div>
                <div className="service">
                    <h2>Name</h2>
                    <p>
                        Nam nunc ligula, venenatis eu ipsum sed Nam nunc ligula,
                        venenatis eu ipsum sed.
                    </p>
                </div>
            </ServicesContent>

            {/*------------ INFO ----------- */}
            <InfoContent className="page-container">
                <div>
                    <img src="/assets/info1.jpg" alt="" />
                    <h2>Morbi sit amet</h2>
                    <p>
                        Curabitur a commodo leo. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Aliquam suscipit turpis
                        posuere, tempus tellus eget, placerat tortor. Nullam
                        bibendum magna vel maximus tristique. Nulla facilisi.
                        Aliquam mattis lacinia nulla at tempor. Mauris dictum
                        eleifend nulla, sit amet varius ipsum gravida eu. Nunc
                        egestas risus eros, at bibendum quam venenatis vitae.
                    </p>
                </div>
                <div>
                    <h2>Morbi sit amet</h2>
                    <p>
                        Curabitur a commodo leo. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Aliquam suscipit turpis
                        posuere, tempus tellus eget, placerat tortor. Nullam
                        bibendum magna vel maximus tristique. Nulla facilisi.
                        Aliquam mattis lacinia nulla at tempor. Mauris dictum
                        eleifend nulla, sit amet varius ipsum gravida eu. Nunc
                        egestas risus eros, at bibendum quam venenatis vitae.
                    </p>
                    <img src="/assets/info2.jpg" alt="" />
                </div>
            </InfoContent>
        </>
    );
};

export default About;

const Title = styled.h1`
    text-align: center;
    font-family: "PT Serif", serif;
    margin-block: 8rem;
    position: relative;

    &::before {
        content: "About Us";
        opacity: 0.1;
        color: #575454;
        font-family: "Vujahday Script", serif;
        font-size: 8rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const WelcomeContent = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;

    @media screen and (max-width: 48rem) {
        display: flex;
        flex-direction: column;
    }

    & > div {
        margin-block: auto;
    }

    img {
        width: 100%;
        max-height: 35rem;
        object-fit: cover;
    }

    h1 {
        font-family: "PT Serif", serif;
        font-size: 2.25rem;
        margin-bottom: 2rem;
    }

    p {
        color: #574545;
        line-height: 1.5rem;
    }
`;

const Partners = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    align-items: center;
    align-self: center;
    gap: 2rem;
    margin-top: 4rem;

    .partner-logo {
        text-align: center;
        color: #57454560;
        font-size: 2em;
        font-family: "PT Serif", serif;
        padding-block: 1.5rem;

        &:nth-child(even) {
            font-size: 2em;
            font-style: italic;
            letter-spacing: 1px;
        }
    }
`;

const ServicesContent = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    margin-block: 8rem;

    .service {
        color: white;
        width: 100%;
        min-width: 12rem;
        background-color: #574545;
        padding: 2rem;
        text-align: center;
        flex: 1 1 30%;

        h2 {
            font-family: "PT Serif", serif;
            margin-block: 0.5rem;
        }
    }
`;

const InfoContent = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    margin-block: 8rem;

    & > div {
        width: 100%;
        min-width: 25rem;
        padding: 2rem;
        flex: 1 1 45%;

        img {
            width: 100%;
            height: 45rem;
            object-fit: cover;
        }

        h2 {
            font-family: "PT Serif", serif;
            margin-block: 2rem;
        }

        p {
            color: #574545;
            line-height: 1.5rem;
            margin-block: 1rem 3rem;
        }

        @media screen and (max-width: 48rem) {
            min-width: 20rem;
            padding: 1rem;
            img {
                height: 30rem;
            }
        }
    }
`;
