import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";

const Review = () => {
  return (
    <ReviewWrapper>
      <div className="review-stars">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <p>|</p>
      <p>(1 customer review)</p>
    </ReviewWrapper>
  );
};

export default Review;

const ReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-block: 1rem;

  .review-stars {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
