import type { NextPage } from "next";
import styled from "styled-components";
import { useEffect, useState } from "react";

//icons
import { getSession, useSession } from "next-auth/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Button from "../components/Default UI/Button";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    const router = useRouter();
    const [slideIndex, setSlideIndex] = useState<number>(0);

    const nextSlide = () => {
        if (slideIndex !== 2) {
            setSlideIndex((prevSlideIndex) => prevSlideIndex + 1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 0) {
            setSlideIndex((prevSlideIndex) => prevSlideIndex - 1);
        }
    };

    const goToShop = () => {
        router.push("/shop");
    };

    return (
        <div>
            <>
                {/*------------ HERO ----------- */}
                <HeroWrapper>
                    <HeroContent className="page-container">
                        <div>
                            <h1>The best solution for moisturizing the skin</h1>
                            <p>
                                Only included for the most potent active
                                botanical ingredients. Nothing More!
                            </p>
                            <Button
                                styling="normal"
                                text="Buy Now"
                                onClick={goToShop}
                            />
                        </div>
                        <div className="hero-img">
                            <img src="/assets/hero.jpg" alt="" />
                        </div>
                    </HeroContent>
                </HeroWrapper>

                {/*------------ SHOP BY CATEGORY ----------- */}
                <ShopContent className="page-container">
                    <div className="title-container">
                        <div>
                            <h1>Shop By Categories</h1>
                            <p>Add our new arrivals to your weekly lineup</p>
                        </div>
                        <Button
                            styling="reverse"
                            text="See All"
                            onClick={goToShop}
                        />
                    </div>

                    <div className="categories-grid">
                        <div className="category">
                            <img src="/assets/category.jpg" alt="" />
                            <button>FOR MEN</button>
                        </div>
                        <div className="category">
                            <img src="/assets/category2.jpg" alt="" />
                            <button>FOR MEN</button>
                        </div>
                        <div className="category">
                            <img src="/assets/category3.jpg" alt="" />
                            <button>FOR MEN</button>
                        </div>
                        <div className="category">
                            <img src="/assets/category.jpg" alt="" />
                            <button>FOR MEN</button>
                        </div>
                        <div className="category">
                            <img src="/assets/category2.jpg" alt="" />
                            <button>FOR MEN</button>
                        </div>
                    </div>
                </ShopContent>

                {/*------------ POPULAR PRODUCTS ----------- */}
                <ProductsContent className="page-container">
                    <div className="title-container">
                        <div>
                            <h1>Popular Products</h1>
                            <p>Est placeat consequuntur a molestias ipsam!</p>
                        </div>
                        <Button
                            styling="reverse"
                            text="See All"
                            onClick={goToShop}
                        />
                    </div>

                    <div className="products-grid">
                        <div className="product">
                            <img src="/assets/product.jpg" alt="" />
                            <button>FOR MEN</button>
                        </div>
                        <div className="product">
                            <img src="/assets/product.jpg" alt="" />
                            <button>FOR MEN</button>
                        </div>
                        <div className="product">
                            <img src="/assets/product.jpg" alt="" />
                            <button>FOR MEN</button>
                        </div>
                        <div className="product">
                            <img src="/assets/product.jpg" alt="" />
                            <button>FOR MEN</button>
                        </div>
                    </div>
                </ProductsContent>

                {/*------------ ABOUT MAMIRU ----------- */}
                <AboutWrapper>
                    <img src="/assets/about2.jpg" alt="" />

                    <div className="about-content">
                        <div>
                            <h1>About Mamiru</h1>
                            <p>
                                Nunc fringilla ligula est, et fringilla dolor
                                dignissim interdum. Morbi sit amet lacus
                                tristique, mattis enim non, congue leo. Aliquam
                                volutpat nunc iaculis odio facilisis, id
                                venenatis odio congue. <br />
                                <br />
                                Integer id orci vel quam tristique dapibus.
                                Proin venenatis ipsum a dignissim varius. Donec
                                luctus sapien et ipsum molestie, sed finibus
                                lectus interdum. <br />
                                <br /> Nam aliquet sit amet libero ac lobortis.
                                Nam nunc ligula, venenatis eu ipsum sed, iaculis
                                efficitur orci. Maecenas finibus dui in mauris
                                elementum
                            </p>
                            <button>READ MORE</button>
                        </div>
                    </div>
                </AboutWrapper>

                {/*------------ TESTIMONIALS ----------- */}
                <TestimonialsContent
                    className="page-container"
                    slideIndex={slideIndex}
                >
                    <div>
                        <div className="quotes">❞</div>
                        <div className="testimonials-slider">
                            <div className="slide-wrapper">
                                <div className="slide">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ipsa aspernatur non
                                        nisi amet maiores adipisci aliquid! Quod
                                        cum excepturi, aperiam veritatis,
                                        repellat nostrum quae consequuntur vero
                                        deserunt eaque maxime animi.
                                    </p>
                                </div>
                                <div className="slide">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ipsa aspernatur non
                                        nisi amet maiores adipisci aliquid! Quod
                                        cum excepturi, aperiam veritatis,
                                        repellat nostrum quae consequuntur vero
                                        deserunt eaque maxime animi.
                                    </p>
                                </div>
                                <div className="slide">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ipsa aspernatur non
                                        nisi amet maiores adipisci aliquid! Quod
                                        cum excepturi, aperiam veritatis,
                                        repellat nostrum quae consequuntur vero
                                        deserunt eaque maxime animi.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="slider-controls">
                            <AiOutlineArrowLeft
                                className="icon"
                                role="button"
                                onClick={prevSlide}
                            />
                            <AiOutlineArrowRight
                                className="icon"
                                role="button"
                                onClick={nextSlide}
                            />
                        </div>
                    </div>
                    <div className="img-slider">
                        <div className="img-slide-wraper">
                            <div className="img-slide first-img-slide">
                                <img src="/assets/category2.jpg" alt="" />
                            </div>
                            <div className="img-slide">
                                <img src="/assets/category.jpg" alt="" />
                            </div>
                            <div className="img-slide">
                                <img src="/assets/category2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </TestimonialsContent>
            </>
        </div>
    );
};

