import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InfoIMG from "../assets/info1.jpg";
import Review from "../components/Review/Review";

interface ProductProps {}

const SingleProduct: React.FC<ProductProps> = () => {
  return (
    <Wrapper className="page-container">
      <ProductRoute>
        <Link to="/">Home</Link>
        <p>&gt;</p>
        <Link to="/shop">Products</Link>
        <p>&gt;</p>
        <Link to="">Product Name</Link>
      </ProductRoute>

      {/*-------------------------- */}
      <ProductPreview>
        <div>
          <img src={InfoIMG} alt="" className="main-img" />
        </div>
        <div>
          <h2>Product Name</h2>
          <Review />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            nihil aperiam itaque delectus optio error labore accusamus aliquam
            voluptate facere fugiat! Blanditiis at atque sed unde illum voluptas
            excepturi dolorum.
          </p>
          <div className="quantity">
            <h3>Quantity</h3>
            <div className="quantity-number">
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>
            <AiOutlineHeart />
            <button>Add to Cart</button>
          </div>
        </div>
      </ProductPreview>
    </Wrapper>
  );
};

export default SingleProduct;

const Wrapper = styled.div``;

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 2rem;

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

  .quantity {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;

    .quantity-number {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
  }
`;
