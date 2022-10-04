import React from "react";
import styled from "styled-components";

//icons
import CartEmptyIcon from "./CartEmptyIcon";
import { AiOutlineClose } from "react-icons/ai";

//store
import { bindActionCreators } from "redux";
import { cartUIAC, RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
    const dispatch = useDispatch();
    const cartUI = useSelector((state: RootState) => state.cartUI);
    const cart = useSelector((state: RootState) => state.cart);
    const { closeCartUI } = bindActionCreators(cartUIAC, dispatch);

    return (
        <Wrapper cartUI={cartUI}>
            <div className="bg-layer" onClick={() => closeCartUI()}></div>
            <CartWrapper cartUI={cartUI}>
                <h1 className="title">Your Cart</h1>
                <AiOutlineClose
                    className="close-cart"
                    onClick={() => closeCartUI()}
                />

                {cart.length !== 0 ? (
                    cart?.map((cartItem) => (
                        <CartItem
                            key={cartItem.product._id}
                            product={cartItem.product}
                            quantity={cartItem.quantity}
                        />
                    ))
                ) : (
                    <div className="cart-empty">
                        <CartEmptyIcon />
                        <h2>Your cart is empty! Go back shopping.</h2>
                    </div>
                )}
            </CartWrapper>
        </Wrapper>
    );
};

export default Cart;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: ${(props: { cartUI: boolean }) =>
        props.cartUI ? "block" : "none"};
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 999;
    transition: all 0.5s ease;

    .bg-layer {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: ${(props: { cartUI: boolean }) =>
            props.cartUI ? "block" : "none"};
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const CartWrapper = styled.div`
    position: fixed;
    top: 0;
    right: ${(props: { cartUI: boolean }) => (props.cartUI ? 0 : "-100%")};
    width: 30rem;
    background-color: #f8f8f8;
    min-height: 100vh;
    z-index: 9999;
    padding: 4rem 1rem;
    z-index: 999;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    flex-direction: column;

    .title {
        text-align: center;
        font-family: "PT Serif", serif;
        margin-bottom: 2rem;
    }

    .close-cart {
        position: absolute;
        top: 2rem;
        right: 2rem;
        font-size: 2.5rem;
        padding: 0.5rem;
        color: #574545;

        &:hover {
            cursor: pointer;
            color: white;
            background-color: #574545;
        }
    }

    .cart-empty {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        flex-direction: column;
        height: 100%;
        font-family: "PT Serif", serif;
        text-align: center;

        h2 {
            color: #6c63ff;
            margin-top: 2vh;
        }

        svg {
            width: 100%;
            height: 20rem;
            display: flex;
            justify-content: center;
            padding-inline: 3rem;
        }
    }
`;
