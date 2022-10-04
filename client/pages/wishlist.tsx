import { RootState } from "../store";
import styled from "styled-components";
import { useSelector } from "react-redux";

//comps
import WishlistItem from "../components/Wishlist/WishlistItem";

const Wishlist: React.FC = () => {
    const wishlist = useSelector((state: RootState) => state.wishlist);

    return (
        <Wrapper className="page-container">
            <Title>Wishlist</Title>
            {wishlist.map((product) => (
                <WishlistItem product={product} key={product._id} />
            ))}
        </Wrapper>
    );
};

export default Wishlist;

const Title = styled.h1`
    text-align: center;
    font-size: 5rem;
    font-family: "Vujahday Script", serif;
    margin-block: 8rem;
`;

const Wrapper = styled.div`
    padding-bottom: 10rem;
`;
