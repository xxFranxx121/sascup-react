import React from "react";
import "./reglamento.css";
import Header from "../../components/header"

function Reglamento() {
  return (
    <>
    <Header />
    <div className="container" style={{ gridTemplateColumns: "1fr" }}>
      <div className="card" style={{ marginBottom: "25px" }}>
        <div className="card-header">
          <h3>Duración y Formato de Juego</h3>
          <span>Oficial SAS CUP</span>
        </div>
        <div className="match-list">
          <div
            className="match-item"
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <strong style={{ color: "var(--sas-blue)" }}>
              Repechaje y Semifinales (22 y 23/12)
            </strong>
            <ul
              style={{
                marginLeft: "20px",
                marginTop: "10px",
                color: "var(--text-dim)",
              }}
            >
              <li>60 minutos totales (2 tiempos de 30 min).</li>
              <li>Entretiempo de 5 minutos.</li>
            </ul>
          </div>
          <div
            className="match-item"
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <strong style={{ color: "var(--sas-red)" }}>
              Gran Final (26/12)
            </strong>
            <ul
              style={{
                marginLeft: "20px",
                marginTop: "10px",
                color: "var(--text-dim)",
              }}
            >
              <li>90 minutos totales (2 tiempos de 45 min).</li>
              <li>Entretiempo de 10 minutos.</li>
            </ul>
          </div>
          <div className="match-item">
            <span>
              Cancha: <strong>Fútbol 8</strong>
            </span>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Reglas de Competición</h3>
        </div>
        <div style={{ padding: "20px" }}>
          <div
            className="stats-row"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            }}
          >
            <div className="stat-card">
              <div className="stat-label">Sustituciones</div>
              <div className="player-name">
                Cambios ilimitados durante todo el encuentro.
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-label">Sistema de Puntuación</div>
              <div className="player-name">Eliminación directa.</div>
            </div>

            <div className="stat-card">
              <div className="stat-label">Definición</div>
              <div className="player-name">
                En caso de empate en tiempo regular, se definirá por penales.
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-label">Conducta</div>
              <div className="player-name">
                Fair Play obligatorio. El respeto al árbitro y rival es
                prioridad.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: "25px", overflow: "hidden" }}>
        <div className="card-header">
          <h3>Premios y Reconocimientos</h3>
          <span style={{ color: "var(--sas-green)" }}>Temporada 2025</span>
        </div>

        <div className="awards-banner">
          <img
            src="assets/img/trofeos con foto.PNG"
            alt="Trofeos SAS CUP"
            className="main-trophy-img"
          />
          <div className="overlay-gradient"></div>
        </div>

        <div className="awards-description-grid">
          <div className="award-item">
            <span className="award-title">TROFEO SAS CUP</span>
            <span className="award-subtitle">Campeón del Torneo</span>
          </div>
          <div className="award-item border-highlight">
            <span className="award-title">GOLEADOR</span>
            <span className="award-subtitle">Máximo Artillero</span>
          </div>
          <div className="award-item">
            <span className="award-title">ARQUERO</span>
            <span className="award-subtitle">Valla menos vencida</span>
          </div>
          <div className="award-item">
            <span className="award-title">MVP</span>
            <span className="award-subtitle">Mejor Jugador</span>
          </div>
        </div>

        <div
          style={{
            padding: "20px",
            textAlign: "center",
            background: "var(--bg-deep)",
          }}
        >
          <p style={{ color: "var(--text-dim)", fontSize: "0.85rem" }}>
            La entrega se realizará tras la{" "}
            <strong style={{ color: "var(--sas-red)" }}>Gran Final</strong> el
            26/12.
          </p>
        </div>

        <div
          className="card venue-card"
          style={{ gridColumn: "1 / -1", marginTop: "10px" }}
        >
          <svg
            className="venue-icon"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>

          <h3 className="venue-subtitle">Complejo Deportivo</h3>
          <h2 className="venue-title">"Las Chapas"</h2>

          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.0338969423137!2d-64.25341062275436!3d-27.808727481239863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b4d000a7dea3d%3A0xa04ffb0be4e34d69!2sPredio%20Las%20Chapas!5e0!3m2!1ses!2sar!4v1766359639048!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="venue-address">Av. Moreno Sur 2525</div>
          <div className="venue-label">SEDE OFICIAL 2025</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Reglamento;
