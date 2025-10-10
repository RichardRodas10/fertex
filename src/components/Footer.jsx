import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1 */}
        <div className="footer-column">
          <h2>Contáctanos</h2>
          <p>
            Si tienes alguna pregunta o deseas más información sobre nuestras clases,
            no dudes en comunicarte con nosotros. ¡Estamos aquí para ayudarte!
          </p>
        </div>

      
        {/* Columna 2 */}
        <div className="footer-column">
          <h3>Datos de contacto</h3>
          <p><strong>Fertex</strong></p>
          <p><strong>Teléfonos:</strong><br/>+51 933 601 356<br/>+51 944 351 592</p>
          <p><strong>Correo:</strong><br/>fertexvillaflores@gmail.com</p>
        </div>

        {/* Columna 3 */}
        <div className="footer-column">
          <h3>Localización</h3>
          <p>
            Av. los Jardines Este 609, San Juan de Lurigancho 15431
          </p>
          <p>
            Av. EL Muro Mz 9 lote 18, Mariscal Cáceres, San Juan de Lurigancho
          </p>

          <div className="footer-social">
            <h3>Síguenos</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/FertexGukGi" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/fertexartesmarciales/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="footer-bottom">
        <p>Copyright © 2025 TaekwondoFertex</p>
        <p>Powered By TaekwondoFertex</p>
      </div>
    </footer>
  );
}

export default Footer;