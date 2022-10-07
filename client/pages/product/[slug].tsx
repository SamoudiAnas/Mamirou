import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import client from "../../client";
import styled from "styled-components";
import urlFor from "../../lib/ImageBuilder";
import { PortableText } from "@portabletext/react";

//store
import { bindActionCreators } from "redux";
import { cartAC } from "../../store";
import { useDispatch } from "react-redux";

//icons
import { AiOutlineHeart } from "react-icons/ai";

//comps
import Review from "../../components/Review/Review";
import Carousel from "../../components/Carousel/Carousel";

//types
import { Product } from "../../types/product";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface ProductProps {
    product: Product;
}

const SingleProduct: React.FC<ProductProps> = ({ product }) => {
    const [quantity, setQuantity] = useState<number>(1);

    //router
    const router = useRouter();
    const { slug } = router.query;

    //redux
    const dispatch = useDispatch();
    const { addItemToCart } = bindActionCreators(cartAC, dispatch);

    //handlers
    const handleAdd = () => {
        setQuantity(quantity + 1);
    };

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const addToCart = () => {
        addItemToCart(product, quantity);
    };

    return (
        <Wrapper className="page-container">
            <ProductRoute>
                <Link href="/">Home</Link>
                <p>&gt;</p>
                <Link href="/shop">Products</Link>
                <p>&gt;</p>
                <Link href={"/product/" + slug}>{product?.name}</Link>
            </ProductRoute>

            {/*-------------------------- */}
            <ProductPreview>
                <Carousel
                    images={product?.image.map((img: SanityImageSource) =>
                        urlFor(img).url()
                    )}
                />

                <div className="product-info">
                    <h2>{product?.name}</h2>
                    <Review />
                    <p>{product?.description}</p>

                    <h1 className="product-price">
                        {Number(product?.price).toFixed(2)}
                        <span>$</span>
                    </h1>
                    <div className="quantity">
                        <h3>Quantity</h3>
                        <div className="quantity-number">
                            <button
                                className="quantity-control"
                                onClick={handleMinus}
                            >
                                -
                            </button>
                            <p>{quantity}</p>
                            <button
                                className="quantity-control"
                                onClick={handleAdd}
                            >
                                +
                            </button>
                        </div>
                        <AiOutlineHeart className="add-wishlist" />
                        <button className="add-cart" onClick={addToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </ProductPreview>
            <div>
                <h1 className="details-title">Details</h1>
                <div className="details-content">
                    <PortableText value={product?.details} />
                </div>
            </div>
        </Wrapper>
    );
};

export default SingleProduct;

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type == "product" && defined(slug.current)][].slug.current`
    );

    return {
        paths: paths.map((slug: string) => ({ params: { slug } })),
        fallback: true,
    };
}

export async function getStaticProps(context: any) {
    const { slug = "" } = context.params;
    const product = await client.fetch(
        `
      *[_type == "product" && slug.current == $slug][0]
    `,
        { slug }
    );

    const newProduct = {
        _id: product._id,
        slug: product.slug.current,
        price: product.price,
        name: product.name,
        image: product.image,
        description: product.description,
        details: product.Details,
        for: product.for,
        colors: product.colors,
    };

    return {
        props: {
            product: newProduct,
        },
    };
}

const Wrapper = styled.div`
    padding-bottom: 8rem;

    .details-title {
        padding-top: 5rem;
    }

    .details-content {
        margin-block: 2rem;
    }
`;

const ProductRoute = styled.div`
    display: flex;
    gap: 0.5rem;
    color: black;
    font-family: "Montserrat", sans-serif;
    margin-block: 8rem 2rem;

    a {
        color: black;
    }

    p {
        font-weight: 700;
    }
`;

const ProductPreview = styled.section`
    margin-bottom: 2rem;
    @media screen and (min-width: 48rem) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
    }

    .product-info {
        padding-top: 4rem;
    }

    .product-price {
        margin-block: 2rem;
        font-size: 2rem;
        font-family: "PT Serif", serif;
        text-align: start;

        span {
            font-size: 1rem;
            margin-left: 0.5rem;
            margin-bottom: 0.5rem;
        }
    }

    .quantity-control {
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #574545;
        border: 2px solid #574545;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
        color: white;

        &:hover {
            cursor: pointer;
        }
    }

    .main-img {
        width: 100%;
        object-fit: cover;
        height: 30rem;
    }

    .review {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-block: 1rem;

        .review-stars {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }

    .add-wishlist {
        transition: transform 0.2s ease;
        &:hover {
            cursor: pointer;
            fill: #574545;
            transform: scale(1.2);
        }
    }

    .add-cart {
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

    .quantity {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        gap: 2rem;

        .quantity-number {
            display: flex;
            align-items: center;
            gap: 2rem;
            color: #574545;
            font-weight: 500;
            border-top: 2px solid #574545;
            border-bottom: 2px solid #574545;
        }
    }
`;
