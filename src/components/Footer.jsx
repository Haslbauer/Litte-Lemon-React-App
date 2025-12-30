import pizzaLogo from "../images/pizzalogo.png"


function Footer () {
    return(
        <footer className="footer">
            <img src={pizzaLogo} alt="Pizza Logo" className="footer-logo" />
            <p>Copyright 2025</p>
        </footer>
    );
}

export default Footer;
