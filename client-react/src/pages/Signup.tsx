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
            <Input
              name="First name"
              placeholder="First name"
              label="First name"
            />
            <Input name="Last name" placeholder="Last name" label="Last name" />
          </div>
          <div className="double-input-container">
            <Input name="Country" placeholder="Country*" label="Country" />
            <Input
              name="Phone (optional)"
              placeholder="Phone (optional)"
              label="Phone (optional)"
            />
          </div>
          <div className="double-input-container">
            <Input name="Email" placeholder="Email" label="Email" />
            <Input
              name="Confirm Email"
              placeholder="Confirm Email"
              label="Confirm Email"
            />
          </div>
          <div className="double-input-container">
            <Input name="Password" placeholder="Password" label="Password" />
            <Input
              name="Confirm Password"
              placeholder="Confirm Password"
              label="Confirm Password"
            />
          </div>
          <br />
          <div className="double-input-container">
            <input type="checkbox" name="" id="" />
            <p>
              I agree to my data and purchase preferences being shared only
              within the Sonia Rykiel family for analysis and for a unique and
              personalized experience;*
            </p>
          </div>
          <br />
          <div className="double-input-container">
            <input type="checkbox" name="" id="" />
            <p>
              I agree to my data and purchase preferences being shared only
              within the Sonia Rykiel family for analysis and for a unique and
              personalized experience;*
            </p>
          </div>
        </form>

        <button className="cta-btn">CREATE MY ACCOUNT</button>
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

  .cta-btn {
    display: block;
    margin: 4rem auto 8rem;
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
`;
