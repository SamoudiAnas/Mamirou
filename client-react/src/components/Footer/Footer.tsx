import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="title-container page-container">
        <div>
          <h1>
            Subscribe to receive 10% off your next purchase. <br /> Plus hear
            about about new arrivals and offers.
          </h1>
        </div>
        <button>CONTACT US</button>
      </div>
      <FooterContent className="page-container">
        <div>
          <Logo>Mamiru</Logo>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            fugiat doloribus esse accusantium.
          </p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <li className="footer-link">
            <Link to="/">Home</Link>
          </li>
          <li className="footer-link">
            <Link to="/about">About</Link>
          </li>
          <li className="footer-link">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="footer-link">
            <Link to="/">Blog</Link>
          </li>
          <li className="footer-link">
            <Link to="/">Contact</Link>
          </li>
        </div>
        <div>
          <h2>Information</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            fugiat doloribus esse accusantium.
          </p>
        </div>
        <div>
          <h2>Join Our Newsletter</h2>
          <form action="" className="newsletter-form">
            <input
              type="text"
              placeholder="Enter Your Email"
              name=""
              id=""
              aria-label="Enter your Email for newsletter"
            />
            <button type="submit">
              <FiSend />
            </button>
          </form>
        </div>
      </FooterContent>

      <div className="copyright page-container">
        <p>&copy; Copyright reserved 2020-2022 Mamiru</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  background-color: #151515;
  padding-block: 3rem 2rem;
  color: white;

  .title-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 4rem;
    padding-bottom: 3rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid white;

    h1 {
      flex: 1 1 20%;
      font-family: "PT Serif", serif;
      font-size: 1.75rem;
      padding-right: 4rem;
    }

    p {
      font-size: 1rem;
      font-family: "Montserrat", sans-serif;
      margin-block: 1rem;
      color: #574545;
    }

    button {
      flex: 1 1 20%;
      padding: 1rem 3rem;
      background-color: #574545;
      border: 2px solid #574545;
      margin-top: 1rem;
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

  .copyright {
    margin-top: 6rem;
    text-align: center;
    font-size: 0.8rem;
  }
`;

const FooterContent = styled.div`
  background-color: #151515;
  padding-block: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  & > div {
    flex: 1 1 22%;
  }

  h2 {
    font-family: "PT Serif", serif;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 0.8rem;
    font-family: "Montserrat", sans-serif;
  }

  .footer-link {
    margin-bottom: 1rem;
    font-family: "Montserrat", sans-serif;
    padding-left: 0.25rem;

    a {
      color: white;
    }
  }

  .newsletter-form {
    position: relative;
  }

  .newsletter-form input {
    padding: 1rem;
    width: 100%;
    background-color: transparent;
    border: 2px solid white;
    color: white;
    font-family: "Montserrat", sans-serif;
  }

  .newsletter-form input::placeholder {
    color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 0.9em;
  }

  .newsletter-form button[type="submit"] {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    padding: 0 0.375rem;
    color: white;
    border: 2px solid white;
    background-color: #574545;
  }

  .newsletter-form button[type="submit"]:hover {
    cursor: pointer;
  }

  .newsletter-form button[type="submit"] svg {
    width: 2rem;
  }
`;

const Logo = styled.h3`
  font-family: "PT Serif", serif;
  font-size: 2.5rem;
`;
