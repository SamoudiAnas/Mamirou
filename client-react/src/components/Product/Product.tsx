import styled from "styled-components";
import {
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

interface ProductProps {
  image: string;
  name: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ image, name, price }) => {
  return (
    <ProductWrapper>
      <ProductIMGWrapper>
        <img src={image} alt="" />

        <div className="product-icons">
          <AiOutlineHeart className="product-icon" />
          <AiOutlineShoppingCart className="product-icon" />
          <AiOutlineEye className="product-icon" />
        </div>
      </ProductIMGWrapper>
      <p>{price}$</p>
      <h3>{name}</h3>
    </ProductWrapper>
  );
};

export default Product;

const ProductWrapper = styled.div`
  p {
    font-family: "Montserrat", sans-serif;
    text-align: center;
    font-weight: 500;
    margin-bottom: 0.5rem;
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
