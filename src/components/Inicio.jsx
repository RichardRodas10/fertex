import '../styles/Content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faCrown, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

function Inicio() {
  return (
    <div id="inicio" className="start-container">

      {/* Hero con imagen */}
      <div className="hero-section">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h2 className="hero-subtitle">ARTES MARCIALES</h2>
            <div class="animate title">
              <span>F</span><span>E</span><span>R</span><span>T</span><span>E</span><span>X</span>
            </div>
            <p className="hero-text">TaekwondoFertex - Escuela de artes marciales con 20 años de experiencia. Enseñanza y difusión del Taekwondo ITF, Muay Thai, Capoeira y Preparación Física.</p>
          </div>
        </div>
      </div>

      {/* Sección blanca debajo */}
      <div className="intro-section">
        <div className="cards-container">

          {/* Card 1 */}
          <div className="card card-orange">
            <div className="card-icon"><FontAwesomeIcon icon={faHandshake} /></div>
            <h3 className="card-title">Disciplina y respeto</h3>
            <p className="card-text">Enseñamos valores fundamentales que trascienden el ámbito deportivo, ayudando a formar mejores personas.</p>
          </div>

          {/* Card 2 */}
          <div className="card card-yellow">
            <div className="card-icon"><FontAwesomeIcon icon={faCrown} /></div>
            <h3 className="card-title">Entrenamiento de calidad</h3>
            <p className="card-text">Contamos con instructores altamente calificados para brindarte mejor experiencia.</p>
          </div>

          {/* Card 3 */}
          <div className="card card-red">
            <div className="card-icon"><FontAwesomeIcon icon={faHandHoldingHeart} /></div>
            <h3 className="card-title">Compromiso con nuestros alumnos</h3>
            <p className="card-text">Nos dedicamos a apoyar a cada alumno para alcanzar su máximo potencial.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Inicio;