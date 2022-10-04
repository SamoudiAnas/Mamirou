import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import { Product } from "../../types/product";
import urlFor from "../../lib/ImageBuilder";

interface CartItemsProps {
    product: Product;
    quantity: number;
}

const ShoppingCartItem: React.FC<CartItemsProps> = ({ product, quantity }) => {
    const [itemQuantity, setItemQuantity] = useState<number>(quantity);
    return (
        <CartTable>
            <AiOutlineDelete className="cart-delete-icon" />
            <img
                src={urlFor(product.image[0]).url()}
                alt=""
                className="product-thumbnail"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}$</p>

            <div className="quantity">
                <p
                    className="quantity-btn"
                    onClick={() => setItemQuantity(itemQuantity - 1)}
                >
                    -
                </p>
                <p>{itemQuantity}</p>
                <p
                    className="quantity-btn"
                    onClick={() => setItemQuantity(itemQuantity + 1)}
                >
                    +
                </p>
            </div>
            <p>{product.price * itemQuantity}$</p>
        </CartTable>
    );
};

export default ShoppingCartItem;

const CartTable = styled.div`
    margin-block: 2rem;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 60%;
    display: grid;
    grid-template-columns: 3rem 6rem 3fr 1fr 1fr 1fr;
    align-items: center;
    gap: 1.5rem;

    .product-thumbnail {
        width: 100%;
        height: 6rem;
        object-fit: cover;
    }

    .cart-delete-icon {
        width: 2rem;
        height: 2rem;
        padding: 0.375rem;
        border-radius: 50%;
        fill: #ff1000;
        background-color: #ff100010;
        border: 1px solid #ff1000;

        &:hover {
            cursor: pointer;
            fill: white;
            background-color: #ff1000;
        }
    }

    .quantity {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        color: #574545;

        & > p {
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .quantity-btn {
            font-weight: 800;
            font-size: 1.5rem;
            &:hover {
                cursor: pointer;
                background-color: #574545;
                color: white;
            }
        }
    }
`;
