import '../styles/Content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contacto() {
  return (
    <div className="contacto">
      <section id="contacto" className="contacto-container">
        <h2 className="contacto-title">Nuestros locales</h2>
        <div className="contacto-content">
          <div className="contacto-info">
            <h3>Taekwondo - Fertex Mariscal Cáceres</h3>
            <span className="contacto-boton">DATOS DE CONTACTO</span>
            <p><strong>Dirección:</strong><br />
              Av. El Muro Mz 9 lote 18, Mariscal Cáceres, San Juan de Lurigancho
            </p>
            <p><strong>Teléfono:</strong><br />+51 944 351 592</p>
            <p><strong>Correo:</strong><br />fertexvillaflores@gmail.com</p>
            <p><strong>Síguenos:</strong></p>
              <a href="https://www.facebook.com/FertexGukGi" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/fertexartesmarciales/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
          </div>

          <div className="contacto-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.175344355436!2d-76.98083639485937!3d-11.950234004978437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c50f866b502b%3A0x5631bff9e0050e03!2sTaekwondo%20-%20Fertex%20Mariscal%20C%C3%A1ceres!5e0!3m2!1ses!2spe!4v1760282931902!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{
                border: 0,
                borderRadius: '15px',
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Fertex"
            ></iframe>
          </div>
        </div>

        <div className="content-bottom">
        </div>

        <div className="contacto-content">
          <div className="contacto-info">
            <h3>Artes Marciales - Fertex Villa Flores</h3>
            <span className="contacto-boton">DATOS DE CONTACTO</span>
            <p><strong>Dirección:</strong><br />
              Av. Los Jardines Este 609, San Juan de Lurigancho 15431
            </p>
            <p><strong>Teléfono:</strong><br />+51 933 601 356</p>
            <p><strong>Correo:</strong><br />fertexvillaflores@gmail.com</p>
            <p><strong>Síguenos:</strong></p>
              <a href="https://www.facebook.com/FertexGukGi" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/fertexartesmarciales/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
          </div>

          <div className="contacto-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797.0623137983624!2d-77.00066952301201!3d-12.00297822202396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c55d77d1b035%3A0x220b1a1847e934e6!2sArtes%20Marciales%20-%20FERTEX%20Villa%20Flores!5e0!3m2!1ses!2spe!4v1760283061155!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{
                border: 0,
                borderRadius: '15px',
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Fertex"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacto;