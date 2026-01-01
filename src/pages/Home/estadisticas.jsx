import React from "react";
import Header from "../../components/header"

function Estadisticas() {
  return (
    <>
    <Header />
    <div className="container" style={{ gridTemplateColumns: "1fr" }}>
      {/* FILTROS */}
      <div className="stats-filters">
        <button className="filter active" data-fecha="total">
          Total
        </button>
        <button className="filter" data-fecha="f1">
          Repechaje
        </button>
        <button className="filter" data-fecha="f2">
          Semifinales
        </button>
        <button className="filter" data-fecha="f3">
          Final
        </button>
      </div>

      {/* MVP */}
      <div className="card mvp-mini stats-block active" data-fecha="total">
        <div className="card mvp-mini" id="mvp">
          <div>
            <h3>MVP DEL TORNEO</h3>
            <p className="mvp-name">Por Definir</p>
            <span className="mvp-team">SAS CUP</span>
          </div>
          <img src="assets/img/sascup.jpg" alt="MVP Total" />
        </div>
      </div>

      <div className="card mvp-mini stats-block" data-fecha="f1">
        <div>
          <h3>MVP REPECHAJE</h3>
          <p className="mvp-name">Matias Robinson</p>
          <span className="mvp-team">HERMAS FC</span>
        </div>
        <img src="assets/img/mpv jornada 1.jpg" alt="MVP Repechaje" />
      </div>

      <div className="card mvp-mini stats-block" data-fecha="f2">
        <div>
          <h3>MVP SEMIFINALES</h3>
          <p className="mvp-name">NOMBRE JUGADOR</p>
          <span className="mvp-team">EQUIPO</span>
        </div>
        <img src="assets/img/sascup.jpg" alt="MVP Semis" />
      </div>

      <div className="card mvp-mini stats-block" data-fecha="f2">
        <div>
          <h3>MVP SEMIFINALES</h3>
          <p className="mvp-name">NOMBRE JUGADOR</p>
          <span className="mvp-team">EQUIPO</span>
        </div>
        <img src="assets/img/mvp cacn.jpg" alt="MVP Total" />
      </div>

      <div className="card mvp-mini stats-block" data-fecha="f3">
        <div>
          <h3>MVP FINAL</h3>
          <p className="mvp-name">Próximamente</p>
          <span className="mvp-team">FINALISTA</span>
        </div>
        <img src="assets/img/sascup.jpg" alt="MVP Final" />
      </div>

      {/* TABLA GOLES */}
      <div className="card stats-block active" data-fecha="total">
        <div className="card-header">
          <h3>Goleadores</h3>
        </div>
        <table className="stats-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Jugador</th>
              <th>Equipo</th>
              <th>Goles</th>
            </tr>
          </thead>
          <tbody>
            <tr className="gold">
              <td>1</td>
              <td>Matias Robinson</td>
              <td>HERMAS FC</td>
              <td>3</td>
            </tr>
            <tr className="silver">
              <td>2</td>
              <td>Nicolás Lucena</td>
              <td>HERMAS FC</td>
              <td>2</td>
            </tr>
            <tr className="bronze">
              <td>3</td>
              <td>Franco Ciappino</td>
              <td>HERMAS FC</td>
              <td>2</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Zair Nabac</td>
              <td>HERMAS FC</td>
              <td>1</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Darío Arevalo</td>
              <td>HERMAS FC</td>
              <td>1</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Jugador 31</td>
              <td>HERMAS FC</td>
              <td>1</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Martin Juvenal Pena</td>
              <td>LLORVI</td>
              <td>1</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Franco Fattor</td>
              <td>LLORVI</td>
              <td>1</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Mateo Vuigner</td>
              <td>CACN</td>
              <td>1</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Nicolas Barrionuevo</td>
              <td>CACN</td>
              <td>1</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Gonzalo Orellana</td>
              <td>CACN</td>
              <td>1</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Lautaro Lopez</td>
              <td>SEMEN UP</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* FECHA 1 */}
      <div className="card stats-block" data-fecha="f1">
        <div className="card-header">
          <h3>Goleadores – Repechaje</h3>
        </div>
        <table className="stats-table">
          <tbody>
            <tr className="gold">
              <td>1</td>
              <td>Matias Robinson</td>
              <td>HERMAS FC</td>
              <td>3</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Nicolás Lucena</td>
              <td>HERMAS FC</td>
              <td>1</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Zair Nabac</td>
              <td>HERMAS FC</td>
              <td>1</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Darío Arevalo</td>
              <td>HERMAS FC</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* FECHA 2 */}
      <div className="card stats-block" data-fecha="f2">
        <div className="card-header">
          <h3>Goleadores – Semifinales</h3>
        </div>
        <table className="stats-table">
          <tbody>
            <tr className="gold">
              <td>1</td>
              <td>Franco Ciappino</td>
              <td>HERMAS FC</td>
              <td>2</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Nicolás Lucena</td>
              <td>HERMAS FC</td>
              <td>1</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jugador 31</td>
              <td>HERMAS FC</td>
              <td>1</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Martin Juvenal Pena</td>
              <td>LLORVI</td>
              <td>1</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Franco Fattor</td>
              <td>LLORVI</td>
              <td>1</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Mateo Vuigner</td>
              <td>CACN</td>
              <td>1</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Nicolas Barrionuevo</td>
              <td>CACN</td>
              <td>1</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Gonzalo Orellana</td>
              <td>CACN</td>
              <td>1</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Lautaro Lopez</td>
              <td>SEMEN UP</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* FECHA 3 */}
      <div className="card stats-block" data-fecha="f3">
        <div className="card-header">
          <h3>Goleadores – Final</h3>
        </div>
        <table className="stats-table">
          <tbody>
            <tr className="gold">
              <td>1</td>
              <td>Proximamente</td>
              <td>EQUIPO FC</td>
              <td>X</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Proximamente</td>
              <td>EQUIPO FC</td>
              <td>X</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card stats-block active" data-fecha="total">
        <div className="card-header">
          <h3>ARQUEROS &amp; DISCIPLINA</h3>
        </div>

        <table className="stats-table compact">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Vallas</th>
              <th>Amarillas</th>
              <th>Rojas</th>
            </tr>
          </thead>
          <tbody>
            <tr className="gold">
              <td>CACN</td>
              <td>0</td>
              <td>3</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Hermas</td>
              <td>1</td>
              <td>4</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Llorvi</td>
              <td>0</td>
              <td>3</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Semen Up</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Los Explosivos</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default Estadisticas;
