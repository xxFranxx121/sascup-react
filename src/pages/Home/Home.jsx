import React from 'react';
import './Home.css';
function Home() {
    return (
        <div>
            <header>
                <div className="team-strip">
                    <img src="assets/img/cacn .png" alt="CACN" className="team-logo" />
                    <img src="assets/img/losexplosivos.png" alt="Los Explosivos" className="team-logo" />
                    <img src="assets/img/hermas.png" alt="Hermas FC" className="team-logo" />
                    <img src="assets/img/llorvi.png" alt="LLorvi" className="team-logo" />
                    <img src="assets/img/semenup.png" alt="Semen Up" className="team-logo" />
                </div>

                <nav>
                    <a href="equipos.html">Equipos</a>
                    <a href="estadisticas.html">Estadísticas</a>
                    <a href="index.html">Torneo</a>
                    <a href="reglamento.html">Reglamento</a>
                    <a href="sponsors.html">Sponsors</a>
                </nav>
            </header>

            <div className="container">

                <div className="card">
                    <div className="card-header">
                        <div>
                            <h3>Repechaje</h3>
                            <span>22 de Diciembre</span>

                            <h3>Semifinales</h3>
                            <span>23 de Diciembre</span>

                            <h3>Final</h3>
                            <span>26 de Diciembre</span>
                            <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.9rem' }}>
                                ⚽ 3-3 | Hermas FC ganó por penales
                            </span>
                        </div>
                        <img src="assets/img/sascup.jpg" alt="League Logo" style={{ borderRadius: '50%' }} />
                    </div>

                    <ul className="match-list">
                        <li className="match-item">
                            <div className="team-info">
                                <img src="assets/img/hermas.png" alt="Hermas FC" className="team-logo" />
                                <span>HERMAS FC</span>
                            </div>
                            <span className="team-vs" style={{ fontSize: '1.2rem' }}>6 - 0</span>
                            <div className="team-info">
                                <img src="assets/img/losexplosivos.png" alt="Los Explosivos" className="team-logo" />
                                <span>EXPLOSIVOS FC</span>
                            </div>
                        </li>

                        <li className="match-item">
                            <div className="team-info">
                                <img src="assets/img/cacn .png" alt="CACN" className="team-logo" />
                                <span>CACN</span>
                            </div>
                            <span className="team-vs" style={{ fontSize: '1.2rem' }}>3 - 1</span>
                            <div className="team-info">
                                <img src="assets/img/semenup.png" alt="Semen Up" className="team-logo" />
                                <span>SEMEN UP</span>
                            </div>
                        </li>

                        <li className="match-item">
                            <div className="team-info">
                                <img src="assets/img/llorvi.png" alt="LLORVI" className="team-logo" />
                                <span>LLORVI</span>
                            </div>
                            <span className="team-vs" style={{ fontSize: '1.2rem' }}>2 - 4</span>
                            <div className="team-info">
                                <img src="assets/img/hermas.png" alt="HERMAS FC" className="team-logo" />
                                <span>HERMAS FC</span>
                            </div>
                        </li>

                        <li className="match-item" style={{ borderLeft: '4px solid #cd7f32' }}>
                            <div className="team-info">
                                <img src="assets/img/semenup.png" alt="SEMEN UP" className="team-logo" />
                                <span>SEMEN UP</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span className="team-vs" style={{ fontSize: '1.2rem' }}>3 - 4</span>
                                <span style={{ fontSize: '0.75rem', color: '#cd7f32', fontWeight: 'bold' }}>🥉 LLORVI (3er Puesto)</span>
                            </div>
                            <div className="team-info">
                                <img src="assets/img/llorvi.png" alt="LLORVI" className="team-logo" />
                                <span>LLORVI</span>
                            </div>
                        </li>

                        <li className="match-item"
                            style={{
                                borderLeft: '4px solid #c0c0c0',
                                borderRight: '4px solid #fbbf24',
                                background: 'linear-gradient(to right, rgba(192, 192, 192, 0.05), rgba(251, 191, 36, 0.05))'
                            }}>
                            <div className="team-info" style={{ position: 'relative' }}>
                                <div
                                    style={{
                                        position: 'absolute', top: '-10px', left: 0,
                                        background: 'linear-gradient(135deg, #c0c0c0, #a8a8a8)',
                                        color: '#000', padding: '2px 8px', borderRadius: '8px',
                                        fontSize: '0.65rem', fontWeight: 'bold',
                                        boxShadow: '0 2px 6px rgba(192, 192, 192, 0.4)'
                                    }}>
                                    🥈 2DO
                                </div>
                                <img src="assets/img/cacn .png" alt="CACN" className="team-logo" />
                                <span>CACN</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span className="team-vs" style={{ fontSize: '1.2rem' }}>3 - 3</span>
                                <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 'bold' }}>🏆 HERMAS FC (Penales)</span>
                            </div>
                            <div className="team-info" style={{ position: 'relative' }}>
                                <div
                                    style={{
                                        position: 'absolute', top: '-10px', right: 0,
                                        background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                                        color: '#000', padding: '2px 8px', borderRadius: '8px',
                                        fontSize: '0.65rem', fontWeight: 'bold',
                                        boxShadow: '0 2px 6px rgba(251, 191, 36, 0.4)'
                                    }}>
                                    🥇 1RO
                                </div>
                                <img src="assets/img/hermas.png" alt="HERMAS FC" className="team-logo" />
                                <span>HERMAS FC</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="right-grid">

                    <div className="card mvp-card" style={{ marginBottom: '20px' }}>
                        <div className="mvp-content">
                            <div className="mvp-badge">MVP SEMIFINAL</div>
                            <h2>CACN vs SEMEN UP</h2>

                            <div className="mvp-player-info">
                                <p className="name">Gonzalo Orellana</p>
                                <p className="team">CACN</p>
                            </div>
                        </div>

                        <div className="mvp-image-container">
                            <img src="assets/img/mvp cacn.jpg" alt="MVP Semifinal 1" />
                        </div>
                    </div>

                    <div className="card mvp-card">
                        <div className="mvp-content">
                            <div className="mvp-badge">MVP SEMIFINAL</div>
                            <h2>HERMAS vs LLORVI</h2>

                            <div className="mvp-player-info">
                                <p className="name">Dario Arevalo</p>
                                <p className="team">HERMAS FC</p>
                            </div>
                        </div>

                        <div className="mvp-image-container">
                            <img src="assets/img/mvp hermas.jpg" alt="MVP Semifinal 2" />
                        </div>
                    </div>

                    <div className="stats-row">
                        <div className="card stat-card">
                            <div className="stat-number">3</div>
                            <div className="stat-label">GOLES</div>
                            <div className="player-name">Matias Robinson <br /><small>HERMAS FC</small></div>
                        </div>

                        <div className="card stat-card">
                            <div className="stat-number">1</div>
                            <div className="stat-label">GOLES</div>
                            <div className="player-name">Nicolás Lucena <br /><small>HERMAS FC</small></div>
                        </div>

                        <div className="card stat-card">
                            <div className="stat-number">1</div>
                            <div className="stat-label">GOLES</div>
                            <div className="player-name">Zair Nabac <br /><small>HERMAS FC</small></div>
                        </div>

                        <div className="card stat-card">
                            <div className="stat-number">1</div>
                            <div className="stat-label">GOLES</div>
                            <div className="player-name">Darío Arevalo <br /><small>HERMAS FC</small></div>
                        </div>
                    </div>

                </div>
                <div className="card bracket-section">
                    <div className="card-header">
                        <h3>Formato del Torneo</h3>
                    </div>

                    <div className="bracket-wrapper with-lines">

                        <div className="bracket-col bracket-col-left">
                            <div className="round-title">Semifinales <br /><span>23/12 17:00 HS</span></div>
                            <div className="matchup match-semi-l">
                                <div className="team-slot slot-green">
                                    <img src="assets/img/cacn .png" alt="CACN FC" className="team-logo-formatotorneo" />
                                </div>
                                <div className="team-slot slot-green">
                                    <img src="assets/img/semenup transparente.png" alt="SEMENUP FC" className="team-logo-formatotorneo" />
                                </div>
                            </div>
                        </div>

                        <div className="bracket-col bracket-col-center">
                            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                                <img src="assets/img/parche campeon.png" alt="Trofeo SAS CUP"
                                    style={{ width: '80px', filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))' }} />
                            </div>

                            <div className="round-title t-center">Gran Final <br /><span>26/12 17:00 HS</span><br />
                                <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.9rem' }}>3-3 (Penales)</span>
                            </div>
                            <div className="matchup final match-final">
                                <div className="team-slot slot-gold">
                                    <img src="assets/img/cacn .png" alt="CACN" className="team-logo-formatotorneo" />
                                </div>
                                <div className="team-slot slot-gold"
                                    style={{ position: 'relative', boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)', border: '2px solid #fbbf24' }}>
                                    <div
                                        style={{
                                            position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)',
                                            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', color: '#000',
                                            padding: '4px 12px', borderRadius: '12px', fontSize: '0.7rem',
                                            fontWeight: 'bold', boxShadow: '0 2px 8px rgba(251, 191, 36, 0.5)', zIndex: 10
                                        }}>
                                        🏆 CAMPEÓN
                                    </div>
                                    <img src="assets/img/hermas.png" alt="HERMAS FC" className="team-logo-formatotorneo" />
                                </div>
                            </div>

                            <div className="vertical-connector"></div>

                            <div className="round-title mt-10 t-center">Tercer Puesto <br /><span>26/12 16:00 HS</span><br />
                                <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.9rem' }}>4-3</span>
                            </div>
                            <div className="matchup third-place match-third">
                                <div className="team-slot slot-red">
                                    <img src="assets/img/semenup.png" alt="SEMEN UP" className="team-logo-formatotorneo" />
                                </div>
                                <div className="team-slot slot-red"
                                    style={{ position: 'relative', boxShadow: '0 0 15px rgba(205, 127, 50, 0.6)', border: '2px solid #cd7f32' }}>
                                    <div
                                        style={{
                                            position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)',
                                            background: 'linear-gradient(135deg, #cd7f32, #b87333)', color: '#fff',
                                            padding: '4px 12px', borderRadius: '12px', fontSize: '0.7rem',
                                            fontWeight: 'bold', boxShadow: '0 2px 8px rgba(205, 127, 50, 0.5)', zIndex: 10
                                        }}>
                                        🥉 3ER PUESTO
                                    </div>
                                    <img src="assets/img/llorvi.png" alt="LLORVI" className="team-logo-formatotorneo" />
                                </div>
                            </div>
                        </div>

                        <div className="bracket-col bracket-col-right">
                            <div className="round-title t-right">Semifinales <br /><span>23/12 16:00 HS</span></div>

                            <div className="matchup match-semi-r">
                                <div className="team-slot slot-teal">
                                    <img src="assets/img/llorvi.png" alt="LLORVI FC" className="team-logo-formatotorneo" />
                                </div>
                                <div className="team-slot slot-teal">
                                    <img src="assets/img/hermas.png" alt="HERMAS FC" className="team-logo-formatotorneo" />
                                </div>
                            </div>

                            <div className="vertical-connector-right"></div>

                            <div className="round-title mt-20 t-right">Repechaje (Finalizado) <br /><span>6 - 0</span></div>
                            <div className="matchup play-in match-playin">
                                <div className="team-slot slot-orange">
                                    <img src="assets/img/hermas.png" alt="Hermas FC" className="team-logo-formatotorneo" />
                                </div>
                                <div className="team-slot slot-orange">
                                    <img src="assets/img/losexplosivosversionapagada.png" alt="losexplosivos FC" className="team-logo-formatotorneo" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card gallery-card" style={{ gridColumn: '1 / -1', marginTop: '20px' }}>
                    <div className="gallery-content">
                        <h3>Galería Multimedia</h3>
                        <p>Reviví los mejores momentos. Fotos y videos exclusivos de cada fecha.</p>
                    </div>
                    <a href="https://drive.google.com/drive/folders/1ECHt9hNI_vWzLYMVMDzqOmc523grMlfh?usp=drive_link"
                        target="_blank" className="gallery-btn">
                        Ver Fotos <span style={{ fontSize: '1.2rem' }}>📸</span>
                    </a>
                </div>

            </div>
            <footer>
                <div className="footer-content">
                    <p className="copyright">
                        &copy; 2025 <strong>SAS CUP</strong>. Todos los derechos reservados.
                    </p>
                    <p className="developer">
                        Desarrollado por <span className="dev-name">Francisco De Cilia</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
