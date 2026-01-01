import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Sponsors() {
  return (
    <>
      <Header />
      <div className="container" style={{ gridTemplateColumns: "1fr" }}>
        <div
          className="card-header"
          style={{
            textAlign: "center",
            marginBottom: "30px",
            background: "none",
            border: "none",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              color: "var(--text-light)",
              textTransform: "uppercase",
            }}
          >
            Alianzas{" "}
            <span style={{ color: "var(--sas-blue)" }}>Estratégicas</span>
          </h2>
          <p style={{ color: "var(--text-dim)" }}>
            Empresas que hacen posible la SAS CUP 2025
          </p>
        </div>

        <div
          className="stats-row"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          <div className="card sponsor-card">
            <div className="sponsor-logo-wrapper">
              <img
                src="assets/img/sponsors/indumentaria santiago.PNG"
                alt="Indumentaria Santiago"
                className="sponsor-img"
              />
            </div>
            <div className="stat-label">Partner Oficial</div>
            <div className="player-name">Indumentaria Santiago</div>
          </div>

          <div className="card sponsor-card">
            <div className="sponsor-logo-wrapper">
              <img
                src="assets/img/sponsors/motoclan.PNG"
                alt="Moto Clan"
                className="sponsor-img"
              />
            </div>
            <div className="stat-label">Partner Oficial</div>
            <div className="player-name">Moto Clan</div>
          </div>

          <div className="card sponsor-card">
            <div className="sponsor-logo-wrapper">
              <img
                src="assets/img/sponsors/naranjo fiestas.PNG"
                alt="Naranjo Fiestas"
                className="sponsor-img"
              />
            </div>
            <div className="stat-label">Partner Oficial</div>
            <div className="player-name">Naranjo Fiestas</div>
          </div>
        </div>

        <div
          className="card"
          style={{
            marginTop: "50px",
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            border: "1px dashed var(--sas-blue)",
            textAlign: "center",
            padding: "40px",
          }}
        >
          <h3 style={{ color: "var(--text-light)", marginBottom: "15px" }}>
            ¿Quieres que tu marca aparezca aquí?
          </h3>
          <p style={{ color: "var(--text-dim)", marginBottom: "25px" }}>
            Únete al torneo más emocionante de la región y llega a miles de
            espectadores.
          </p>
          <a
            href="mailto:leanvittar@gmail.com"
            className="filter active"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            Contactar con Organización
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sponsors;
