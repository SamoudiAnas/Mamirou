import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import InfoIMG from "../../assets/info1.jpg";
import { useState } from "react";

const ShoppingCartItem = () => {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <CartTable>
      <AiOutlineClose className="cart-item" />
      <img src={InfoIMG} alt="" className="product-thumbnail" />
      <h3 className="product-name">Product Name</h3>
      <p className="product-price">19.00$</p>

      <div className="quantity">
        <p className="quantity-btn" onClick={() => setQuantity(quantity - 1)}>
          -
        </p>
        <p>{quantity}</p>
        <p className="quantity-btn" onClick={() => setQuantity(quantity + 1)}>
          +
        </p>
      </div>
      <p>19.00$</p>
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
