import styled from "styled-components";
import WishlistItem from "../components/Wishlist/WishlistItem";

interface WishlistProps {
  productID: string;
  productName: string;
  productIMG: string;
  inStock: boolean;
}

const Wishlist: React.FC = () => {
  return (
    <Wrapper className="page-container">
      <Title>Wishlist</Title>
      <WishlistItem />
      <WishlistItem />
      <WishlistItem />
    </Wrapper>
  );
};

export default Wishlist;

const Title = styled.h1`
  text-align: center;
  font-family: "PT Serif", serif;
  margin-block: 8rem;
`;

const Wrapper = styled.div`
  padding-bottom: 10rem;
`;
