import {
    AiOutlineEye,
    AiOutlineHeart,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import Link from "next/link";
import styled from "styled-components";
import urlFor from "../../lib/ImageBuilder";

interface ProductProps {
    id: string;
    image: string;
    name: string;
    slug: string;
    price: number;
}

const Product: React.FC<ProductProps> = ({ id, slug, image, name, price }) => {
    return (
        <ProductWrapper>
            <ProductIMGWrapper>
                <Link href={"/product/" + slug}>
                    <img
                        src={urlFor(image).url()}
                        alt=""
                        className="product-thumbnail"
                    />
                </Link>
                <div className="product-icons">
                    <AiOutlineHeart className="product-icon" />
                    <AiOutlineShoppingCart
                        className="product-icon"
                        onClick={() => {
                            console.log("added item id: " + id);
                        }}
                    />
                    <Link href={"/product/" + slug}>
                        <AiOutlineEye className="product-icon" />
                    </Link>
                </div>
            </ProductIMGWrapper>
            <p>{price}$</p>
            <h3>{name}</h3>
        </ProductWrapper>
    );
};

export default Product;

const ProductWrapper = styled.div`
    flex: 1 1 calc(33.33% - 2rem);
    margin-right: 2rem;
    min-width: 15rem;

    p {
        font-family: "Montserrat", sans-serif;
        text-align: center;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }

    .product-thumbnail {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h3 {
        font-family: "PT Serif", serif;
        text-align: center;
    }

    &:hover {
        cursor: pointer;
    }

    &:hover > h3 {
        text-decoration: underline;
        color: #574545;
    }
`;

const ProductIMGWrapper = styled.div`
    width: 100%;
    height: 20rem;
    position: relative;
    overflow: hidden;
    margin-bottom: 1rem;

    img {
        object-fit: contain;
    }

    &:hover {
        cursor: pointer;
    }

    .product-icons {
        position: absolute;
        top: 50%;
        right: -50%;
        transform: translateY(-50%);
        padding: 1rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        border: transparent;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
        white-space: nowrap;
        color: white;
        transition: all 0.3s ease-in-out;

        &:hover {
            cursor: pointer;
        }
    }

    &:hover > .product-icons {
        right: 1rem;
    }
    .product-icon {
        width: 3rem;
        height: 3rem;
        padding: 0.5rem;
        fill: #574545;
        background-color: white;
        border-radius: 50%;
        transition: transform 0.3s ease-in-out;

        &:hover {
            cursor: pointer;
            background-color: #574545;
            fill: white;
            transform: scale(1.2);
        }
    }
`;