export default Home;

const HeroWrapper = styled.div`
    background-color: #575454;
`;

const HeroContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8rem;
    padding-block: 4rem;

    & > div {
        color: white;
        flex: 1 1 100%;
    }

    h1 {
        font-family: "PT Serif", serif;
        font-size: 3rem;

        @media screen and (max-width: 24rem) {
            font-size: 2rem;
        }
    }

    p {
        font-size: 1rem;
        font-family: "Montserrat", sans-serif;
        margin-block: 1rem;
    }

    .hero-img {
        width: 100%;
        position: relative;
        @media screen and (max-width: 48rem) {
            display: none;
        }

        & > img {
            position: relative;
            width: 100%;
            max-height: 35rem;
            object-fit: cover;
            z-index: 4;
        }

        &::before {
            content: "";
            position: absolute;
            width: 50%;
            height: 50%;
            max-height: 35rem;
            border: 2px solid #ffffff10;
            background-color: #ffffff20;
            top: -2rem;
            left: -2rem;
            z-index: 1;
        }

        &::after {
            content: "";
            position: absolute;
            width: 50%;
            height: 50%;
            max-height: 35rem;
            border: 2px solid #ffffff10;
            background-color: #ffffff20;
            bottom: -2rem;
            right: -2rem;
            z-index: 1;
        }
    }

    @media screen and (max-width: 48rem) {
        flex-wrap: wrap;
        flex-direction: column-reverse;

        .hero-img img {
            padding-inline: 2rem;
            max-height: 25rem;
        }
    }
`;

const ShopContent = styled.div`
    padding-block: 8rem;
    .title-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1 {
            font-family: "PT Serif", serif;
            font-size: 2.25rem;
        }
        p {
            font-size: 1rem;
            font-family: "Montserrat", sans-serif;
            margin-block: 1rem;
            color: #574545;
        }
        button {
            background-color: white;
            margin-top: 1rem;
            font-weight: 600;
            font-family: "Montserrat", sans-serif;
            color: #574545;
            transition: all 0.3s ease-in-out;
            &:hover {
                cursor: pointer;
                color: white;
                background-color: #574545;
            }
        }
        @media screen and (max-width: 36rem) {
            text-align: center;
            flex-direction: column;
        }
    }

    .categories-grid {
        margin-top: 2rem;

        display: grid;
        grid-auto-columns: 1fr;
        grid-auto-rows: 20rem;
        gap: 1em;
        grid-template-areas:
            "one one two three "
            "one one four five ";

        @media (max-width: 48rem) {
            grid-template-areas:
                "one one two"
                "one one three"
                "four four five";
        }

        @media (max-width: 36rem) {
            grid-template-areas:
                "one two"
                "three four"
                "five five";
        }

        @media (max-width: 24rem) {
            grid-template-areas:
                "one"
                "two"
                "three"
                "four"
                "five";
        }
    }

    .category {
        width: 100%;

        position: relative;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &:hover {
            cursor: pointer;
        }
        &:hover > button {
            top: 50%;
        }

        &:nth-child(1) {
            grid-area: one;
        }

        &:nth-child(2) {
            grid-area: two;
        }

        &:nth-child(3) {
            grid-area: three;
        }

        &:nth-child(4) {
            grid-area: four;
        }

        &:nth-child(5) {
            grid-area: five;
        }

        button {
            position: absolute;
            top: 150%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 1rem 3rem;
            background-color: #574545;
            border: transparent;
            font-weight: 600;
            font-family: "Montserrat", sans-serif;
            white-space: nowrap;
            color: white;
            transition: all 0.3s ease-in-out;
            &:hover {
                cursor: pointer;
                transform: translate(-50%, -50%) scale(1.1);
            }
        }
    }
