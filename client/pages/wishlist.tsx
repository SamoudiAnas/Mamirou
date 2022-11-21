import { RootState } from "../store";
import styled from "styled-components";
import { useSelector } from "react-redux";

//img
import EmptyWishlist from "../public/assets/illustrations/empty.svg";

//comps
import WishlistItem from "../components/Wishlist/WishlistItem";
import { useRouter } from "next/router";

const Wishlist: React.FC = () => {
    const router = useRouter();
    const wishlist = useSelector((state: RootState) => state.wishlist);

    const goToShop = () => {
        router.push("/shop");
    };

    return (
        <Wrapper className="page-container">
            <Title>Wishlist</Title>
            {wishlist.length === 0 ? (
                <div className="empty__wishlist">
                    <EmptyWishlist />
                    <h2>Seems like your wishlist is empty!</h2>
                    <button onClick={goToShop}>See Our Products</button>
                </div>
            ) : (
                wishlist.map((product) => (
                    <WishlistItem product={product} key={product._id} />
                ))
            )}
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

    .empty__wishlist {
        svg {
            width: 24rem;
            display: block;
            margin-inline: auto;
            height: 100%;
            object-fit: contain;
        }

        h2 {
            text-align: center;
            margin-block: 2rem;
            font-family: "PT Serif", serif;
        }

        button {
            display: block;
            margin: 1rem auto 4rem;
            padding: 1rem 3rem;
            background-color: #574545;
            border: 2px solid #574545;
            font-weight: 600;
            font-family: "Montserrat", sans-serif;
            color: white;
            transition: all 0.3s ease-in-out;

            &:hover {
                cursor: pointer;
                color: white;
                background-color: #574545;
            }
        }
    }
`;
