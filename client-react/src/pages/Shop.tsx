import { useEffect, useState } from "react";
import styled from "styled-components";
import Filter from "../components/Filter/Filter";
import Product from "../components/Product/Product";

const Shop = () => {
  const [products, setProducts] = useState<any>();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <Wrapper className="page-container">
      <Title>Shop</Title>
      <div className="fixed-container">
        <Filter />
        <ProductsContainer>
          {products?.map((product: any) => (
            <Product
              key={product.id}
              image={product.image}
              name={product.title}
              price={product.price}
            />
          ))}
        </ProductsContainer>
      </div>
    </Wrapper>
  );
};

export default Shop;

const Wrapper = styled.div`
  position: relative;

  .fixed-container {
    position: relative;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-family: "PT Serif", serif;
  margin-block: 8rem 6rem;
`;

const ProductsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
  margin-block: 4rem;
`;
