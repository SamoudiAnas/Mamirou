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
    font-size: 2rem;
    font-family: "PT Serif", serif;
    margin-block: 8rem;
    position: relative;

    &::before {
        content: "Wishlist";
        opacity: 0.1;
        color: #575454;
        font-family: "Vujahday Script", serif;
        font-size: 8rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const Wrapper = styled.div`
    padding-bottom: 10rem;
`;