`;

const ProductsContent = styled.div`
    padding-block: 8rem;
    .title-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1 {
            font-family: "PT Serif", serif;
            font-size: 2.25rem;
        }
        p {
            font-size: 1rem;
            font-family: "Montserrat", sans-serif;
            margin-block: 1rem;
            color: #574545;
        }
        button {
            background-color: white;
            margin-top: 1rem;
            font-weight: 600;
            font-family: "Montserrat", sans-serif;
            color: #574545;
            transition: all 0.3s ease-in-out;
            &:hover {
                cursor: pointer;
                color: white;
                background-color: #574545;
            }
        }
        @media screen and (max-width: 36rem) {
            flex-direction: column;
            text-align: center;
        }
    }
    .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }
    .product {
        width: 100%;
        height: 20rem;
        position: relative;
        overflow: hidden;
        img {
            object-fit: contain;
        }
        &:hover {
            cursor: pointer;
        }
        &:hover > button {
            top: 50%;
        }
        button {
            position: absolute;
            top: 150%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 1rem 3rem;
            background-color: #574545;
            border: transparent;
            font-weight: 600;
            font-family: "Montserrat", sans-serif;
            white-space: nowrap;
            color: white;
            transition: all 0.3s ease-in-out;
            &:hover {
                cursor: pointer;
                transform: translate(-50%, -50%) scale(1.1);
            }
        }
    }
`;
const AboutWrapper = styled.div`
    background-color: #eeeeee80;
    margin-block: 4rem;
    overflow: hidden;

    @media screen and (min-width: 48rem) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 8rem;
    }

    .about-content {
        display: flex;
        align-items: center;
    }

    .about-content div {
        max-width: 40rem;
        @media screen and (min-width: 48rem) {
            margin: auto 0;
        }
    }

    img {
        width: 100%;
        height: 100%;
        max-height: 40rem;
        object-fit: cover;
    }

    & > div {
        flex: 1 1 50%;
        height: 100%;
        min-width: 15rem;
        position: relative;

        @media screen and (max-width: 48rem) {
            padding: 3rem 1.5rem;
        }

        h1 {
            font-family: "PT Serif", serif;
            font-size: 2.25rem;
            margin-bottom: 2rem;
        }
    }
    button {
        margin-top: 4rem;
        padding: 1rem 3rem;
        color: #ec4067;
        border: 2px solid #ec4067;
        font-weight: 700;
        font-family: "Montserrat", sans-serif;
        transition: all 0.3s ease-in-out;

        &:hover {
            cursor: pointer;
            color: white;
            background-color: #ec4067;
        }
    }
`;

const TestimonialsContent = styled.div`
    margin-block: 8rem;

    @media screen and (min-width: 48rem) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 4rem;
    }

    & > div {
        margin-block: 0 2rem;

        @media screen and (min-width: 48rem) {
            margin-block: auto;
        }
    }

    .quotes {
        text-align: center;
        font-size: 5rem;
        line-height: 2rem;
        margin-bottom: 1rem;
        font-family: "PT Serif", serif;
        color: #ec4067;
    }

    .testimonials-slider {
        width: 100%;
        overflow: hidden;
    }

    .slide-wrapper {
        display: flex;

        transition: all 0.3s ease-in;

        /* prettier-ignore */
        transform: translateX(${(props: { slideIndex: number }) =>
            props.slideIndex * -100}%);

        .slide {
            min-width: 100%;
            text-align: center;
            line-height: 1.5rem;
            color: #ec4067;
        }
    }

    .slider-controls {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        margin-top: 2rem;

        .icon {
            padding: 0.75rem;
            fill: #ec4067;
            width: 3rem;
            height: 3rem;
            border: 2px solid #ec4067;
            transition: all 0.15s linear;

            &:hover {
                cursor: pointer;
                background-color: #ec4067;
                fill: white;
            }
        }
    }

    .img-slider {
        height: 18rem;
        overflow: hidden;
    }

    .img-slide-wraper {
        transform: translateY(
            ${(props: { slideIndex: number }) => props.slideIndex * -18}rem
        );

        transition: all 0.3s ease-in;
        .img-slide {
            width: 100%;
            height: 18rem;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
`;
