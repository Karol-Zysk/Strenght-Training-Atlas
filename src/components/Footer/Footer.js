import "./footer.css";
import logo from "../files/logo.PNG";
import {AiOutlineFacebook, AiOutlineLinkedin} from "react-icons/ai"

export const Footer = () => {
  return (
    <>
      <section className="contact-area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-content text-center">
                <div className="contact-social">
                  <ul>
                    <li>
                      <a className="hover-target" href="facebook.com">
                        <AiOutlineFacebook/>
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="linkedin.com">
                        <AiOutlineLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>
          Copyright &copy; 2019 <img src={logo} alt="logo" /> All Rights
          Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
