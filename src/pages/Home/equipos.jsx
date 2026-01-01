import React from "react";

function Equipos() {
  return (
    <div className="container" style={{ gridTemplateColumns: "1fr" }}>
      <div
        className="card-header"
        style={{
          textAlign: "center",
          marginBottom: "40px",
          background: "none",
          border: "none",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            color: "var(--text-light)",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Nuestros{" "}
          <span style={{ color: "var(--sas-red)" }}>Protagonistas</span>
        </h2>
        <p style={{ color: "var(--text-dim)", fontSize: "1.1rem" }}>
          Los 5 aspirantes a la gloria en la SAS CUP 2025
        </p>
      </div>

      <div className="teams-grid-container">
        <div className="card team-card-large">
          <div className="team-logo-container">
            <img src="assets/img/png sin fondo/cacn.png" alt="CACN FC" />
          </div>
          <div className="team-info">
            <span className="team-tag">Participante</span>
            <h3>CACN</h3>
          </div>
        </div>

        <div className="card team-card-large">
          <div className="team-logo-container">
            <img src="assets/img/png sin fondo/hermas.png" alt="HERMAS FC" />
          </div>
          <div className="team-info">
            <span className="team-tag">Participante</span>
            <h3>HERMAS FC</h3>
          </div>
        </div>

        <div className="card team-card-large">
          <div className="team-logo-container">
            <img src="assets/img/png sin fondo/llorvi.png" alt="LLORVI FC" />
          </div>
          <div className="team-info">
            <span className="team-tag">Participante</span>
            <h3>LLORVI</h3>
          </div>
        </div>

        <div className="card team-card-large">
          <div className="team-logo-container">
            <img
              src="assets/img/png sin fondo/losexplosivos.png"
              alt="EXPLOSIVOS FC"
            />
          </div>
          <div className="team-info">
            <span className="team-tag">Participante</span>
            <h3>EXPLOSIVOS FC</h3>
          </div>
        </div>

        <div className="card team-card-large">
          <div className="team-logo-container">
            <img src="assets/img/png sin fondo/semenup.png" alt="SEMEN UP" />
          </div>
          <div className="team-info">
            <span className="team-tag">Participante</span>
            <h3>SEMEN UP</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Equipos;
