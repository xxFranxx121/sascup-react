import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="team-strip">
        <img
          alt="CACN"
          className="team-logo"
          src="src/assets/images/logos sin fondo/cacn.webp"
        />
        <img
          alt="Los Explosivos"
          className="team-logo"
          src="src/assets/images/logos sin fondo/losexplosivos.webp"
        />
        <img
          alt="Hermas FC"
          className="team-logo"
          src="src/assets/images/logos sin fondo/hermas.webp"
        />
        <img
          alt="LLorvi"
          className="team-logo"
          src="src/assets/images/logos sin fondo/llorvi.webp"
        />
        <img
          alt="Semen Up"
          className="team-logo"
          src="src/assets/images/logos sin fondo/semenup.webp"
        />
      </div>
      <nav>
        <Link to="/equipos">Equipos</Link>
        <Link to="/estadisticas">Estadísticas</Link>
        <Link to="/">Torneo</Link>
        <Link to="/reglamento">Reglamento</Link>
        <Link to="/sponsors">Sponsors</Link>
      </nav>
    </header>
  );
}