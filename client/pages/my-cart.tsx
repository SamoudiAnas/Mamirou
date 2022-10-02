import styled from "styled-components";
import ShoppingCartItem from "../components/ShoppingCart/ShoppingCartItem";

const ShoppingCart = () => {
  return (
    <>
      <Title>Shopping Cart</Title>
      <CartDataWrapper className="page-container">
        <div>
          <CartTable>
            <p></p>
            <h2>Product</h2>
            <p></p>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Subtotal</h2>
          </CartTable>
          <ShoppingCartItem />
          <ShoppingCartItem />
          <ShoppingCartItem />
          <ShoppingCartItem />
        </div>
        <OverAllData>
          <div className="overall-data">
            <h2>Cart totals</h2>
            <div className="flex">
              <p className="title">Subtotal</p>
              <p className="price">19.00 $</p>
            </div>
            <div className="flex">
              <p className="title">Shipping</p>
              <p className="price">0 $</p>
            </div>
            <div className="flex">
              <p className="title">Total</p>
              <p className="price">19.00 $</p>
            </div>
            <button className="checkout">PROCEED TO CHECKOUT</button>
          </div>
        </OverAllData>
      </CartDataWrapper>
    </>
  );
};

export default ShoppingCart;

const Title = styled.h1`
  text-align: center;
  font-family: "PT Serif", serif;
  margin-block: 8rem;
`;

const CartDataWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  margin-block: 5rem 20rem;
`;

const CartTable = styled.div`
  flex: 1 1 60%;
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

const OverAllData = styled.div`
  font-size: 1.5rem;

  .overall-data {
    background-color: #574545;
    padding: 2rem;
    color: white;
  }

  .flex {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;

    .title {
      font-size: 1.1rem;
    }

    .price {
      color: #eee;
      font-weight: 300;
    }
  }

  .checkout {
    font-family: "Montserrat", sans-serif;
    background-color: white;
    color: #574545;
    font-weight: 600;
    width: 100%;
    padding-block: 1rem;
    border: transparent;
    margin-top: 4rem;
  }
`;
