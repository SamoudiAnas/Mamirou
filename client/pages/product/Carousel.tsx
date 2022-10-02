import { useState } from "react";
import styled from "styled-components";

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState<number>(0);
    return (
        <Wrapper>
            <img src={images[selectedImage]} alt="" className="main-img" />
            <div className="imgs-control">
                <p>&lt;</p>
                <div className="all-imgs">
                    {images.map((image, index) => (
                        <img
                            src={image}
                            alt=""
                            className={
                                index === selectedImage ? "selected" : ""
                            }
                            onClick={() => setSelectedImage(index)}
                        />
                    ))}
                </div>
                <p>&gt;</p>
            </div>
        </Wrapper>
    );
};

export default Carousel;

const Wrapper = styled.div`
    overflow: hidden;

    .main-img {
        width: 100%;
        height: 30rem;
        object-fit: contain;
        margin-bottom: 0.5rem;
        background-color: #cfcfcf;
    }

    .imgs-control {
        display: grid;
        grid-template-columns: 1rem 1fr 1rem;
    }

    .all-imgs {
        display: flex;
        gap: 0.75rem;
        overflow: hidden;

        img {
            flex: 1 1 calc(25% - 0.75rem);
            min-width: calc(25% - 0.75rem);
            height: 5rem;
            object-fit: contain;

            background-color: #cfcfcf;

            &.selected {
                border: 2px solid #151515;
            }
        }
    }
`;
