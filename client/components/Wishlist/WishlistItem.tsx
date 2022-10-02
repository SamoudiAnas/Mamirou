import styled from "styled-components";

import InfoIMG from "../../assets/info1.jpg";

interface WishlistItemProps {}

const WishlistItem: React.FC<WishlistItemProps> = () => {
  return (
    <ItemWrapper>
      <img src={InfoIMG} alt="" className="product-thumbnail" />
      <h3 className="product-name">Product Name</h3>
      <p className="in-stock">In Stock</p>
      <button className="add-to-cart">Add To Cart</button>
    </ItemWrapper>
  );
};

export default WishlistItem;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 6rem 2fr 1fr 1fr;
  align-items: center;
  gap: 1.5rem;
  margin-block: 2rem;

  .product-thumbnail {
    width: 6rem;
    height: 6rem;
    object-fit: cover;
  }

  .product-name {
    font-family: "PT Serif", serif;
  }

  .in-stock {
    font-weight: 500;
    color: #1fa854;
  }

  .add-to-cart {
    font-family: "Montserrat", sans-serif;
    color: white;
    background-color: #574545;
    font-weight: 600;
    width: 100%;
    padding-block: 0.75rem;
    border: transparent;
  }
`;
