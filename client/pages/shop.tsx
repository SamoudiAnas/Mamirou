import client from "../client";
import styled from "styled-components";

//comps
import Filter from "../components/Filter/Filter";
import Product from "../components/Product/Product";
import { Product as ProductType } from "../types/product";

const Shop = ({ products }: { products: any }) => {
    console.log(products);
    return (
        <Wrapper className="page-container">
            <Title>Shop</Title>
            <div className="fixed-container">
                <Filter />
                <ProductsContainer>
                    {products?.map((product: ProductType) => (
                        <Product key={product._id} product={product} />
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

    const newProducts = products.map((product: any) => {
        return {
            _id: product._id,
            slug: product.slug.current,
            price: product.price,
            name: product.name,
            image: product.image,
            description: product.description,
            details: product.Details,
            for: product.for,
            colors: product.colors,
        };
    });
    return {
        props: {
            products: newProducts,
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
    font-size: 5rem;
    font-family: "Vujahday Script", serif;
    margin-block: 8rem 6rem;
`;

const ProductsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;

    margin-block: 4rem;
`;
