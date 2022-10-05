import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import urlFor from "../../lib/ImageBuilder";
import { cartAC, toastAC } from "../../store";
import { Product } from "../../types/product";

interface WishlistItemProps {
    product: Product;
}

const WishlistItem: React.FC<WishlistItemProps> = ({ product }) => {
    //redux
    const dispatch = useDispatch();
    const { addItemToCart } = bindActionCreators(cartAC, dispatch);
    const { toast } = bindActionCreators(toastAC, dispatch);

    const addToCart = () => {
        addItemToCart(product, 1);
        toast("Product added to your cart!");
    };

    return (
        <ItemWrapper>
            <img
                src={urlFor(product.image[0]).url()}
                alt=""
                className="product-thumbnail"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="in-stock">In Stock</p>
            <button className="add-to-cart" onClick={addToCart}>
                Add To Cart
            </button>
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
