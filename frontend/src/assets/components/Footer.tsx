import { StyledFooter } from "./styles/Footer.styled";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <StyledFooter>
            <div></div>
            <h6>Copyright by CodersLab</h6>
            <div>
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaFacebook />
                </a>
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaInstagram />
                </a>
            </div>
        </StyledFooter>
    );
};
export default Footer;
