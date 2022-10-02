import client from "../client";
import styled from "styled-components";

//comps
import Filter from "../components/Filter/Filter";
import Product from "../components/Product/Product";

const Shop = ({ products }: { products: any }) => {
    console.log(products);
    return (
        <Wrapper className="page-container">
            <Title>Shop</Title>
            <div className="fixed-container">
                <Filter />
                <ProductsContainer>
                    {products?.map((product: any) => (
                        <Product
                            key={product._id}
                            id={product._id}
                            slug={product.slug.current}
                            image={product.image[0]}
                            name={product.name}
                            price={product.price}
                        />
                    ))}
                </ProductsContainer>
            </div>
        </Wrapper>
    );
};

export async function getStaticProps() {
    const products = await client.fetch(
        `
      * [_type == "product"]
    `
    );
    return {
        props: {
            products,
        },
    };
}

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
    display: flex;
    flex-wrap: wrap;
    justify-content: start;

    margin-block: 4rem;
`;
