import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p className="copyright">
          © 2025 <strong>SAS CUP</strong>. Todos los derechos reservados.
        </p>
        <p className="developer">
          Desarrollado por <span className="dev-name">Francisco De Cilia</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
