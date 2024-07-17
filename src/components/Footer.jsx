import footerlogo from "../assets/Logo-footer.png";

function Footer() {
  return (
    <footer>
      <img src={footerlogo} alt="Logo Kasa"></img>
      <p>&copy; {new Date().getFullYear()} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
