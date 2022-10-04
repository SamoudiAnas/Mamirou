import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import urlFor from "../../lib/ImageBuilder";
import { Product } from "../../types/product";

interface CartItemProps {
    product: Product;
    quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
    const [itemQuantity, setItemQuantity] = useState<number>(quantity);

    //handlers
    const handleAdd = () => {
        setItemQuantity(itemQuantity + 1);
    };

    const handleMinus = () => {
        if (itemQuantity > 1) {
            setItemQuantity(itemQuantity - 1);
        }
    };

    return (
        <Wrapper>
            <img
                src={urlFor(product.image[0]).url()}
                alt=""
                className="cart-item-thumb"
            />
            <div>
                <h2 className="cart-item-name">{product.name}</h2>
                <p className="cart-item-price">
                    {Number(product.price).toFixed(2)}$
                </p>
            </div>
            <div className="cart-item-control">
                <AiOutlineDelete className="cart-delete-icon" />
                <div className="quantity-number">
                    <button className="quantity-control" onClick={handleMinus}>
                        -
                    </button>
                    <p>{itemQuantity}</p>
                    <button className="quantity-control" onClick={handleAdd}>
                        +
                    </button>
                </div>
            </div>
        </Wrapper>
    );
};
export default CartItem;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 7rem 1fr 2rem;
    gap: 0.5rem;
    margin: 1.5rem 0;
    width: 100%;
    position: relative;

    .cart-item-thumb {
        width: 7rem;
        height: 7rem;
    }

    .cart-item-name {
        margin-bottom: 1.5rem;
    }

    .cart-item-price {
        font-size: 1.2rem;
    }

    .cart-item-control {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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

    .quantity-number {
        display: flex;
        align-items: center;
        gap: 2rem;
        color: #574545;
        font-weight: 500;
        border-top: 2px solid #574545;
        border-bottom: 2px solid #574545;
        position: absolute;
        bottom: 0;
        right: 0;
    }
`;
