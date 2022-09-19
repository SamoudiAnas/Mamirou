import styled from "styled-components";
import Input from "../components/Default UI/Input";

const Signup = () => {
  return (
    <div className="page-container">
      <Wrapper>
        <Title>CREATE YOUR ACCOUNT</Title>
        <p className="page-description">
          Create your account for faster sign-in and checkout, exclusive news
          and fashion tips. Receive invites to our offers and track your orders.
        </p>

        <form>
          <div className="double-input-container">
            <Input name="" placeholder="" label="" />
            <Input name="" placeholder="" label="" />
          </div>
          <div className="double-input-container">
            <Input name="" placeholder="" label="" />
            <Input name="" placeholder="" label="" />
          </div>
          <Input name="" placeholder="" label="" />
          <Input name="" placeholder="" label="" />
          <div className="double-input-container">
            <Input name="" placeholder="" label="" />
            <Input name="" placeholder="" label="" />
          </div>
        </form>
      </Wrapper>
    </div>
  );
};

export default Signup;

const Title = styled.h1`
  text-align: center;
  font-family: "PT Serif", serif;
  margin-block: 8rem 2rem;
`;

const Wrapper = styled.div`
  max-width: 55rem;
  margin-inline: auto;

  .page-description {
    text-align: center;
    color: #63636390;
    margin-block: 2rem 3rem;
  }

  .double-input-container {
    display: flex;
    gap: 1rem;

    div {
      flex: 1 1 45%;
    }
  }
`;
