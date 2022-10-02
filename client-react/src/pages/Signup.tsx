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
              name="First name*"
              placeholder="First name"
              label="First name"
            />
            <Input
              name="Last name*"
              placeholder="Last name"
              label="Last name"
            />
          </div>
          <div className="double-input-container">
            <Input name="Country*" placeholder="Country*" label="Country" />
            <Input
              name="Phone (optional)"
              placeholder="Phone (optional)"
              label="Phone (optional)"
            />
          </div>
          <div className="double-input-container">
            <Input name="Email*" placeholder="Email" label="Email" />
            <Input
              name="Confirm Email*"
              placeholder="Confirm Email"
              label="Confirm Email"
            />
          </div>
          <div className="double-input-container">
            <Input name="Password*" placeholder="Password" label="Password" />
            <Input
              name="Confirm Password*"
              placeholder="Confirm Password"
              label="Confirm Password"
            />
          </div>
          <br />
          <div className="flex-checkbox">
            <input type="checkbox" name="" id="" />
            <p>
              I agree to my data and purchase preferences being shared only
              within the Sonia Rykiel family for analysis and for a unique and
              personalized experience;*
            </p>
          </div>
          <br />
          <div className="flex-checkbox">
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

  .flex-checkbox {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    input[type="checkbox"] {
      flex-shrink: 0;
      -webkit-appearance: none;
      width: 1.25rem;
      height: 1.25rem;
      border: 1px solid hsl(0, 0%, 45.88235294117647%);

      vertical-align: sub;
      margin-right: 0.25rem;
      outline: none;
      position: relative;
      margin-top: 0.5rem;
    }

    input[type="checkbox"]:checked {
      background-color: hsl(0, 0%, 40%);
    }

    input[type="checkbox"]:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==");
      background-size: 40px;
      background-repeat: no-repeat;
      background-position: center;
    }

    p {
      color: #636363;
    }
  }

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

    @media screen and (max-width: 36rem) {
      flex-direction: column;
      gap: 0;
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
